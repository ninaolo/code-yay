---
title: Bit operations
slug: bit-operations
---

### AND
* 0 if ANY bit is 0
* 1 otherwise

```java
int a = 60; // 00111100
int b = 13; // 00001101

// Result: a AND b = 00001100 = 12.
int c = a & b;

// Use case 1: check a certain bit.
int checker = 8; // 00001000
if ((b & checker) > 0) {
    System.out.println("Bit nr 3 is 1.");
} else {
    System.out.println("Bit nr 3 is 0.");
}

// Use case 2: insert 0 somewhere.
int insert = 254; // 11111110
int d = b & insert; // 00001100 = 12
```

### OR
* 1 if first OR second bit is 1
* 0 otherwise

```java
int a = 60; // 00111100
int b = 13; // 00001101

// Result: a OR b = 00111101 = 61.
int c = a | b;

// Use case: insert 1 somewhere.
int insert = 1; // 00000001
int d = a | insert; // 00111101 = 61
```

### XOR - Exclusive OR
* 1 if both bits are exclusive (10 or 01)
* 0 otherwise

```java
int a = 60; // 00111100
int b = 13; // 00001101

// Result: a XOR b = 00110001 = 49.
int c = a ^ b;
```

### NOT
* Get the inverse of a binary number
* Important: sign bit is also included, so the number switches sign

```java
int a = 60; // 00111100

// Result: NOT a = 1...11000011 = -61.
int c = ~a;
```

### SHIFT
* Shifts bits N steps to the left/right

```java
int a = 60; // 00111100
int b = 13; // 00001101

int c = a << 2; // 11110000 = 240
int d = a >> 2; // 00001111 = 15
```
