---
title: Delete a node in a linked list
slug: linked-list-delete
---

### Solution #1 (root is given)

If root is given, we can loop to the previous node and set its next node to the node after the deleted node. The node will then be garbage collected.

Bad argument: Delete node doesn't exist.
Bad argument: Delete node is the only node in the list.
Special case: Delete node is root.

### Solution #2 (root is not given)

We can only solve this with a more "ugly" solution - we'll swap Node values. If Node id's are final, we have to mess up the id's. If not final, we could swap both values and id's.

NOTE: we must assume given node is not the tail.

```java
public class Coderview {

    public static Node delete(Node root, Node node) {

        // Special case: we want to delete root node.
        if (node == root) {
            if (root.getNext() == null) {
                throw new IllegalArgumentException("Can't delete only node in list.");
            }
            Node newRoot = root.getNext();
            root.setNext(null);
            return newRoot;
        }

        // Other case: node is in middle or the last node.
        Node previous = root;
        while (previous != null && previous.getNext() != node) {
            previous = previous.getNext();
        }

        if (previous == null) {
            throw new IllegalArgumentException("Given node does not exist in list.");
        }

        // Node will be garbage collected.
        previous.setNext(node.getNext());
        return root;
    }
}
```

```java
public class Coderview {

    /**
     * Only handles nodes that aren't the tail.
     * Also messes up id's since it only swaps values, not actual nodes.
     */
    public static void delete(Node node) {
        if (node == null || node.getNext() == null) {
            throw new IllegalArgumentException("Bad argument.");
        }

        node.setValue(node.getNext().getValue());
        node.setNext(node.getNext().getNext());
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
