---
title: Memoization
slug: memoization
what: DP --> Solve problems recursively when computations of subproblems overlap. Memoization --> Memorizing sub problems to avoid recomputing them.
---

### Example: calculate n'th fibonacci number

To calculate fibonacci(n) we need fibonacci(n-1) + fibonacci(n-2) --> leads to a lot of unnecessary recomputing.
We must use memoization! If we try to compute the 50th fibonacci nr with the slow and the fast one, we see a
huge difference in running time.

```java
public class Codeyay {
    public static int fibonacci(int n) {
        return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
    }
}
```

```java
public class Codeyay {

    private static Map&lt;Integer, Long&gt; cache = new HashMap<>();

    public static long fibonacci(int n) {
        if (n < 2) {
            return n;
        }

        Long value = cache.get(n);

        if (value == null) {
            value = fibonacci(n-1) + fibonacci(n-2);
            cache.put(n, value);
        }

        return value;
    }
}
```
