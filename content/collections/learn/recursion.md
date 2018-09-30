---
title: Recursion
slug: recursion
what: A function being defined is applied within its own definition. Or in other words, recursion is when a function calls itself.
---

### Good
Elegant, simple. Some languages are well suited for it. Instead of the call stack being a problem, you can
actually take advantage of it in a clever way by doing iterative branching --> for example call a function
multiple times in same loop but with different parameters, that's branching. If you try an iterative solution,
you often need a stack and you re-invent the wheel.

### Bad
In most languages it's bad, because of Stack Overflow issues + it also takes some time to copy stuff to stack etc.
so it will run slower due to function call overhead.

### Time Complexity
* Simple way: compute by reasoning about how many times function will be called.
* More difficult cases: use Master Theorem or guess and use induction. Example: recursive fibonacci --> T(n-1) + T(n-2) + T(1) --> O(fib(n)) ~= O(1.6^n)

### Examples of Time Complexity

```java

// O(N/3) = O(N)
int function1(int n) {
    if (n <= 0) {
        return 1;
    } else {
        return 1 + recursiveFun1(n-3);
    }
}

// O(log4 N) = O(log N)
int function2(int n) {
    if (n <= 0) {
        return 1;
    } else {
        return 1 + function2(n/4);
    }
}

// O(2^N) --> Think of this as a binary tree with height N.
int function3(int n) {
    if (n <= 0) {
        return 1;
    } else {
        function3(n - 1);
        function3(n - 1);
    }
}

// ???
int function4(int n) {
    for (i = 0; i < n; i += 2) {
        System.out.println("Hello");
    }

    if (n <= 0) {
        return 1;
    } else {
        return 1 + function4(n-5);
    }
}
```
