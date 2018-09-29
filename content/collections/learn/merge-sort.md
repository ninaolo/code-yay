---
title: Merge sort
slug: merge-sort
what: Divide-and-conquer algorithm that sorts by repeatedly dividing the list in two and then merging the two sub-lists. Usually implemented with array copies and therefore takes up some extra space.
how: Split list in two | Recursively sort left part | Recursively sort right part | Merge
bestTime: O(N log N)
averageTime: O(N log N)
worstTime: O(N log N)
space: O(N) for extra storage
---

```java
public class Coderview {

    private static void merge(Comparable[] left, Comparable[] right, Comparable[] list) {

        // Define the indexes.
        int iLeft = 0;
        int iRight = 0;
        int iList = 0;

        // Loop and copy the smallest element each time from left/right list.
        while (iLeft < left.length && iRight < right.length) {
            if (left[iLeft].compareTo(right[iRight]) < 0) {
                list[iList] = left[iLeft];
                iLeft++;
            } else {
                list[iList] = right[iRight];
                iRight++;
            }
            iList++;
        }

        // Copy elements that are left.
        System.arraycopy(left, iLeft, list, iList, left.length - iLeft);
        System.arraycopy(right, iRight, list, iList, right.length - iRight);
    }

    public static void mergeSort(Comparable[] list) {

        // Base case - otherwise infinite recursion.
        if (list.length == 1) {
            return;
        }

        // Split in two, creating two new lists in memory and copying the elements.
        Comparable[] left = new Comparable[list.length / 2];
        Comparable[] right = new Comparable[list.length - left.length];
        System.arraycopy(list, 0, left, 0, left.length);
        System.arraycopy(list, left.length, right, 0, right.length);

        // Recursively sort both halves.
        mergeSort(left);
        mergeSort(right);

        // Merge the two sorted parts.
        merge(left, right, list);
    }
}
```
