---
title: Binary search tree traversal
slug: bst-traversal
what: There is pre-order, in-order and post-order traversal.
how: Recursively go through a binary tree. We have current, left and right node. | Pre-order; current is "pre"/before --> current, left, right. | In-order; current is "in"/middle --> left, current, right. | Post-order; current is "post"/after --> left, right, current.
---

### Implementation

```java
public class Coderview {

    public static void preOrderTraversal(Node node) {
        if (node != null) {
            System.out.println(node); // Current
            inOrderTraversal(node.getLeft()); // Left
            inOrderTraversal(node.getRight()); // Right
        }
    }

    public static void inOrderTraversal(Node node) {
        if (node != null) {
            inOrderTraversal(node.getLeft()); // Left
            System.out.println(node); // Current
            inOrderTraversal(node.getRight()); // Right
        }
    }

    public static void preOrderTraversal(Node node) {
        if (node != null) {
            inOrderTraversal(node.getLeft()); // Left
            inOrderTraversal(node.getRight()); // Right
            System.out.println(node); // Current
        }
    }
}
```
