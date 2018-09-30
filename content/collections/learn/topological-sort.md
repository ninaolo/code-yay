---
title: Topological sort (graphs)
slug: topological-sort
what: Ordering for DAG's. Every parent must come before its child. Can be multiple for same graph.
how: Kind of like DFS but with extra stack (recursion stack + stack).
averageTime: Same as DFS --> O(E + V).
---

### Example applications
1. Scheduling jobs with dependencies given as graph.
2. Finding order of compilation tasks to perform in makefiles.


### Implementation

```java
public class Coderview {

    /*
     * Topological sort for one entire DAG.
     */
    public static void topologicalSort(Graph graph) {
        Stack&lt;Vertex&gt; stack = new Stack<>();
        Set&lt;Integer&gt; visited = new HashSet<>();

        // Go through entire graph.
        for (Vertex current : graph.getVertices()) {
            if (!visited.contains(current.getId())) {
                topologicalSort(current, stack, visited);
            }
        }

        // Print the stack.
        while (!stack.isEmpty()) {
            System.out.println(stack.pop().getId());
        }
    }

    /*
     * Recursive part of topological sort.
     */
    private static void topologicalSort(Vertex current, Stack&lt;Vertex&gt; stack, Set&lt;Integer&gt; visited) {
        visited.add(current.getId());

        for (Edge edge : current.getEdges()) {
            Vertex neighbor = edge.getDestination();
            if (!visited.contains(neighbor.getId())) {
                topologicalSort(neighbor, stack, visited);
            }
        }

        stack.push(current);
    }
}
```

```java
public class Graph {

    private Vertex[] vertices;

    public Graph(Vertex[] vertices) {
        this.vertices = vertices;
    }

    public Vertex[] getVertices() {
        return vertices;
    }
}
```

```java
public class Vertex {

    private int id;
    private Edge[] adjacencyList;

    public Vertex(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public Edge[] getEdges() {
        return adjacencyList == null ? new Edge[0] : adjacencyList;
    }

    public void setEdges(Edge[] adjacencyList) {
        this.adjacencyList = adjacencyList;
    }
}
```

```java
public class Edge {

    private Vertex destination;
    private double weight;

    public Edge(Vertex destination, double weight) {
        this.destination = destination;
        this.weight = weight;
    }

    public Vertex getDestination() {
        return destination;
    }

    public double getWeight() {
        return weight;
    }
}
```

```java
```
