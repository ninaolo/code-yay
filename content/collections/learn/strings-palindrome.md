---
title: Palindrome
slug: strings-palindrome
---

### Description
Write a function to determine if one String is a palindrome (forward = backwards).

## Solution
Two pointers - one goes forward and one backwards to the middle.

```java
public static boolean isPalindrome(String input) {
    int rightIdx = input.length() - 1;

    for (int leftIdx = 0; leftIdx < input.length() / 2; leftIdx++) {
        if (input.charAt(leftIdx) != input.charAt(rightIdx)) {
            return false;
        }
        rightIdx--;
    }

    return true;
}
```
