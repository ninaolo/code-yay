---
title: Splay
slug: splay
what: A self-balancing BST (other examples are AVL & Red-Black). Used in many applications, like gcc compiler, Unix malloc etc.
how: When a node is searched and found, it's moved to root. | If not found, the null parent is moved to root.
---

### Why?
Worst case for BST is O(N) when a tree is heavily unbalanced. Splay trees keep themselves balanced AND also makes
sure common keys/nodes are at the top.

### Time complexity
* Accessing recently accessed item: O(1).
* Average for all operations: O(log N).
