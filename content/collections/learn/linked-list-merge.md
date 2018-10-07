---
title: Merge two sorted linked lists
slug: linked-list-merge
---

### Solution #1
Create a dummy node to keep track of start of merged list. Go through both and merge from small to large.

### Solution #2
Don't use a dummy and do an initialization step to keep track of return node.

### Complexity

Worst case is O(N) time (N = total nr of nodes) and best case O(1) (when first list has length 1 and second length N-1 - then we just "hang" them onto each other).

Space is O(1).

```java
public class Codeyay {

    public static Node merge(Node first, Node second) {
        if (first == null) {
            return second;
        } else if (second == null) {
            return first;
        }

        // Create dummy node to avoid initializing merged list.
        Node dummy = new Node(0, 0);
        Node merged = dummy;

        // Take the smallest node from first/second while none is null.
        while (first != null && second != null) {
            if (first.getValue() < second.getValue()) {
                merged.setNext(first);
                first = first.getNext();
            } else {
                merged.setNext(second);
                second = second.getNext();
        }

            merged = merged.getNext();
        }

        // Merge the left over nodes.
        Node  leftOver = first == null ? second : first;
        merged.setNext(leftOver);

        return dummy.getNext();
    }
}
```

```java
public class Codeyay {

    public static Node merge(Node first, Node second) {
        if (first == null) {
            return second;
        } else if (second == null) {
            return first;
        }

        Node merged;
        Node mergedStart;

        // Initialize the merged list.
        if (first.getValue() < second.getValue()) {
            merged = first;
            first = first.getNext();
        } else {
            merged = second;
            second = second.getNext();
        }

        mergedStart = merged;

        // Take the smallest node from first/second while none is null.
        while (first != null && second != null) {
            if (first.getValue() < second.getValue()) {
                merged.setNext(first);
                first = first.getNext();
            } else {
                merged.setNext(second);
                second = second.getNext();
            }

            merged = merged.getNext();
        }

        // Merge the left over nodes.
        Node  leftOver = first == null ? second : first;
        merged.setNext(leftOver);

        return mergedStart;
    }
}
```

```java
public class Node {

    private final int id;
    private Node next;
    private int value;

    public Node(int id, int value) {
        this.id = id;
        this.value = value;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    public int getId() {
        return id;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
```
