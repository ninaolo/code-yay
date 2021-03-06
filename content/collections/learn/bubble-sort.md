---
title: Bubble sort
slug: bubble-sort
what: A very simple sorting algorithm using double for-loops. It's slow and has a quite naïve approach.
how: For every element... | For every pair of elements... | If left is greater than right - swap
bestTime: O(N) when already sorted
worstTime: O(N)^2 because of double for loops
averageTime: O(N)^2
space: O(1)
---

### Implementation

```java
public class Codeyay {

    private static void swap(int iFirst, int iSecond, Comparable[] list) {
        Comparable tmp = list[iFirst];
        list[iFirst] = list[iSecond];
        list[iSecond] = tmp;
    }

    public static void bubbleSort(Comparable[] list) {

        // Traverse list. For every element, traverse list with swapping pairs.
        // Note that iTraverse stops before last element and iPair goes to the last element.
        for (int iTraverse = 0; iTraverse < list.length - 1; iTraverse++) {
            for (int iPair = 1; iPair < list.length; iPair++) {

                // Swap if left > right.
                if (list[iPair - 1].compareTo(list[iPair]) > 0) {
                    swap(iPair - 1, iPair, list);
                }
            }
        }
    }
}
```
