---
layout: post
title: Undergraduate Graph Theory For CS
description: An light introduction to graph theory
author: William Nguyen
---

In my limited experience with discrete mathematics, I find the study of graph theory to be a favorite of mine. I am not sure if my undergraduate education on graphs does the topic justice, but this is my attempt at summarizing the concepts that I've learned in this area during university. This is also a form of note-taking for me. Also note that this summary of undergraduate graph theory is from a computer science perspective for the most part, despite its study in pure mathematics.

# Table of Contents

1. [Defining Graphs](#defining-graphs)
2. [Graph Abstract Data Type Representations](#graph-abstract-data-type-representations)
3. [Breadth-First and Depth-First Search](#breadth-first-and-depth-first-search)
4. [Shortest Paths](#shortest-paths)
5. [Minimum Spanning Trees](#minimum-spanning-trees)
6. [Directed Acyclic Graphs](#directed-acyclic-graphs)
7. [Network Flow](#network-flow)
8. [Spectral Graph Theory](#spectral-graph-theory)
9. [Applications, Reflections, and Further Study](#applications-reflections-and-further-study)

### Defining Graphs

In mathematics, **graph theory** is the study of graphs which are pairwise relations between objects.

An **undirected graph** is defined as the following ordered tuple $$G=(V, E)$$ comprising of a set of **vertices** (aka **nodes**) $$V$$ and a set of **edges** $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V\}$$, where these edges are unordered pairs of vertices. We can also have **directed graphs**, which are defined by the tuple $$G=(V, E)$$, where $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V^2\}$$ is a set of ordered pairs of vertices rather than unordered. In a directed graph, an edge $$\{x, y\}$$ is said to be directed from $$x$$ to $$y$$, meaning $$y$$ is the successor of $$x$$ and reachable from $$x$$. In illustrations of directed graphs, there is an arrow at the head of the edge (successor) to show direction.

Graphs can contain **loops** (aka **self-loops**), which are edges that connect a vertex to itself. We can prohibit loops by modifiying the definition of our edges to be $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V ~\text{and} ~x \neq y\}$$ or $$E \subseteq \{\{x,y\} ~ \\| ~ x,y \in V^2 ~\text{and} ~x \neq y\}$$ for directed graphs. Also we can permit **multiple edges**, which are two or more edges that are incident to the same two vertices (in directed graphs, these are edges such that they also hold the same direction too). To define this, we have the ordered triple $$G=(V,E,\phi)$$, where $$E$$ is the set of edges and $$\phi$$ is a mapping for every edge to its unordered or ordered pair of vertices. We can define the following as $$\phi: E \rightarrow \{\{x,y\} ~ \\| ~ x,y \in V\}$$ or $$\phi: E \rightarrow \{\{x,y\} ~ \\| ~ x,y \in V^2\}$$ for directed graphs. We define a graph that allows multiple edges to be a **multigraph**. Otherwise, a graph without multiple edges is called a **simple graph**.

We define a **connected component** of an undirected graph as the induced subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the rest of the graph. We then define a graph to be **connected** if it has exactly one connected component, otherwise it is **disconnected**.

There are also a variety of special graphs, one such being a **tree** which is a connected acyclic graph. We define a **cycle** in an undirected graph as non-empty trail (or directed trail for directed graphs) of vertices in which the only repeated vertices are the first and last vertices in the trail. Trees are usually seen in a hierarchial manner with a node being the root of the tree, in which all other nodes are illustrated going downwards.

Graphs can also have labels along their edges, such as words or numbers. We call graphs with numerical labels, **weighted graphs**.

With that said, there are many types of graphs that one can define which will not be covered here unless applicable (we define more graph types later).

![multigraph](/assets/images/multigraph.png)

### Graph Abstract Data Type Representations

Adjacency List

Adjacency Matrix

### Breadth-First and Depth-First Search

BFS

Bipartite, Also finding connected components

DFS

### Shortest Paths

Dijkstras

A\* Search

Bellman Ford

### Minimum Spanning Trees

Kruskals -> disjoint sets

Prims

### Directed Acyclic Graphs

Topological Sort

### Network Flow

Max-Flow Min-Cut

Ford-Fulkerson

### Spectral Graph Theory

### Applications, Reflections, and Further Study

graph databases, disjoint sets, computer networking

I acknowledge the following courses at the Univeristy of Washington for teaching me much of what I know: CSE 311 (Foundations), CSE 331 (SWE), CSE 332 (Data Structures), CSE 417 (Algos + Complexity), CSE 446 (ML), CSE 421 (Algos), and CSE 490Z1 (Modern Algos). I also acknowledge the Google search engine and its web results for helping me formalize my previous knowledge as well as teaching me things that I never knew I wanted to know.
