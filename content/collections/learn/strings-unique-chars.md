---
title: Unique characters in a String
slug: strings-unique-chars
---

### Description
Write a function to determine if a String has all unique characters.

### Solution #1
Assume ASCII = 256 chars. Store in boolean array. Go through entire String.

Complexity --> O(N) time and O(1) space.

### Solution #2
Assume only [a-z] = 26 chars. Store in an int (32 bits). Go through entire String.

Complexity --> O(N) time and O(1) space.


### Solution #3

Assume any value of Java char = 16 bits --> 2^16 different values. Store in a BitSet with 2^16 = 65536. Go through entire String.

Complexity --> O(N) time and O(1) space.

```java
public class Coderview {

    public static boolean uniqueChars(String string) {
        if (string.length() > 256) {
            return false;
        }

        boolean[] foundChars = new boolean[256];

        for (char character : string.toCharArray()) {
            if (foundChars[character]) {
                return false;
            }

            foundChars[character] = true;
        }

        return true;
    }
}
```

```java
public class Coderview {

    public static boolean uniqueChars(String string) {
        if (string.length() > 26) {
            return false;
        }

        int foundChars = 0;

        for (char character : string.toCharArray()) {
            if ((foundChars & (1 << character)) > 0) {
                return false;
            }

            foundChars = foundChars | (1 << character);
        }

        return true;
    }
}
```

```java
public class Coderview {

    public static boolean uniqueChars(String string) {
        int assumedNrOfPossibleChars = 1 << 16; // 2^16
        if (string.length() > assumedNrOfPossibleChars) {
            return false;
        }

        BitSet charset = new BitSet(assumedNrOfPossibleChars);
        for (char character : string.toCharArray()) {
            if (charset.get(character)) {
                return false;
            }
            charset.set(character);
        }
        return true;
    }
}
```
