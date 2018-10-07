---
title: Sorting comparison
slug: sorting-comparison
---

### Quicksort vs Mergesort

#### Comparison
1. Mergesort is often a little slower than Quicksort. Why? It has a worse locality of reference
so access is faster in Quicksort than Mergesort.
2. Mergesort guarantees O(N log N) --> reliable, even if we have already sorted
or equal elements. Quicksort doesn't, worst case is O(N^2). However, the worst case can be made very rare if
you choose a good pivot.
3. Mergesort is a stable sort (doesn't reorder identical elements). Quicksort isn't.
4. Mergesort uses more space O(N) because the overhead of merging. Quicksort only uses O(log N) for
recursion stack space.

#### Mergesort - when to use?
1. When worst case matters and you really can't have O(N^2).
2. When you have a linked list. Nodes are scattered throughout memory so locality of reference doesn't matter.
Also, space required for merging linked lists is O(1) and not O(N).

#### Quicksort - when to use?
1. When worst case doesn't matter, and you want the one that is generally quicker.
2. When space is limited.

### HeapSort - the best?
Might seem so with O(1) space and O(N log N) best/worst/average. BUT...
1. In practice QuickSort + MergeSort have smaller constants (they're quicker) which doesn't show in Big-O.
2. HeapSort is not stable.


### Other
Don't use Bubblesort. Has advantage on already sorted lists O(N), but that's about it.
