---
title: Quick Java questions
slug: java-quick-questions
---

### What is the difference between creating a String with new() or with a String literal ("")?

new() --> heap
String literal --> String pool

The String pool is a part of the heap. Strings there are re-used.

```java
    String s1 = "string pool test";
    String s2 = "string pool test";
    String s3 = new String("string pool test");

    boolean pool = (s1 == s2); // true
    boolean heap = (s1 == s3); // false
```

### StringBuffer vs StringBuilder

Both are used when we want to modify Strings a lot, which is not optimal with String objects since they are
immutable.

StringBuilder --> faster and the "first choice".
StringBuffer --> slower, but use this if you have concurrency issues.


### ArrayList vs Vector

Concurrency --> Vector is synchronized, ArrayList not.
Performance --> Vector is slow, ArrayList faster.
Capacity --> Vector increases by 100%, ArrayList by 50%.


### ArrayList/Vector vs LinkedList

ArrayList/Vector --> when you want to index, O(1), and remove mainly from end, O(N - i).
LinkedList --> when you want to remove from anywhere, O(1), and not index so much, O(i).

### Implement hashCode

```java
public class Student {
    boolean isCool;
    int age;
    String name;

    @Override
    public int hashCode() {
        int prime = 31;
        int result = age;
        result = prime * result + (name != null ? name.hashCode() : 0);
        result = prime * result + (isCool ? 1 : 0);
        return result;
    }
}
```




```java
public class Student {
    boolean isCool;
    int age;
    String name;

    @Override
    public int hashCode() {
        HashCodeBuilder builder = new HashCodeBuilder();
        builder.append(isCool);
        builder.append(age);
        builder.append(name);
        return builder.toHashCode();
    }
}
```

### What do the different Access Modifiers do?

public --> any class can use.
protected --> classes in the same package and subclasses in any package can use.
private --> only this class can use.
no modifier ("package private") --> only classes in the same package can use.

### Which Access Modifier should you use if only subclasses should have access?
Use protected and have a separate package for the class hierarchy.


### What is a checked exception?

Usually caused by user error or a problem that can't be foreseen by the programmer.
Any subclass of Exception except for RuntimeException.
Must be surrounded by try/catch or declared by throws.

### What is an unchecked exception?

Programming error.
Any subclass of RuntimeException.
Can be surrounded by try/catch or declared by throws but this isn't necessary.

### Give an example usage of finally
Usually for cleanup, such as closing sockets, db connections etc.

### How can you create concurrent threads in Java?

```java
TestRunnable a = new TestRunnable("A");
TestRunnable b = new TestRunnable("B");
TestRunnable c = new TestRunnable("C");

a.start();
b.start();
c.start();
```

### What class can you use if you want to store unique objects in some order?
A TreeSet. No duplicates are stored and they are ordered with respect to compareTo().

### What is a final class/method?

Final class --> can't have subclasses.
Final method --> can't be overridden.
