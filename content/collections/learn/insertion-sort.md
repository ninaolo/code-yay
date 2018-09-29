---
title: Insertion sort
slug: insertion-sort
what: Stable sort with simple/compact code which sorts incrementally.
bestTime: O(N) already/nearly sorted
worstTime: O(N^2) sorted backwards
space: O(1)
pros: good for small N, stable sort, doesn't use recursion, no additional space used
cons: slow for large N
info: For these reasons it's often used as the recursive base case (when the problem size is small) for higher overhead divide-and-conquer sorting algorithms, such as merge sort or quick sort.
---
