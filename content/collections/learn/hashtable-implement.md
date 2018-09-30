---
title: Implement a hashtable
slug: hashtable-implement
---

### Solution
Implement a generic Hashnode&lt;K, V&gt; class and store hashtable in a Hashnode&lt;K, V&gt;[]. Handle collisions by making linked lists (linear probing).

### Discussion

*Linear vs. quadratic probing*

a.  Linear probing leads to bigger clusters, and clusters reduce speed. A bad hash function can lead to
really nasty clusters. However, with a good hash function which is good at avoiding collisions, linear
probing is faster due to cache locality.

b.  Quadratic probing reduces cluster size, and this is good for speed, if you have problems with
collisions. If you don’t, then it’s slower.



*Power-of-two vs. prime size*

a.  Prime table size spreads out the keys more evenly in the table which avoids clustering. Clustering makes
the algorithm slow, especially with linear probing.

b.  Power-of-two table size does not spread out as good as a prime table with a bad hash function. However,
a good one will spread well anyway, and we can avoid using modulo operations (expensive) and use a cheaper
operation (bit mask).

```
/*
 * A power-of-two hashtable using linear probing.
 */
public class HashTable&lt;K, V&gt; {

    // 16 and 0.75 taken from real HashMap.
    private static final int INITIAL_CAPACITY = 16;
    private static final double LOAD_FACTOR = 0.75;
    private HashNode&lt;K, V&gt;[] table;
    private int size;

    public HashTable() {
        table = new HashNode[INITIAL_CAPACITY];
        size = 0;
    }

    public V get(K key) {
        int index = hashIndex(key);

        for (Hashnode&lt;K, V&gt; node = table[index]; node != null; node = node.next) {
            if (key.equals(node.key)) {
                return node.value;
            }
        }
        return null;
    }

    public void put(K key, V value) {
        if (size >= LOAD_FACTOR * table.length) {
            resize();
        }

        int index = hashIndex(key);
        Hashnode&lt;K, V&gt; newNode = new Hashnode&lt;>(key, value);

        if (table[index] == null) {
            table[index] = newNode;
        } else {
            Hashnode&lt;K, V&gt; node = table[index];
            while (node.next != null) {
                node = node.next;
            }
            node.next = newNode;
        }
        size++;
    }

    private void resize() {
        HashNode[] newTable = new HashNode[table.length * 2];

        for (int i = 0; i < table.length; i++) {
            newTable[i] = table[i];
        }

        table = newTable;
    }

    private int hashIndex(K key) {
        int h = 0;
        h = key.hashCode() ^ (h >>> 16);

        // To find a bucket from a hash --> use AND instead of modulo (expensive).
        return (table.length - 1) & h;
    }

    public int size() {
        return size;
    }

    private class HashNode&lt;K, V&gt; {

        private HashNode&lt;K, V&gt; next;
        private K key;
        private V value;

        public HashNode(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}
```
