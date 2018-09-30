---
title: Prefix tree (Trie)
slug: prefix-tree
what: A prefix tree (also called trie, digital tree or radix tree) is a kind of search tree. A node's position defines its key (the root's key is an empty string). All the descendants of a node have a common prefix.
averageTime: O(M) --> M = number of characters in input search string.
---

### What does it look like?
Below is an example of a prefix tree / trie.

<img src="/prefix-tree.png" height="200">

Or transform it into a Minimized DFA (Deterministic Finite Automation)...

<img src="/prefix-tree2.png" height="200">

### Example applications
Prefix trees are good for implementing autocomplete.
