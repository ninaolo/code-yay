---
title: Sum of two elements
slug: arrays-sum-of-two
---

### Description
Given an array of integers and a sum, return indices of the two numbers such that they add up to the sum.

### Complexity
O(N) time + O(N) space for the HashMap.

### Solution

```java
public class Codeyay {

    public static Optional&lt;int[]&gt; findSumIndices(int[] numbers, int sum) {
        Map&lt;Integer, Integer&gt; numToIndex = new HashMap<>();

        for (int i = 0; i < numbers.length; i++) {
            int wanted = sum - numbers[i];
            if (numToIndex.containsKey(wanted)) {
                return Optional.of(new int[] { numToIndex.get(wanted), i });
            }

            numToIndex.put(numbers[i], i);
        }
        return Optional.empty();
    }
}
```
