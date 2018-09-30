---
title: Depth First Search (DFS) for graphs
slug: dfs-graph
worstTime: O(V + E), if we're searching for something, every edge and every vertex has to be looked at.
---

### Difference from Tree

Must also keep track of visited nodes to avoid going in circles or visiting the same node multiple times.

### When to use DFS over BFS
1. When there are many neighbors/branching factor is high --> then BFS takes up much space & DFS is better.
2. When there are many solutions but they are deep in the tree/graph.
3. When it's okay that we get a sub-optimal solution (not guaranteed shortest from source.
