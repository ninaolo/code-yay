---
title: Breadth First Search (BFS) for graphs
slug: bfs-graph
worstTime: O(V + E), if we're searching for something, every edge and every vertex has to be looked at.
---

### Difference from Tree
Must also keep track of visited nodes to avoid going in circles or visiting the same node multiple times.

### When to use BFS over DFS
1. When we know solution(s) is close to root.
2. When we want optimal/closest solution.
3. If tree is very deep & solutions rare, BFS could be quicker than DFS.
