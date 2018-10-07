---
title: Java lambdas vs. closures
slug: java-lambdas-closures
---

### Lambdas vs. closures
A closure = function that keeps a private state and can be passed around. For example, JavaScript has closures. Lambda = function that can be created at runtime and can change a private state.

Difference = lambdas can't modify variables defined in the outer closure (such code gives compile errors). A workaround is to wrap variables you want to modify in a class. However, if you have concurrency there's an issue with the modifiable shared state.

### Example of compile error ("Variable used in lambda expression should be final or effectively final"):

```java
public class Codeyay {

private static Function&lt;Integer, Integer&gt; makeFunction() {
    int n = 0; // Outside the lambda scope.

    return arg -> {
        System.out.print(n + " " + arg + ": ");
        arg += 1;
        n += arg; // This does not compile!
        return n + arg;
        };
    }
}
```

### Example of workaround which does compile:

```java
class MyInt {
    int n = 0;
}

public class Codeyay {

    private static Function&lt;Integer, Integer&gt; makeFunction() {
        final MyInt myInt = new MyInt(); // Outside the lambda scope.

        return arg -> {
            System.out.print(myInt.n + " " + arg + ": ");
            arg += 1;
            myInt.n += arg; // This is fine.
            return myInt.n + arg;
        };
    }

    public static void tryLambdas() {
        Function&lt;Integer, Integer&gt; x = makeFunction();
        Function&lt;Integer, Integer&gt; y = makeFunction();

        for (int i = 0; i < 5; i++) {
            System.out.println(x.apply(i));
        }

        for (int i = 0; i < 3; i++) {
            System.out.println(y.apply(i));
        }
    }

    public static void main(String[] args) {
        tryLambdas();
    }
}
```
