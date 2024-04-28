---
layout: post
title: "The Magic Behind Containerization"
description: Container basics
author: William Nguyen
---

# Why Containers?

**Bare metal machines**

- No resource isolation
- Faults are contagious
- To scale, you need to overprovision

**Virtual machines**

- Scaling is flexible, but takes time
- Cost for spinning up VMs. Each VM has its own OS

We want something that allows for resource isolation, easily scales, and at no performance cost.

**Containers**

- Self-contained processes
- Scale up in seconds
- Faults isolated to containers
- No overhead
- Shares the host OS

Containers achieve this by using existing virtualization, isolation, and resource-management mechanisms in the Linux kernel. Because these are existing features in the OS, there is effectively no performance cost.

# chroot

`chroot` is a system call in unix and unix-like operating systems that changes the apparent root directory for the current process and its children. The process can then only access files within the designated directory tree.

To set up your own little chroot jail, you will need to prepare the appropriate root directory in this target directory. To get a minimal chroot jail going:

1. Copy `/bin/ls` and `/bin/bash` into `{target_directory}/bin`.
2. Run `ldd /bin/ls` and `ldd /bin/bash` to see the libraries that are required for those commands. Copy them to `{target_directory}/lib`. Make sure to copy the actual files, not the symlinks.
3. Run `sudo chroot {target_directory}`.

```
iams@pi:~/demo $ ls -R minimal-image/
minimal-image/:
bin  lib

minimal-image/bin:
bash  ls

minimal-image/lib:
arm-linux-gnueabihf  ld-linux-armhf.so.3  libc.so.6      libdl.so.2     libtinfo.so.6.2
ld-2.31.so           libc-2.31.so         libdl-2.31.so  libtinfo.so.6

minimal-image/lib/arm-linux-gnueabihf:
libc.so.6  libdl.so.2  libpcre2-8.so.0  libpthread.so.0  libselinux.so.1
iams@pi:~/demo $ sudo chroot minimal-image/
bash: warning: setlocale: LC_ALL: cannot change locale (en_US.UTF-8)
bash-5.1# ls
bin  lib
bash-5.1# echo hello world
hello world
bash-5.1#
```

# OverlayFS

Overlay file system is a union mount filesystem in Linux that takes a lower and upper filesystem and overlays them to create a merged directory. The lower directory is read-only by the process. The upper directory is normally both read and write. When a process reads, overlayfs driver will read from the upper directory, and if it doesn't exist it will read from the lower directory. When a process writes, it will write to the upper directory. If a name exists in both the lower and upper directory, it will either take the upper directory (ignoring the lower directory) or it will merge in the case that the object is a directory. This allows for more efficient use of disk by sharing file systems between the containers.

```
iams@pi:~/demo $ mkdir lower upper work merged
iams@pi:~/demo $ echo "this is the lower directory" > lower/lower.txt
iams@pi:~/demo $ echo "this is the upper directory" > upper/upper.txt
iams@pi:~/demo $ sudo mount -t overlay overlay \
> -o lowerdir=/home/iams/demo/lower,upperdir=/home/iams/demo/upper,\
> workdir=/home/iams/demo/work /home/iams/demo/merged
iams@pi:~/demo $ ls merged/
lower.txt  upper.txt
```

# Linux Namespaces

Introduced to the Linux kernel in 2002, namespaces control what resources the process can see.

The following are the types of namespaces that exist in the current Linux kernel:

- `mnt`: Hide mounts from other namespaces
- `pid`: Hide processes with an independent set of PIDs
- `net`: Each namespace has a private set of IPs
- `uts`: Allow the namespace to have a distinct host and domain name
- `user`: Map users in the namespace to users in other namespaces
- `cgroup`: Hides the cgroup from processes it contains
- `ipc`: `shmget/shmat` isolated to that namespace
- `time`: Allow different system times

This provides isolation to the running process, limiting the access to system resources without the process being aware of the limitations.

```
iams@pi:~ $ sudo unshare --pid --fork python3
Python 3.9.2 (default, Mar 12 2021, 04:06:34)
[GCC 10.2.1 20210110] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import os
>>> print(os.getpid())
1
>>>
```

# cgroups

Introduced to the Linux kernel in 2007, control groups limit, account for, and isolates resource usage (CPU, memory, disk I/O, etc) to a collection of processes. You can control runtime parameters of the Linux kernel by writing to files in `/sys/fs/cgroup`.

```
iams@pi:~ $ sudo su -
root@pi:~# mkdir /sys/fs/cgroup/example
root@pi:~# echo 3 > /sys/fs/cgroup/example/pids.max
root@pi:~# echo $$ > /sys/fs/cgroup/example/cgroup.procs
root@pi:~# sleep 30&
[1] 1178
root@pi:~# sleep 30&
[2] 1179
root@pi:~# sleep 30&
-bash: fork: retry: Resource temporarily unavailable
-bash: fork: retry: Resource temporarily unavailable
-bash: fork: retry: Resource temporarily unavailable
```
