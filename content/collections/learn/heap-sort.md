---
title: Heap sort
slug: heap-sort
what: Sorts by using a heap. The input array can be used as the actual heap --> no additional storage.
how: Turn array into max-heap --> O(N) | Swap root N times with last element & make sure new root comes to right place --> O(N log N)
bestTime: O(N + N log N) = O(N log N)
averageTime: O(N + N log N) = O(N log N)
worstTime: O(N + N log N) = O(N log N)
space: O(1)
---

### Implementation

```java
public class Codeyay {

    public static void heapSort(Comparable[] array) {
        int n = array.length;

        // STEP 1: Build heap bottom-up (begin at lowest level with children) --> O(N).
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(array, i, n);
        }

        // STEP 2: swap max root with last child, heapify on the smaller heap --> O(N log N).
        for (int iLast = n - 1; iLast >= 0; iLast--) {
            swap(0, iLast, array);
            heapify(array, 0, iLast);
        }
    }

    private static void heapify(Comparable[] array, int iSubRoot, int heapSize) {
        int iLeft = iSubRoot * 2 + 1;
        int iRight = iSubRoot * 2 + 2;
        int iLargest = iSubRoot;

        if (iLeft < heapSize && array[iLeft].compareTo(array[iLargest]) > 0) {
            iLargest = iLeft;
        }

        if (iRight < heapSize && array[iRight].compareTo(array[iLargest]) > 0) {
            iLargest = iRight;
        }

        if (iLargest != iSubRoot) {
            swap(iLargest, iSubRoot, array);

            // Recursively heapify the new subtree.
            heapify(array, iLargest, heapSize);
        }
    }

    private static void swap(int iFirst, int iSecond, Comparable[] array) {
        Comparable tmp = array[iFirst];
        array[iFirst] = array[iSecond];
        array[iSecond] = tmp;
    }
}
```
