---
title: Dijkstra's algorithm
slug: dijkstras
what: Finds the shortest path to all vertices in a Directed Weighted Graph (easily modified for undirected) given a start vertex.
how: Given a start vertex. | Put start vertex in queue (min-heap). | While queue is not empty... | Poll the queue for the current vertex. | Go through its adjacency list (list of edges). | For all edges, find neighbors and evaluate cost to get there from current. | If lower than current min, update min-heap with the new values.
averageTime: O(E log V) with a binary heap, because we go through all vertices and do poll() --> O(V log V). In the inner loop we go though all edges and possibly do a decreaseKey-operation --> O(E log V). Final complexity is O(V log V) + O(E log V) = O(E log V). With a fibonacci heap it's O(E + V log V).
space: Adjacency list --> O(V + E). Adjacency matrix --> O(V^2).
---

### Constraints
Original/simple version doesn't work with negative weights (but the below does). However, it doesn't work if we have cycles with negative sum (will loop forever). The Bellman–Ford algorithm can be used in such cases.


### Some information
Original algorithm doesn't use a min-priority queue --> O(V^2). A min-priority queue is an optimization (even faster if it's a Fibonacci heap).

This is asymptotically the fastest known single-source shortest-path algorithm for directed graphs with unbounded, non-negative weights. However, specialized cases (such as bounded/integer weights, directed acyclic graphs etc.) can be improved further.

### Different implementations
There are different ways to represent a graph.

* Adjacency Matrix is preferable when we expect the graph to be dense.
* Adjacency List is preferable when we expect the graph to be sparse.


### Implementation

```java
public class Codeyay {

    /**
     * Update the min-distances and predecessors on all vertices given a certain source vertex.
     */
    public static void updateDijkstraDistances(Vertex source) {
        source.setMinDistance(0);
        PriorityQueue&lt;Vertex&gt; vertexQueue = new PriorityQueue<>();
        vertexQueue.add(source);

        while (!vertexQueue.isEmpty()) {

            // Get and remove the current prioritized vertex & visit all of its edges.
            Vertex current = vertexQueue.poll();

            for (Edge edge : current.getEdges()) {
                Vertex neighbor = edge.getDestination();
                double distanceToNeighbor = current.getMinDistance() + edge.getCost();

                // If we found a new min distance to the neighbor, update it. Note: remove
                // is O(V) and add is O(log V) so the optimized Dijkstra should use a
                // decreaseKey-operation with O(log V) time, but I'm using this for simplicity.
                if (distanceToNeighbor < neighbor.getMinDistance()) {
                    vertexQueue.remove(neighbor);
                    neighbor.setMinDistance(distanceToNeighbor);
                    neighbor.setPredecessor(current);
                    vertexQueue.add(neighbor);
                }
            }
        }
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

    // Properties representing the vertex itself.
    private int id;
    private Edge[] adjacencyList;

    // Properties updated by the Dijkstra algorithm depending on a given source vertex.
    private double minDistance = Double.POSITIVE_INFINITY;
    private Vertex predecessor;

    public Vertex(int id) {
        this.id = id;
    }

    // This is needed in order to put this object in a priority queue.
    public int compareTo(Vertex other) {
        Double.compare(minDistance, other.minDistance);
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

    public double getMinDistance() {
        return minDistance;
    }

    public Vertex getPredecessor() {
        return predecessor;
    }

    public void setMinDistance(double minDistance) {
        this.minDistance = minDistance;
    }

    public void setPredecessor(Vertex predecessor) {
        this.predecessor = predecessor;
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
