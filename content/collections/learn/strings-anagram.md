---
title: Anagram
slug: strings-anagram
---

### Description
Write a function to determine if one String is an anagram of another (anagram = shuffled chars).


### Solution #1
Use some sort (quicksort, mergesort etc.) and compare.

Complexity --> O(2 * N log N + N) =  O(N log N)  time and O(1) space.


### Solution #2
Compare both Strings against an array of found chars. Must assume a low number of chars (like ASCII), otherwise too much space usage.

Complexity --> O(2N) = O(N) time and O(1) space.

### Solution

```java
public class Codeyay {

    public static boolean isAnagram(char[] first, char[] second) {
        if (first.length != second.length || first.length == 0) {
            return false;
        }

        // O(2 * N log N).
        Arrays.sort(first);
        Arrays.sort(second);

        // O(N).
        for (int i = 0; i < first.length; i++) {
            if (first[i] != second[i]) {
                return false;
            }
        }

        return true;
    }
}
```

```java
public class Codeyay {

    public static boolean isAnagram(char[] first, char[] second) {
        if (first.length != second.length || first.length == 0) {
            return false;
        }

        int[] charCounts = new int[256];
        int nrOfUniqueChars = 0;
        int completedChars = 0;

        // Go through first array --> O(N).
        for (int i = 0; i < first.length; i++) {
            if (charCounts[first[i]] == 0) {
                nrOfUniqueChars++;
            }

            charCounts[first[i]]++;
        }

        // Check second against first array --> O(N).
        for (int i = 0; i < second.length; i++) {

            // Not an anagram if we find a char in second which isn't present in first.
            if (charCounts[second[i]] == 0) {
                return false;
            }

            // For every found char, the count is reduced.
            charCounts[second[i]]--;

            // We're done if all unique chars have been found.
            if (charCounts[second[i]] == 0) {
                completedChars++;
                if (completedChars == nrOfUniqueChars) {
                    return true;
                }
            }
        }

        return false;
    }
}
```
