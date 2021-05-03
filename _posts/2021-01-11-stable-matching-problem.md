---
layout: post
title: "Stable Matching Problem"
description: Analysis and explanation of Gale-Shapley
author: William Nguyen
---

Due to obtaining a teaching assistant position for an algorithms course, I am beginning to revisit the different topics. One such topic is the stable matching problem.

# Table of Contents

1. [The Problem](#the-problem)
2. [The Gale-Shapley Algorithm](#the-gale-shapley-algorithm)
3. [Correctness](#correctness)
4. [The Optimal Matching](#the-optimal-matching)
5. [The Pessimal Matching](#the-pessimal-matching)
6. [Some Reflections and Further Self Study](#some-reflections-and-further-self-study)

### The Problem

Given $$n$$ men and $$n$$ women, and an ordering of size $$n$$ for each individual giving their preference for whom to be matched to among those of the other type, give a stable matching if one exists.

A **stable matching** is defined as a perfect matching with no unstable pairs:

- **Perfect matching**: Each man gets matched exactly with one woman, and each woman with exactly one man.

- **Stability**: In a matching $$M,$$ an unmatched pair $$(m, w)$$ is unstable if man $$m$$ and woman $$w$$ prefer each other to their matched partners.

Example: Suppose we are given the following preference lists for each participant, ranking their highest preference to their lowest preference.

$$m_1: w_1, w_2, w_3$$\\
$$m_2: w_2, w_1, w_3$$\\
$$m_3: w_1, w_2, w_3$$

$$w_1: m_2, m_1, m_3$$\\
$$w_2: m_1, m_2, m_3$$\\
$$w_3: m_1, m_2, m_3$$

Given these preference lists and a matching $$(m_1, w_3), (m_2, w_2), (m_3, w_1),$$ we can assert that this is not a stable matching. The reason is because $$(m_1, w_2)$$ is an unmatched pair that prefer each other to their current partners. However if we looked at a different matching, $$(m_1, w_1), (m_2, w_2), (m_3, w_3),$$ we get a stable matching, despite $$m_3$$ and $$w_3$$ being matched with their lowest preference.

A fact that isn't obvious is that there always exists a stable matching. We will show this through a correct algorithm that terminates and gives a stable matching for any inputs.

### The Gale-Shapley Algorithm

```
algorithm:
    Initialize all m ∈ M as free
    Initialize all w ∈ W as free
    while ∃ a free man m who still has a woman to propose to:
        w = highest woman on m's list to whom m has not yet proposed
        if w is free:
            pair (m, w)
        else ∃ pair (m', w):
            if w prefers m to m':
                free m'
                pair (m, w)
            else:
                w rejects m
```

This algorithm, designed by David Gale and Lloyd Shapley, is quite simple. We start with everyone free and unpaired. We take an arbitrary man $$m$$ who is free and still has women left to propose to, and consider their highest ranked woman $$w$$ that they have not proposed to yet. If the woman is free, we pair $$(m, w).$$ If the woman is already paired up $$(m', w),$$ then we only free $$m'$$ for $$m$$ in the case that $$w$$ prefers $$m$$ to $$m',$$ else $$w$$ rejects $$m.$$

Some of the properties of the algorithm:

- Men propose to women in decreasing order of preference.
- Each man proposes to each woman at most once.
- Once a woman is matched, she never becomes unmatched; only trades up.

### Correctness

**Claim**: The algorithm terminates after $$\leq n^2$$ iterations of our loop.

**Proof**: We know this is true as for our observation that each man proposes to each woman at most once, and therefore at most $$n$$ proposals for each man. And since women never become free upon being matched, at some point all men will not be free, in which case the algorithm terminates.

**Claim**: The output is a perfect matching.

**Proof**: Suppose, for the sake of contradiction, that $$m_1$$ is not matched upon termination of the algorithm. Therefore, we know that some woman $$w_1$$ is not matched upon termination either. Then by the observation that women never become free after matching and only trade up in the algorithm, $$w_1$$ has never been proposed to, otherwise they would have been matched by any free man proposing to them. But $$m_1$$ proposed to everyone, since he ends up unmatched at the end of the algorithm.

**Claim**: There are no unstable pairs in the output of the algorithm.

**Proof**: We will prove this by contradiction. Suppose $$(m, w)$$ is an unstable pair, each prefers each other to the partner in the Gale-Shapley matching $$S.$$

First case, we consider $$m$$ never proposed to $$w.$$ By the algorithms property, men propose in decreasing order of preference, and therefore we know that $$m$$ prefers their current partner in $$S$$ to $$w.$$ Which means $$(m, w)$$ is stable.

Second case, we consider $$m$$ proposed to $$w.$$ This means that our algorithm had $$w$$ reject $$m$$ right away or later. But if $$m$$ did propose to $$w,$$ then they would stay matched if they truly preferred each other to their partners in $$S.$$ This is true since women in the algorithm only trade up.

In either case, $$(m, w)$$ is stable, a contradiction.

### The Optimal Matching

We begin the discussion of optimal and pessimal matchings by defining the following.

Man $$m$$ is a **valid partner** of woman $$w,$$ if there exists some stable matching in which they are matched.

A **man-optimal stable matching** is a stable matching in which each man receives the best valid partner according to his preferences (NOTE: This does not mean their highest preferred woman).

**Claim**: The Gale-Shapley algorithm as presented above, finds a man-optimal stable matching $$S*.$$

**Proof**: We will prove this by contradiction. Suppose that some man is paired with someone other than his highest valid partner. Men propose in decreasing order of preference, and therefore this man was rejected by a valid partner.

Let $$m$$ be the man who is the first such rejection. Let $$w$$ be the woman who is the first valid partner that rejects him. Let $$S$$ be a stable matching where $$m$$ and $$w$$ are matched.

In building $$S*,$$ when $$m$$ is rejected, $$w$$ forms a pair with some $$m',$$ whom she prefers to $$m.$$ Let $$(m', w')$$ be a matching in $$S.$$ In building $$S*,$$ $$m'$$ is not rejected by any valid partner at the point when $$m$$ is rejected by $$w,$$ because this is the first rejection by a valid partner. Thus, $$m'$$ prefers $$w$$ to $$w',$$ as $$w$$ came first on $$m'$$ preferences. But we have that $$w$$ prefers $$m'$$ to $$m.$$ Thus $$(m', w)$$ is unstable in $$S.$$

### The Pessimal Matching

Applying the same definition of a valid partner as above, but with women, the Gale-Shapley algorithm actually matches each woman up with their worst valid partner.

We define a **woman-pessimal stable matching** as a stable matching in which each woman is matched with their worst valid partner according to their preferences (NOTE: This does not mean the lowest man on their preference lists).

**Claim**: The Gale-Shapley algorithm as presented above, finds a woman-pessimal stable matching $$S*.$$

**Proof**: Suppose $$(m, w)$$ is matched in $$S*,$$ but $$m$$ is not the worst valid partner for $$w.$$ Then there exists a stable matching $$S$$ in which $$w$$ is paired with a man, say $$m',$$ whom she likes less than $$m.$$ Let $$w'$$ be matched with $$m$$ in $$S.$$ But we know that $$m$$ prefers $$w$$ to $$w',$$ due to the man-optimality of $$S*.$$ Thus, $$(m, w)$$ is unstable in $$S,$$ as $$w$$ also prefers $$m$$ to their current partner in $$S.$$

### Some Reflections and Further Self Study

I was first introduced to the Gale-Shapley algorithm by [Shayan Oveis Gharan](https://homes.cs.washington.edu/~shayan/) in my algorithms course. To me at the time, I saw the algorithm as a simple introduction to proving algorithms through various techniques, particularly an argument by contradiction. It has been around $$9$$ months since I last learned about stable matchings. At this moment, I work under his former PhD student [Robbie Weber](http://weberrobbie.com/) as a teaching assistant. I am revisiting stable matching particularly because of this position, but also due to the realizations (thanks to Robbie) that the algorithm has some possibly negative consequences if applied without much thought. This is particularly due to the optimal and pessimal outputs based on which type is proposing and not proposing.

There's also an interesting question, which is still open as far as I know, on the bound for how many stable matchings exist for any given instance. A paper by [Anna Karlin](https://homes.cs.washington.edu/~karlin/), Shayan Oveis Gharan, and Robbie Weber, examines this [[The Paper]](https://arxiv.org/abs/1711.01032). The current agreement for the lower bound on how many stable matchings can exist is $$\Omega(2.28^{n}).$$ Right now, my students in the course are being asked to create a family of instances (a description so that for any $$n \geq 1,$$ we could write down the stable matching instance) in their homework such that there is some $$\Omega(c^{n})$$ stable matchings with $$c > 1$$.

I always thought that this problem was taught at the beginning of my algorithms course to motivate the study of proving algorithms. But I've realized that there is plenty to be considered in its applications to our reality, as well as the study of its limits. I'll have to do further research into the consequences of its applications though.
