---
layout: post
title: "Contributing to Synapse [Long Read]"
description: Documentation of my experience interning at Sage
author: William Nguyen
---

# Table of Contents

1. [Introduction](#introduction)
2. [Week 1: April 5 to 9](#week-1-april-5-to-9)
3. [Week 2: April 12 to 16](#week-2-april-12-to-16)
4. [Week 3: April 19 to 23](#week-3-april-19-to-23)
5. [Week 4: April 26 to 30](#week-4-april-26-to-30)
6. [Week 5: May 3 to 7](#week-5-may-3-to-7)
7. [Week 6: May 10 to 14](#week-6-may-10-to-14)
8. [Week 7: May 17 to 21](#week-7-may-17-to-21)
9. [Week 8: May 24 to 28](#week-8-may-24-to-28)
10. [Week 9: May 31 to June 4](#week-9-may-31-to-june-4)
11. [Week 10: June 7 to 11](#week-10-june-7-to-11)
12. [Week 11: June 14 to 18](#week-11-june-14-to-18)
13. [Week 12: June 21 to 25](#week-12-june-21-to-25)
14. [Week 13: June 28 to July 2](#week-13-june-28-to-july-2)
15. [Week 14: July 5 to 9](#week-14-july-5-to-9)
16. [Week 15: July 12 to 16](#week-15-july-12-to-16)
17. [Week 16: July 19 to 23](#week-16-july-19-to-23)
18. [Week 17: July 26 to 30](#week-17-july-26-to-30)
19. [Week 18: August 2 to 6](#week-18-august-2-to-6)
20. [Week 19: August 9 to 13](#week-19-august-9-to-13)
21. [Week 20: August 16 to 20](#week-20-august-16-to-20)
22. [Week 21: August 23 to 27](#week-21-august-23-to-27)
23. [Week 22: August 30 to September 3](#week-22-august-30-to-september-3)
24. [Week 23: September 6 to 10](#week-23-september-6-to-10)
25. [Week 24: September 13 to 17](#week-24-september-13-to-17)
26. [Week 25: September 20 to 24](#week-25-september-20-to-24)
27. [Week 26: September 27 to October 1](#week-26-september-27-to-october-1)
28. [Week 27: October 4 to 5](#week-27-october-4-to-5)

### Introduction

Sage Bionetworks is a nonprofit open-science biomedical research and technology development institution whose goal is to enable responsible data sharing, promote reproducible research, and accelerate advances in research towards diseases like cancer and neurodegenerative diseases. The team I was on is called Synapse (learn more at [synapse.org](https://synapse.org)). The Synapse platform is a suite of web services and tools to enable researchers to collaborate, share, and analyze data. The platform contains a web client, a python client, an R client, and a command line client to interact with Synapse. These clients use Syanpse's back-end RESTful web services. I was a back-end engineer intern on Synapse's RESTful web services, programming in Java. This is a remote internship due to the COVID-19 pandemic. I was compensated with $37 an hour.

### Week 1: April 5 to 9

So it began. I felt nervous, but certainly excited. Onboarding began with my introduction to Aaron, the principal security engineer at Sage. He gave me a warm welcome and helped me set up the macbook pro they sent me. I had a lunch with the engineers to get to know the team. It was a bit awkward, especially since everything is done remotely via Google Meets for video conferencing. Eventually I had the opportunity to meet Bruce, the director of the Synapse platform's back end. He told me that I will be choosing between his team and the web engineering team. Without hesitation, I told him I wanted to be on his team. He laughed and told me I should wait to meet the representative of the web engineering team first before making a decision. I told him that I didn't have any interest in front-end development, which by process of elimination leaves me with the back end.

When it became time to meet the front-end developer that would represent the team to me, I had already made up my mind. The front-end developer I talked to was super kind though, and she took the place of the director of web engineering since he was on vacation at the time. I told her I would like to try back-end development first and maybe half way through the internship I would make a switch. This of course never came true. I joined Bruce's team on the back end, and I was given John as my mentor for the internship.

John has contributed 700,000+ lines of code to the Synapse platform's back end since 2010 at the time I met him. He's a principal software engineer at Sage and had been working in software development for the past 20 years. Essentially, he's the main architect of the Synapse platform's RESTful web services. Our first google meets call was an introduction to each other. He told me how I will have to participate in code reviews where he looks over my pull requests while I explain it to him. He stresses the importance of me understanding every line of code I write. The code I write will be his responsibility once I leave the internship in 6 months if anything breaks. John also notes that 25% of his time for the next 6 months will be invested towards me. Unlike the overwhelming majority of the company, John does not use Slack to communicate. He thinks that the name "Slack" is indicative of what it does, that being slacking off. So the method of communication between John and I would be through Google Chat and Google Meets. He says that if he was on Slack, he would be constantly bothered and pinged to answer things, so the absence of a Slack account helps him be more productive and avoid all the noise. However, he notes that he will always be on-call for me though.

Also a funny note, my mentor doesn't turn on his camera ever. He did turn on his camera for our introduction to each other. He told me that this will be the last time I see his face, since he finds it more productive to just have the camera off. I totally get what he means though, and around the 3rd to 4th week, I had my camera off during all meetings as well.

To gain an idea of what a code review looked like, John added me to a code review meeting with Marco, who is a principal software engineer as well. John and Marco are the 2 primary engineers on Synapse's back end, and therefore they work closely together. They review each others pull requests on a nearly daily basis and have a strong understanding of the features one another is working on. John notes to me that he will have his code absolutely roasted and ripped apart by Marco in this code review meeting, and that this is the whole purpose of a code review. The intention is to have the best code possible for the platform by double checking and also having a second pair of eyes on it to optimize and catch any issues. We want to know what we are merging into the develop branch. At Sage, they preferred to do their code reviews in a call with one another in order to have debates and discussion over the code in a pull request. The conversations are very interesting as a result and I can see how it immediately improves one's engineering senses when engaging directly with another's opinion on your code.

I also had to start doing a CITI training certificate thing for clinical research and experimentation stuff. Tedious, but guessed a lot of questions through. This was incredibly boring. On another note, I was the only intern on the Synapse team other than a graduate student working on the python client. This other intern would leave in the next couple of months, leaving me to be the only intern.

### Week 2: April 12 to 16

Stand up meetings were 3 times a week for 15 minutes. Awkward for me because there is not much to hear from me yet. And this began a week and a half of what seemed like hell. What followed was the set up of the Synapse platform's back-end development environment on my local machine. It was not pretty. Tests were failing. Had to upgrade and downgrade MySQL a billion different times. Had assistance from various IT engineers with setting up various AWS accounts. Imagine heading to each stand up meeting that week only to tell the team that you've been hitting your head on a wall setting up the local development for Synapse. Their bootstrap guide was also a little bit dated, so some things I had to figure out on my own.

The worst came when a test failed because an error message was truncated. One of the tests relied on a detailed error message thrown at the database level. Since the error message was truncated, it contained less information than what we wanted in the message, and the assert for the message in the test failed. So John and I debugged through the MySQL drivers and found the exact bytes in the driver code of MySQL that had the error message (yea, debugging through MySQL drivers is not living your best life). What we found was that the drivers did not contain the details in the error message, meaning the database did not lose the details in the message as it went to Java Spring. MySQL was likely the issue itself. Among all of this chaos, no engineers were able to reproduce this issue on that version of MySQL.

### Week 3: April 19 to 23

After much deliberation, I changed the MySQL version to Marco's version and this solved the issue. But this would fail another test, but since Marco was able to reproduce it on their machine, it would be safe to just continue and ignore this new failure. Going through the development bootstrap for Synapse was awful and I was glad it was over. Having all the tests pass locally was an unnecessary goal that I naively put on myself. To run the local tests, it would take over an hour to finish, and it wouldn't even matter. What mattered was that a pull request's code would pass on Jenkins. While doing local development, I would never have to run the entire test suite, as that is never useful for one's time for obvious reasons (the codebase is very large).

So now I began my first Jira ticket. John and Marco gave me 6 hours of their day to teach me everything from the git workflow to tomcat to maven to testing to debugging. It was an extremely informative experience and I became very efficient at Eclipse (I used Eclipse because the engineers at Synapse all used it). John and Marco emphased to me that my goal should be to learn as much as possible and to use them and their experience to extract as much out of this internship as possible. This lowered the bar a bit for me, which relaxed my nerves regarding how much impact I would be expected to deliver.

I think one of the stark aspects of Sage that stood out to me starting this week was the camaraderie among the engineers. Due to the compactness and small size of the team, everyone worked very closely with one another. It felt like a family. And because of this, they also cared deeply about their work and their engineering.

Since Sage is a company helping biomedical researchers advance their disease research, it also had teams in oncology, neurodegenerative research, and systems biology. Each of these teams sent a representative to give me an introduction to their teams. They were all incredibly nice people to meet.

### Week 4: April 26 to 30

So what is my first Jira issue? JSON schema creations. A JSON schema is a vocabulary that allows validation of JSON. If we have some JSON that we want to have follow a particular schema, JSON schemas provide nice functionality and logic for this. A user reported that when they created a JSON schema using our schema services and an element in the schema was unsupported, the element would be silently ignored. The user wanted to be alerted when this occurs. For example, "maxLength" is a supported element in JSON schemas that restricts the length of a string. But if the schema being created has "maximumLength" instead, this isn't a supported element. In this case, the JSON schema request would go through and give a schema without the "maximumLength" element, but no alert would be given.

I wrote a bunch of integration and unit tests to reproduce the issue. I learned a lot about mockito, testing, code coverage, software design, debugging, tomcat, and more. Some things like code coverage were repeated learning experiences from coursework at university, but seeing it in a real world engineering scenario made it more clear why it was so important.

So I managed a solution to the issue. Since JSON schemas are recursive in nature, I would have to traverse through the schema. So the schema that we want to build is parsed from the http message and we need to turn it into a JSON object in Java. This maintains the unsupported element, but then when we create a JSON entity from this object, we lose the unsupported element. A JSON entity in our case is the CreateSchemaRequest. My solution is when the CreateSchemaRequest is returned in the read call of the JSONEntityHttpMessageConverter, we must validate it against the string of the schema that was initially read from the http message.

I initiated a pull request, had a code review with John, and got lots of feedback. Our code review topics included naming of tests, naming of methods, optimizations of the validation algorithm, theory and principles in software design, integration testing feedback, unit testing feedback, code coverage, and more. I spent the remainder of this week implementing the feedback.

### Week 5: May 3 to 7

Bruce assigned me a new issue Monday. John was out of office, so I decided to just sort of chill for the day. I tried reading the new ticket assigned to me, but had no clue where to start. The next day, John would approve my first pull request after a second code review. Then he gave me a run down of my next assigned issue. He states to me that this issue is not something he wants to have assigned to an intern, but since it is assigned to me, I should make it a learning experience.

Essentially when a user with a separate account uploads an object to an S3 bucket via an STS token, they need to give ownership of the object to the bucket owner. If they do not do this, then the bucket owner will have objects in their bucket that they do not have ownership permissions on. There would be security concerns in this case. At the moment, when an object is uploaded to the bucket, it does not transfer ownership to the bucket owner. We want all upload attempts in such case with the STS token, to mandate that ownership on the object is given to the bucket owner.

The Jira ticket had a solution in it by our client developer who reported it, Jordan. The fix provided in the ticket made sense, but wouldn't immediately work if we were to just paste it in our STS policy file. This would come to haunt me for a good amount of time as it was actually the correct solution.

I wrote tests to reproduce the issue with a lot of help from John as the policy was not behaving how I was hoping it would behave. Our test ended up using 2 temporary clients off of STS credentials. Our fix began to work somewhat, but we needed one extra step. The read_write permissioned client was not able to read due to how we conditioned the policy to mandate using the bucket-owner-full-control canned ACL when uploading the object. The solution was to deny access to putObject if they didn't specify the bucket-owner-full-control canned ACL, as opposed to permitting read_write only when they did specify the bucket-owner-full-control canned ACL.

At the end of the Friday stack release meeting, the engineers and I got into a discussion over the implications of the STS token policy issue. Resulted in the realization that the bug only affected developers mainly, in particular our client engineer that reported it. This discussion was important because we were considering whether this was a "breaking change". It was concluded that this was not a breaking change, and this is a necessary change due to the security reasons.

### Week 6: May 10 - 14

So I had the pull request approved for the STS policy issue, but unfortunately this was not over yet. The next day I met with the client engineer to discuss the issue to make sure that we were reproducing it correctly. Turns out, we weren't done yet. The test was flawed since AWS seems to short-circuit the putObjectAcl condition, which is why we didn't seem to need to deny it. The reason it short circuited was possibly due to the AWS account associated with the temporary client being the same as the bucket owner of the external bucket we were using. We had Xa, our principal IT engineer (he helped me big time in my first couple weeks with setting up AWS accounts and such), set me up with a bucket that would fit our scenario of being far separated from the account associated with the credentials.

So I reproduced the issue, and putObjectAcl was being prohibited this time. And it turns out in the end, once all the dust had settled, the correct solution was on an AWS official document online, which was the same solution that Jordan wrote. Note, this was not the first time I read this document either. But it didn't seem to work before because of various reasons such as there being more than one place in our infrastructure that handles AWS policies. The biggest obstacle in this entire issue, and the thing I learned, is that sometimes the best option is to delete your code and start over. In the moments prior to resolving the issue, part of the incorrect solution was behaving how we wanted. As a human, my first instinct is to want to add additional code that would resolve the parts that are still failing. The reality was that I had to scrap the partial solution entirely, because it was blocking me from finding a complete solution. Deleting code that partially works is a hard thing to do as an engineer. So a lesson: sometimes the best thing to do is throw it out the window and start over.

The specific solution is that we did not want to deny putObjectAcl and putObject, or to just deny putObject. But rather to permit putObject and putObjectAcl when the bucket owner is given full control. The logic here is tricky, but it does prohibit the putObjectAcl operation after the object is uploaded. One of the issues while solving this was that the uploader could still modify the ACL of the object after it was uploaded.

Had the pull request approved the next day. Also modified the main develop build on Jenkins to run the conditional tests for STS, which never ran before (yikes because the feature could've been broken and no one would have ever known). Marco makes a good point about conditional tests being a bad idea, especially in continuous integration like this.

### Week 7: May 17 to 21

Now the design phase for a big project begins for me. I am tasked with engineering a web service that allows a user-friendly annotating experience on entities. It is referred by John as the "next-step" annotating feature, but by the front-end engineers as a JSON annotation editing wizard.

The gist is that Synapse has entities such as folders, files, and so on, and we can put metadata annotations on these entities. Annotations are simply key-value pairs and therefore we represent them as JSON. We can also bind JSON schemas to entities to make annotations on entities validate against the bound schema. It is not user-friendly to have a Synapse user parse through the JSON schema to decipher the logic in it and decide what to add to the annotations and so on. This is because JSON schemas contain lots of logic such as "if", "then", "else" elements, as well as "allOf", "oneOf", "anyOf" elements. The latter elements make you validate against a list of schemas. Because JSON schemas are recursive in nature, we want a feature in which we can present the user with all the fields in the JSON schema that can be annotated immediately and unconditionally. And each time the user updates the annotations, this feature will display new fields that open up due to these conditional branches being met.

John told me that I wouldn't be coding this for a while because I would need to write a design document, then present them at a design review to the team to get approval on the feature. He then gave me some reading assignments on JSON schemas to go through. During the Jira triage meeting, Bruce assigned me a couple of tickets to do. So I did those in a sitting, had a pull request, and reviewed. After finishing the readings, John told me to come up with the smallest list of example JSON schemas that I would need to handle, and how I might handle each one. We wanted to make sure that this feature was computationally feasible.

John was out the final 2 days of the week. I decided to just get super lazy. I wanted to code honestly, not write a design document. I got to have an hour meeting with the front-end engineer I would be working with for this feature, Nick, who was also a former intern. He raised a lot of questions around the feature that I had no clue what the answer was. Frankly, I had very little clue what was going on in general with this feature. We decided that we would ask John these questions once he came back.

### Week 8: May 24 to 28

So Nick and I met with John and cleared up our concerns about the feature. The main thing we wanted to do was send a JSON schema back to the client since the client could render that as a form to be filled out by the user.

I also decided to do a random ticket assigned to me back in April. It had to do with anonymous users accessing an API that should not be allowed for anonymous users. It was short.

The design document went to the back burner. I really did not want to do it. So I ended up picking up another ticket. This next issue is on revalidation of the annotations on entities against a bound JSON schema when the schema is changed. If the JSON schema does not have a semantic version, then changing the schema does not trigger the revalidation of the annotations against the new schema. JSON schemas were never intended to be used without versioning, so this was a bug.

To help me, John gave me a lesson on their asynchronous workers and overall system. I was not able to digest it all at the time due to the large amount of information and the absence of any note-taking on my part.

I was extremely lazy this week. I think it was because I had a design document to do and I wasn't doing it. Basically, motivation tanked this week.

### Week 9: May 31 to June 4

The revalidation on the entity was not an easy thing to test. Further discussion with John revealed this. Essentially the test would have the following format:

- Create a project entity
- Start an asynchronous job to create a JSON schema with no semantic version
- Bind the JSON schema to the project
- Create a folder to the project
- Set annotations on the folder
- Wait for validation results to be valid
- Change the JSON schema by creating a new JSON schema with the same ID
- Wait for validation results to be invalid

The issue is that any operation that touches the entity can send a message after commit to the SNS topic, which in turn sends the message to AWS SQS queues registered with that topic. Then various workers, such as the SchemaValidationWorker, will handle the messages. Issue arises due to the delays in handling the messages. So a message that should have been handled by the workers before the creation of the 2nd JSON schema, is handled during the 2nd wait. This is problematic since a test can pass despite no fix being implemented.

So I wrote an implementation to resolve the issue. The test passes correctly 80% of the time however. John's theory is that since the job to create the 2nd JSON schema is an asynchronous job, it may be ran slowly and therefore time out in the wait due to my local machine being slow. I decided to increase the time out bound, and it turns out that the wait can take much longer than 30 seconds on my local machine. Also John told me to use pagination for my queries because a query can give a massive result that we might not be able to handle in memory. My solution involved writing a query to determine all the entities that have the JSON schema bound to it, in order to trigger revalidation on all of the entities. He also notes to me that I should do my fix at the manager level as opposed to the DAO. This is because it is easier to unit test things with mockito. I still had to write tests at the DAO level though because of the pagination query. My primary test however would be the integration level test that I used to reproduce the issue in the first place.

### Week 10: June 7 to 11

I had a code review Monday and received a lot of feedback. Notable feedback was using mockito to assert the number of times a particular line of code was executed. Also I embarrassingly missed a few tests on some new code I introduced. When working on an issue like this, I ended up modifying a handful of files, and each piece of logic introduced needed to be covered in testing. I forgot this for some files since it was only a few added lines, yet it still needed to be tested for code coverage. Added the code review change requests, had another review the next day, and was done. John now tells me that the design document is my primary concern. Apparently one of the product managers is trying to push along the project and keeps inquirying about it. So I began asking more questions and John clarifies his vision of the feature to me. This JSON annotation editing wizard feature is going to be asynchronous and I would have to address 2 use cases.

- Given the entity ID, which has a bound JSON schema to it and possibly also annotations, we must give the "next-step" for the JSON schema against the annotations present. This "next-step" schema represents all the fields that can be filled out immediately and unconditionally.
- Second use case is given the entity container ID, which is the location of the nonexistent entity we plan to annotate, we want a next-step schema on some JSON annotations against the destination's bound JSON schema.

So with the knowledge given by my mentor, I figured out how to write a design document for this feature. I looked at his design documents to get an idea of how asynchronous jobs are done. The idea is to have a PUT method to begin the asynchronous job and this returns a token. The client will then use the GET method with the token to check the status of the asynchronous job. This GET method will return a JSON schema that can be rendered when it finishes. So to handle the above two cases, we have an interface that will be implemented with 2 different types of requests and responses.

Gave John updates Wednesday, Thursday, and Friday for the design document. With the above details and more, I wrote a pretty neat document. John tells me that the next thing for me to do is flesh out the individual JSON schema cases again to ensure that it is possible to even traverse it and build a schema in such a way that it can be rendered by the React.js form. This was the first task I was supposed to look into when I started this design document journey, but I decided to procrastinate on it because it seemed difficult. John notes to me that he has no clue if this feature is even possible to implement. It could happen that the nature of JSON schemas make it impossible to do this "next-step" annotating feature.

### Week 11: June 14 to 18

Started the week off meeting with John and the front-end engineer Nick due to a fear of the feature being impossible. All of my fears were immediately crushed by both of them. First I thought revalidation triggering would be an issue, because a partially annotated entity being invalid could be bad. Turns out, it's totally fine to have an entity with invalid annotations present against the bound JSON schema. Then I thought "allOf" structures were going to be very problematic to deal with. Turns out, it's handled nicely by the React.js JSON schema library. I thought of other cases as well, but they were also refuted.

Met with Nick and John again on Wednesday to update them with my specific technical cases for the JSON schema algorithm. John and Nick pointed out a crucial missing understanding of the feature that I had, which is that the "next-step" schema also contains the previous schema in addition to the new fields. This is because the JSON schema rendered using React.js must also display the previous step's choices still as new choices come in. We want the user to be able to modify their previous choices. John also introduces a clever way of handling the "if" and "then" type structures, where we would pull the "properties" inside of them out into the immediate schema that encloses the "if" structures. This makes everything work logically.

The same day, Wednesday, I learned that I introduced a software regression in my very first issue. I saw a bunch of emails at 6 pm, then a message from John on Google Hangouts. I decided to take a look into the reported regression. When creating a JSON schema with an array of strings, the schema creation fails with an error stating that some element is not a JSON object. I immediately realized what the issue was. When I wrote the recursive algorithm to validate the creation of the JSON schema, I only handled objects and arrays, but not primitives and strings. This meant that the feature doesn't work if someone would use a "required" element in their JSON schema. I decided to resolve the issue immediately that night and had John do a code review that same hour with me. John wanted some more testing, refactoring of code, and cleaning up, so I spent the remainder of the night doing that. John notes that it was his fault because he reviewed my code and that he should have seen it.

The next morning I had a code review with John on the changes made and it was approved. Rest of the day was me cleaning up the design documents. I had 2, one for the primary design of the API, and the other for technical feasibility. Once I finished that, I sent out a meeting invite to the entire Synapse team to attend my design review with the attached links to the design documents. John then gave me another ticket because now the design document is pretty much done for now. This next issue is to convert the BLOBs in the ASYNCH_JOB_STATUS table to the JSON data type. This is because debugging the response and request bodies of jobs in the table is difficult when they are stored as BLOBs that you need to unzip to see. Before I could address the issue itself, John tasked me with first modernizing the DBO class for this table because it used older features.

I woke up the next day to realize that I sent out the meeting invite 2 weeks in advance. I meant to set up the meeting as early as possible. I made the corrections (following Tuesday instead of 2 weeks out) and sent out the updated invites to everyone. Caused a bit of a laugh in our stand-up meeting, as our product manager thought "really, that far out?".

### Week 12: June 21 to 25

I kept working on moving the DBO away from these dated annotation based definitions. It was a bit confusing, but I kept going at it with some level of wavering ambition. Our technical product manager (he came to the institution a couple of months before I started) decided to schedule a meeting to propose his new agile workflow for our Synapse engineering team. He wanted a more "agile" method to our development processes. My mentor, John, contested vigorously against it. He didn't like the ideas for a variety of reasons, particularly due to his opinion that we already do things just fine. The TPM's idea was to have 2 week sprints as opposed to our monthly sprints, more status related structure to our Jira tickets, handling of tickets in our sprints, and so on. John was the most resilient to the ideas presented among all the engineers.

Tuesday was my design review. After giving a very quick and short run down of my design, the interrogation by the engineers began. Luckily, my mentor took over most of the questions by answering them. I slowly realized I still had no clue what the entire feature might entail. One crucial aspect that was raised early was that we did not need to have 2 implementations to handle the 2 use cases. We could have 1 implementation that specifies the JSON schema ID in the request. What really mattered in this API was the schema to annotate against. The client can handle the binding, the updating of annotations, and other operations on the entity itself. This would handle both use cases for us.

Then the pivotal part of the entire meeting was when a front-end engineer proposed that they had been using a library that might work very nicely for this feature. It would be able to handle all of the conditional structures that I might have to handle myself. If we could have the front end handle it all, then it is far better than having the back end handle it. So the conclusion to the design review? We have Nick go investigate the library that the front-end engineer brought up. And because of that, a freeze on my progress for the feature. If Nick finds the library to do everything that needs to be done, then I won't have a job on this project. In other words, I might've wrote a design document just to have it tossed away because the APIs are unnecessary and can be done on the front end entirely.

Then I got to update John on my current progress on the BLOB to JSON conversion for the ASYNCH_JOB_STATUS table. I also asked him about his opposition to the ideas proposed by the technical product manager this week. John stated a variety of things to me, but most importantly that everything is political. He personally thought that the role of PMs should be to focus on deciding what to prioritize as features, collecting use cases, understanding market competition, understanding our users, and so on. He then went on a rant about software development philosophies, philosophies in general, and our role as engineers. I enjoy listening to John rant. Basically, his opinion is that a PM's primary job isn't to determine how many tickets are in a sprint. John also notes that they had a excellent PM on their team that eventually left for Google. He notes to me that if I decide to not work at Sage, then it is a loss for them since I'm a big investment of their time, and they need more engineers. This internship, from a management's point of view, is to train me to become an efficient engineer on their platform for the possible full-time offer. But to John and Marco, they have stated that my goal should be to just indulge in learning as much as I can. I know John wasn't pressuring me to return, but rather to just state the reality.

I spent more time debugging various tests failing due to the removal of field annotations from the DBOAsynchJobStatus. One test failure was due to needing to run the stack builder again (some new queues), and another test failure was due to new asynch job types being introduced that I had to pull in from the develop branch and also update my create table statement for the ASYNCH_JOB_STATUS. Had a code review after finishing and boy, was this somewhat embarrassing for me. So a bad design decision was made by my mentor years ago, where he made the JSONObjectAdapterException a checked exception. He states that he thought it was the correct decision at the time, but evidently not. The idea is that an unchecked exception are those that extend RuntimeException and a compiler will not force you to catch it or declare it in the method definition. A checked exception is used when you want the caller of your method to explicitly handle the exception, such as rolling back changes, retrying the call, or converting it. The thing about a JSONObjectAdapterException is that we do not expect the user to handle it. But since it was a checked exception by John's design, I embarrassingly went to several dozen files to add a "throws" declaration to all the methods with it. Turns out, I should have just converted the exception to a runtime exception, and that's enough to stop the compiler from getting angry at me. So I reverted the commit that modified all those files. Then another detail in our code review was my choice of using BIGINT to store date/timestamps in MySQL out of convenience. This is obviously a poor idea because it makes the date unreadable, so I ended up using timestamp types in the database, timestamp types in the DBO, and date types in the DTO. But then to compute the runtime in milliseconds for an asynchronous job in the table, I had to do some computation with UNIX_TIMESTAMP.

By the end of the week I had my pull request approved. Was an eventful week overall.

### Week 13: June 28 to July 2

We had a heat wave this week in Washington. Temperatures went over a 105 degrees Fahrenheit. I began Monday finding out that a python test in staging was failing over the weekend due to my previous week's code. John and Marco helped me debug this quickly. Basically if a request comes in wtih a defined concrete type, we are fine. But there are cases where the client did not need to define the concrete type of the request since it can be deserialized directly from the instantiating class rather than the interface. So the solution was to just handle some null cases.

Due to a comment by me the previous week to John on what big feature I would get to work on, John noted that nothing is well defined in Jira currently and that the product managers must collect use cases and define projects for us. We ended up meeting with a PM, and decided that I will have to collect use cases for webhooks in Synapse. The reason I got this task is because the PMs were too busy to do use case collection. I'll be honest, I did not want to do this. I just wanted to code. So moving forward, I sent a handful of emails to scientists and bioinformatics engineers to have a meeting with John and I on their possible use cases for webhooks.

I got a new feature to work on as well, but it was really small. Simply just adding a round function feature. Synapse has its own pseudo-query system for its own table services, so I had to take a bit of a look at that.

My first interview was with a bioinformatics engineer. John carried the entire meeting. He asked questions like why he wanted webhooks, how he works around the issue currently, and so on. I was useless the entire time, but I did write down everything I heard since it was my job.

I then picked up a feature that was known to be difficult to implement by a former engineer. This feature was to implement the conversion from non-list to list column types in tables. So lists don't exist in MySQL, so Synapse has a clever way of providing list column types. If we have a column that is of a list type in a table, that column will also have a secondary table just for it. This additional table has a row for every list item. Suppose in the original table, we have a row with row ID 1, and in the list column \_C2\_ of that row, we have a list that is \["value"\]. Then this secondary table mapping to \_C2\_ will have a row for "value", in which it provides the row ID of 1 and the index of the list which is 0. So that being said, implementing a conversion isn't as clear. But the concern by the former engineer had more to do with the complexity involved with data integrity, than it had to do with implementing the conversion. Typically we relied on MySQL to do all of the dirty work for us regarding data integrity. John has no clue how to implement this feature, so it's an open ended engineering problem for me.

Then at the end of the week I met with another Synapse user to interview on webhooks. This time I led the entire interview, and it ended pretty quickly because her only use case was to get notifications when a table was updated. Simple enough.

### Week 14: July 5 to 9

I became very lazy this week. My current integration test for the conversion to list column types contained a race condition. Somehow the table wasn't created yet despite already reaching the line of code where we wait for the conversion to complete. Also John is out of office this entire week.

I met with another bioinformatics engineer to talk about webhooks. It was a concise meeting, although I did not understand everything that was said. I wrote everything down profusely and asked questions to clarify, but to no avail.

This week was horrendous for me. I just found no inspiration to do this issue. I eventually decided to message Marco to throw me a new ticket to take a look at, just to take my mind temporarily off the conversion feature. He gave me one of his own issues, and it was relatively easy. I resolved it in a few hours, and then began to send a dozen questions to Marco about best practices, engineering, and so on, in relation to the ticket. We decided it was best to discuss over a call. And I was happy I got to call Marco, as he was always a great engineer and secondary mentor to me during the early weeks. One of the things he really wanted to make evident was that my time here is to learn, and if I find it stressful, I should take some time off or explore the various resources at Sage. He noted that Sage has spent a lot to get us various AWS resources and technologies, and I should use the dev accounts to explore all the technologies as a learning experience if I wanted to.

By the end of the week, I had wrapped up Marco's ticket, and moved on.

### Week 15: July 12 to 16

So John came back and I straight up told him, made like no progress on the conversion issue. So instead of being disappointed in my failures, complacency, and confusion, John spent a good amount of time teaching me how the workers behaved (he already taught me prior, but the way tables work is also a little different). During the whole lesson, it never occurred to me that I should be leveraging MySQL to reproduce the situation that I wanted to implement, which became my next plan of attack. John also helped me understand how to resolve the race condition. We will query the table and wait for it to give us back a result containing at least 1 row. This seemed to resolve all the issues.

I spent a lot of time with not a single clue how to implement the feature. But then it all came at once. 15 minutes before a meeting with John, I read something on the MySQL documentation that seemed to be what I had been looking for. The function JSON_ARRAY, will nest a sequence of arguments inside an array for a JSON column type. Within 15 minutes, I validated that this does indeed accomplish what I wanted. I told John during our meeting that I didn't have any questions and that i knew what I had to do next.

Before the week ended, I wrote the implementation and everything seemed to work. It seemed that also the secondary tables built correctly as well, which was not something I had to handle. I only needed to nest the values inside of JSON arrays in the new column, the delete the old column. The secondary tables would be built from the JSON column from the previous existing code.

Then to my horror, I realized that there still might be data integrity issues. I might have to do much more to validate that the conversions were fine. But I only realized this over the weekend, and it was time for me to take a break from all of this.

### Week 16: July 19 to 23

This was one of my most productive weeks during this internship. I would code straight through an entire day. Monday's goal was to polish up what I had so far, and thoroughly test everything. I wanted to have
a pull request by the end of the day. I achieved this. But one of my concerns over the weekend was whether integer, boolean, and string types converted nicely with the JSON_ARRAY MySQL function. It did, and also built the secondary tables correctly with the correct column type. I initially supported string to string lists, boolean to boolean lists, and integer to integer lists.

The next day I had a code review with John, and he told me not to worry about the previous concerns by the engineer on data integrity. So some of the changes John wanted included removing logic from the DAO to the SQLUtils. Another crucial feature John wanted to see possibly was boolean/integer to a string list. I told him that it might not be something that will be easy to do in this initial implementation. He told me that we might want to do it now because I'm the most familiar now of anyone about this part of the codebase. This argument is about context-loading and how it takes time for an engineer to ramp up on what's happening in any given feature or service in the codebase that they first begin working on. So I went back to figuring out if this could be supported.

Spent Tuesday nonstop coding and implementing the requested changes. Still didn't finish with all the changes by the end of the day, and so I didn't get the chance to investigate the integer/boolean to string list conversion. That being said, I was hesitant to go look at it. So when Wednesday finally came around, and I managed to wrap up the changes and then implement the boolean/integer to string list conversion, I ran into another issue. The complexity and confusion within the code only grew with this. It did not make the feature easier to read. Also the solution for this additional 2 conversions is something that the user is able to do by using the existing conversions with the string to string list conversion. So my additional implementation to support these 2 other conversions were not useful and they were only making the code less readable. John and I agreed that it wasn't necessary.

By the end of the week, after another code review and some more changes, I was finally done with this issue. It was certainly the most challenging, particularly because I did not know the existence of the JSON_ARRAY function, had troubles with the race condition in the integration test, and a poor understanding of how the tables were built. But due to me sitting on MySQL workbench, replicating the queries that I would like to build, and experimenting, I managed to find a solution.

So the week is over, and John assigned me to 2 random issues. So far the product managers have not gathered any well-defined features to work on, as their focus has still been on reorganizing our workflows.

### Week 17: July 26 to 30

Not the most eventful week. We have a post scrum on the issue I am not working on, around how to handle
annotations when getting the entity's JSON. In memory, the annotations are held in arrays. At the moment, an annotation is an array if it has more than 1 value, otherwise it is a single element. This is an issue because we are unable to define an annotation array containing 1 element. The conclusion we arrived at is that we will always default to an array unless there is a bound schema that indicates otherwise. This is because we don't want the annotations to fail when it is validated against some schema.

It's not immediately clear to me how to tackle this issue. I thought that I would have to traverse the bound schema and determine whether a branch existed or not, in order to choose array or single element correctly. I questioned John on this and he told me to just use the subschema iterable utility. This concluded to me that I would just make the decision based on whether the key appeared in the schema and how it was defined there.

The validator for the multi-value column conversion feature was out of office, so Bruce asked me whether it was safe to still go live with staging. My argument was yes, because not many people will use it, and it's not documented anywhere, and so on. Obviously, a bit risky still if someone randomly tried it and it corrupted their data. John vouched for me, saying that I had all the correct tests.

### Week 18: August 2 to 6

The company is on vacation for the week (Sage Week). I used this time to absolutely do nothing, but play chess.

### Week 19: August 9 to 13

Coming back from the vacation, I entered a state of flow. I had an idea of how to handle the array of 1 item annotation issue. I grabbed the validation schema, used the iterator on it, and then determined whether to write as an array or not based on the schema. Funnily enough, I had the wrong idea.

During my code review with John, it became evident that after the long vacation, I forgot what we had talked about. The idea we settled down before the vacation week with Nick was to default to an array, unless it was defined as a single, enum, or const in the schema.

By the end of the week, I had wrapped up on the issue. But now a new issue arises due to using the validation schema to guide the construction of the annotations in memory. Building a validation schema is an asynchronous API and getting the entity's annotations is synchronous. John proposes I build a cache for validation schemas. He emphasizes to me that a cache is almost always a bad idea. But he believes this case is a good fit for caching because we have to solve this issue of the validation schemas being used in getting the entity JSON. It also becomes evident that when a referenced schema is altered, that I would have to update all referencing schemas in the cache as well. John also asks me to figure out how to avoid deadlock in a situation where a bunch of schemas are being updated and have various conflicting dependencies. I sat there for the longest time trying to figure it out, only for the day to come, and my idea to be wrong. John notes to me that a deterministic order of how we handle our locks is a way of preventing deadlock universally. I found this a very neat idea. We did not end up using this idea though, since handling each referencing schema as its own transaction is another way of avoiding deadlock.

John also decides to call the cache an index instead, because all the schemas are present in it.

### Week 20: August 16 to 20

I begin working on implementing the DBO and DAO with the basic CRUD operations. This is pretty easy because Synapse has built-in implementations that can be extended to get CRUD operations.

I talked to John on what I had done so far, and he encouraged me to do near-daily code reviews on this project, and that we should do one the next day. The idea is that we don't want an engineer to write a bunch of code, only for a code review to toss it all away. The topic of how to approach the updating of the index also came up. We talked about 2 possible approaches:

- A lazy approach where we update the index only when the validation schema is needed.
- Have a worker that constantly runs to backfill the index, and another worker to handle the dependant schemas (I define dependant schema as a schema that has a dependency). In this case, we will update the index immediately upon schema create or change, and send out a notification to handle the dependant schemas.

Neither of these approaches would become the final approach I did. But the idea of using 2 workers to handle the reindexing would be something I would implement in a different manner.

The validator of the multi-value column conversion feature reopened the ticket because there was an issue where changing from STRING to STRING_LIST in the web client would default to a size of 50 regardless of the string column's size. I found this to be a UI problem, so I made a ticket separating that and resolved the main ticket again.

I'm also given a bug to fix where a boolean list annotation would be coerced to a string list. I finished it the next day and it seemed to be a missing case in code that I did not write.

Had a code review on my validation schema index DAO and then worked on the code review changes requested by John for the remainder of the week.

I also finished writing a Confluence wiki page on the validation schema index design, indicating the trade-offs and so on.

### Week 21: August 23 to 27

I began the week by implementing the query that would grab the dependant schemas of a particular schema
given its version ID. Made it an iterator for pagination. During my code review, John and I came to the conclusion that we did not need to have a backfilling worker because it should automatically do it when it looks at the changes table. Instead I will have to implement 2 workers, one that handles building the validation schema of a single version ID, and the other that broadcasts to the first worker all the dependant schemas of a given schema's version ID.

While implementing this, I had to debug various xml files, database errors, and code just breaking. I had to get the AWS SNS topic set up for the schema type and also create the necessary AWS SQS queues. By the end of the week, the integration test was seemingly working, but the last issue was that when a schema's dependency is updated, the schema doesn't also get updated and reflected in the database. This is problematic because the dependants are still pointing at an old version ID dependency.

### Week 22: August 30 to September 3

John responds to me on Monday from a lingering question I left him on Friday. The dependency version ID is only present in the dependency table when there is a semantic version, which is a specific version of a schema. It's null because having no semantic version means we default to the latest version table for which schema to use. So my solution was to have 2 iterators, one given the version ID and other given the schema ID, because the dependency table had both IDs, but the version ID was sometimes null.

I begin grinding out this project. I added tests and implemented all my workers and business logic. I made it so that if we have a parent-child schema relationship and the parent was bound to an entity, any change to the child schema would trigger revalidation on the entity. Part of this feature was implemented by me earlier in my internship, where I was tasked with triggering revalidation on entities with a null semantic version bound schema. With this proven in my integration test, it shows that the dependant schemas are reindexed in a recursive manner.

This was my Monday.

During my code review with John, he notes to me that I can just use 1 iterator where I pass the schema ID. This is certainly clearner, but I will just have to look up the version ID of a given schema ID prior to calling it. John also notes to me that he doesn't want me to have a chain of workers sending messages in a recursive manner to handle the dependant schemas. I made it so the single worker sent to the broadcast worker, which in turn would send to the single worker. John says I can grab all the dependant version IDs at once using a recursive query and send a notification message for each dependant schema in one worker process. To do this recursive query, I had to do a join on another table to recurse on the schema IDs. My query looked complex, but worked.

Had another code review with John. A handful of changes were requested this time around: a test on the recursive query ignoring duplicates and unreferenced schemas, refactoring some manager level code, renaming some methods, and so on. I spent the remainder of the week working on the changes.

To note, the 2 workers in the final iteration of the project did the following:

- Took a JSON schema version ID and reindexed it in the validation schema index.
- Took a JSON schema version ID, recursively grabbed all dependant schema version IDs of the given ID, and sent out a single notification for each for the first worker to handle.

### Week 23: September 6 to 10

Monday was labor day so I had the day off. Came back on Tuesday with a code review with John. He approves my changes, and I'm finally done with the biggest project I've done at Sage, the validation schema index.

Next day we do a spring retrospective with our PM Kevin. We talked about how our sprint workflows had been working for us. I bring up that I need tickets to work on because I'm all done with my current project. Bruce assigns me to a ticket for adding dataset files to the download list. I finish this up on Thursday, basically overriding the container ID with the dataset ID. I grabbed the items in the dataset and did a batch update to store them in the download list items in the database.

Code review with John, some minor requested changes, and done. I also wrote 1 line of code to deprecate the
cancel API for asynchronous jobs, and had that approved. All I really had to do was ask Xa to update the Jira ticket with the stats on how many people use that API, which was none, because it was broken.

I was once again, without any tickets to do. John assigned me to a ticket for adding Synapse documentation deployment to the stack builder. Initially, I wasn't very excited for this because I would be working outside of Synapse Repository Services, and in the stack builder instead. But such is the case when there was very few tickets ready to be picked up.

### Week 24: September 13 to 17

Monday was my Duolingo interview. After the interview, I went to Marco's design review on a search feature. I also asked Xa how he did doc deployment. He sent me a short script he ran, which just did an S3 sync between a dev bucket and the docs bucket. Unfortunately, the SDK does not contain an equivalent for the CLI sync.

The most annoying event happened to me this week as well, an arm injury. It is almost certainly due to my frequent desk use, all the symptoms and causes of a repetitive strain injury, likely tennis elbow. It's probably worst due to the fact I play so much online chess, moving my wrist back and forth in reptitive movements. I told Bruce and John that I would be working a bit less in hopes that the injury resolves itself. They were very supportive and encouraged me to take time off to rest.

### Week 25: September 20 to 24

I moved back to Seattle, with school around the corner.

Over the course of 2 days, I managed to write a convincing sync in Java that accomplishes what Xa's script did. John tells me to also write a JSON file to the root of the destination S3 bucket that indicates the stack number. This is to avoid running doc deployment more than once. If the JSON file doesn't exist, I run deployment. If it does, and the stack number is greater than or equal to prod's, then I don't deploy, otherwise I do. John also encourages me to use etags to avoid doing an unnecessary copy during my sync, which I do.

I then run into an issue where I want to mock a TransferManager object, but I must also close the object. I should not be closing the object that was injected in, as other code could be using the TransferManager. John gives me a very neat design pattern for solving this issue. I would instead inject a factory, and use the factory to give me a TransferManager wrapper. This wrapper also implements Closeable, which allows me to initialize the object in a try, and have it automatically close my object on termination of the try.

By the end of the week, I had this approved. John assigns me to another one of Nick's reported issues, unsurprisingly a JSON schema and entity annotations related bug. This is from my time working on defaulting the annotations to an array unless otherwise indicated by the bound schema. The issue is that a schema, whose type is defined by reference, still defaults to an array when it is not suppose to. It is simply a missing case.

I also had a 4 hour final interview with Citrix this week. I told John about how it was rough, and him and I bonded on our dislike of the game that must be played to get a software engineering job.

### Week 26: September 27 to October 1

I wrote the integration test for the schema reference issue for getting the entity's JSON, but the validation kept failing. I defined the child schema, defined the parent schema with a reference to the child schema, bound the parent schema to a folder, annotated the folder, and waited for the validation results to be true, but it never passed. I was completely lost as to why it was not working. My initial thoughts were that I wrote a bug in my test, but I saw none. So I decided to ignore it, and skip over waiting for validation results. Turns out, after I wrote the implementation, it was because validating an entity against a schema involves getting the entity's JSON and this operation is the one that is broken currently. It just failed earlier in the test than I anticipated. That was a lot of time wasted.

I was tasked with adding datasets to entity views. I never got around to it. School ramped up quickly.

### Week 27: October 4 to 5

I said my good byes. I talked to John and he told me I was a hard worker who he wanted back. This meant a lot to me. I cannot say I was the most consistent engineer, as there were many ups and downs during the internship, but by the end of it, I was fairly immersed into developing inside of Synapse. I will miss Sage deeply. Could have not asked for a better first internship.

### To Conclude

I honestly learned more during my internship than I ever learned in school. Undoubtedly the most invaluable aspect of my internship is the mentorship I received. I've realized a lot from my internship, both about myself, but also about how to be a great engineer.

1. Having something to say in a technical discussion is invaluable. Whether you think your opinion is silly or not, you should voice your thoughts. We are paid to solve problems.

2. No one has the answer to every problem, no matter how experienced you are. Engineering is difficult, and our collaboration with one another is a humbling experience that makes us better engineers.

3. People will always write bugs, and there is no shame in it. We cannot write perfect code. Something will always leak through, even if you write thorough tests. The most we can do is become more conscientious and swiftly resolve bugs when they appear.

4. There are so many metrics that one doesn't learn in school that influences our engineering decisions. I should learn them all.

5. People who say command line text editors are better than IDEs are ridiculous. (my mentor confirming my previous beliefs)

6. Bugs in software (like MySQL) can literally ruin your life.

7. Engineering philosophies (whether in coding or in team processes) are like the philosophies of life that are studied in history, we take and choose what works best. We should not be quick to believe that one philosophy has all the answers.

8. Official documentation for how to use something is the best way to use it, probably.

9. Naming things is hard.

10. Work is easiest when you're passionate about it.

11. Thoroughly testing software is very important, and in some cases can take up most of your time.

12. If there is a solution out there already, don't reinvent the wheel.

13. Context-loading takes time, so we should do it right and thoroughly the first time.

14. Mentorship for new engineers is important for the development of an engineer's career.

Thanks to John and the team for a great experience.
