---
title: Quick sort
slug: quick-sort
what: Divide-and-conquer algorithm that sorts with the help of a pivot value.
how: Choose pivot | Move small values to the left of pivot, greater to the right | Recursively sort left and right part
averageTime: O(N log N)
bestTime: O(N log N)
worstTime: O(N^2) for example if first element is pivot in already sorted list
space: O(log N) for recursion
---

```java
public class Coderview {

    private static void swap(int iFirst, int iSecond, Comparable[] list) {
        Comparable tmp = list[iFirst];
        list[iFirst] = list[iSecond];
        list[iSecond] = tmp;
    }

    private static int getAndPlacePivot(Comparable[] list, int iLeft, int iRight) {

        // Choose last element as pivot. Any element could be chosen, but this is one strategy.
        Comparable pivot = list[iRight];

        // Keep track of the last seen small value (smaller than pivot).
        int iLastSmall = iLeft - 1;

        // Step forward. If high value, do nothing. If low value, swap low to the left side.
        for (int iCurrent = iLeft; iCurrent < iRight; iCurrent++) {
            if (list[iCurrent].compareTo(pivot) <= 0) {
                swap(iLastSmall + 1, iCurrent, list);
                iLastSmall++;
            }
        }

        // Swap the first high value with the pivot, putting it into the right position.
        swap(iLastSmall + 1, iRight, list);
        return iLastSmall + 1;
    }

    public static void quickSort(Comparable[] list, int iLeft, int iRight) {

        // Base case - otherwise infinite recursion.
        if (iLeft >= iRight) {
            return;
        }

        // Get pivot index at correct place in list (smaller to the left and greater to the right).
        int iPivot = getAndPlacePivot(list, iLeft, iRight);

        // Recursively sort elements to the left and right side of the iPivot.
        quickSort(list, iLeft, iPivot - 1);
        quickSort(list, iPivot + 1, iRight);
    }
}
```
