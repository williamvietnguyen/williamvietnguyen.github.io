---
layout: post
title: Undergraduate Graph Theory
description: An light introduction to graph theory
author: William Nguyen
---

This is one of my favorite topics in computer science. There is something about these structures and our understanding of them that strikes me as beautiful. I am not sure if my undergraduate education on graphs does the topic justice. But here is my attempt at summarizing the concepts that I've learned in this area during university. This is also a form of note taking for me. Also note that this summary of undergraduate graph theory is from a computer science perspective for the most part.

I acknowledge the following courses at the Univeristy of Washington for teaching me much of what I know: CSE 311 (Foundations), CSE 331 (SWE), CSE 332 (Data Structures), CSE 417 (Algos + Complexity), CSE 446 (ML), CSE 421 (Algos), and CSE 490Z1 (Modern Algos). I also acknowledge the great and powerful Google search engine and its web results for helping me formalize my intuition.

### Defining Graphs

In mathematics, **graph theory** is the study of graphs which are pairwise relations between objects.

An **undirected graph** is defined as the following ordered pair $$G=(V, E)$$ comprising of a set of vertices (aka nodes) $$V$$ and a set of edges $$E$$, where these edges are unordered pairs of distinct vertices.

We can define a set of edges as $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V ~\text{and} ~x \neq y\},$$ in which case we define this as an **undirected simple graph**. Meaning that the graph disallows **multiple edges**. Multiple edges in undirected graphs are two or more edges that are incident to the same two vertices. Also note that we do not permit **loops** in this definition, which are edges that connect a vertex to itself. This is because we noted that we require edges to have two distinct vertices. We can define a more general definition that gives us an undirected simple graph that permits loops with the following definition for edges: $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V\}.$$

Suppose we want to permit multiple edges. We can define an **undirected multigraph** with the following ordered triple $$G = (V, E, \phi)$$, where $$E$$ is the set of edges, and $$\phi$$ is a function that maps each edge to an unordered pair of endpoint vertices. This can be defined as $$\phi: E \rightarrow \{\{x,y\} ~ \\| ~ x,y \in V ~\text{and} ~x \neq y\}.$$ We can also get an undirected multigraph allowing loops with the following mapping: $$\phi: E \rightarrow \{\{x,y\} ~ \\| ~ x,y \in V\}.$$

![multigraph](/assets/images/multigraph.png)

Now we define directed graphs.
