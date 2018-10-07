---
title: Detect a cycle in a linked list
slug: linked-list-cycle
---

### Okay solution
Go through list one by one and check if already visited with a HashSet.

Complexity --> O(N) time and O(N) space.

### Best solution
Go through list with fast and slow runner. Slow runner takes one node at a time, fast takes two. If fast catches up with slow, it's a cycle. If fast comes to the end (null), it's not a cycle.

Complexity --> O(N) time and O(1) space.

```java
public class Codeyay {

    public static boolean hasCycle(Node startNode) {
        Set&lt;Integer&gt; visited = new HashSet<>();

        Node current = startNode;
        while (current.getNext() != null) {
            if (visited.contains(current.getId())) {
                return true;
            }

            visited.add(current.getId());
            current = current.getNext();
        }
        return false;
    }
}
```

```java
public class Codeyay {

    public static boolean hasCycle(Node startNode) {
        Node slow = startNode;
        Node fast = startNode;

        while (fast != null && fast.getNext() != null) {
            slow = slow.getNext();
            fast = fast.getNext().getNext();

            if (fast == slow) {
                return true;
            }
        }

        return false;
    }
}
```

```java
public class Node {

    private final Integer id;
    private Node next;

    public Node(Integer id) {
        this.id = id;
    }

    public Node getNext() {
        return next;
    }

    public Integer getId() {
        return id;
    }
}
```
