---
title: General tips for interview problem solving
slug: problems-general
---

### Highest/lowest product problems
Highest/lowest product doesn't only involve highest/lowest numbers. Also think of negative numbers -->
two very large negative numbers multiplied = a large positive. Easy to forget!

### Finding a sum among integers
Not needed to combine all with all (N^2). Previously seen Integers can be stored in a HashMap and the
remaining needed number(s) expressed with the sum.

### Recursion
Don't forget the base case! Otherwise, you'll end up with infinite recursion.

### Bit operations
ALWAYS put parenthesis around bit operations. Example: if ((a & b) > 0) {}  --> otherwise compile error.
