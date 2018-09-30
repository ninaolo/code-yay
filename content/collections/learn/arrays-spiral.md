---
title: Go through matrix in a spiral
slug: arrays-spiral
---

### Complexity
O(N) time + O(N) space for path.

### Solution

```java
public class Coderview {

    public static int[] spiral(int[][] matrix) {
        int col = matrix.length / 2;
        int row = matrix.length / 2;
        int[] path = new int[matrix.length * matrix.length];
        int pathIdx = 0;
        path[pathIdx] = matrix[col][row];

        for (int subSize = 3; subSize <= matrix.length; subSize += 2) {

            // Go 1 step left.
            path[++pathIdx] = matrix[row][--col];

            // Go down all the way.
            for (int i = 0; i < subSize - 2; i++) {
                path[++pathIdx] = matrix[++row][col];
            }

            // Go right all the way.
            for (int i = 0; i < subSize - 1; i++) {
                path[++pathIdx] = matrix[row][++col];
            }

            // Go up all the way.
            for (int i = 0; i < subSize - 1; i++) {
                path[++pathIdx] = matrix[--row][col];
            }

            // Go left all the way.
            for (int i = 0; i < subSize - 1; i++) {
                path[++pathIdx] = matrix[row][--col];
            }
        }
        return path;
    }
}
```
