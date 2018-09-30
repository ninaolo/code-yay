---
title: Java datatypes
slug: java-datatypes
---

### Byte
* 8 bit integer
* Signed, two's complement
* Min value: -2^7
* Max value: 2^7 - 1
* Usage #1: when you want to save space (e.g. you have a huge array)
* Usage #2: code understanding (reader understands range is limited)

### Short
* 16 bit integer
* Signed, two's complement
* Min value: -2^15
* Max value: 2^15 - 1
* Usage: same as byte

### Int
* 32 bit integer
* Signed, two's complement
* Min value: -2^31
* Max value: 2^31 - 1

### Long
* 64 bit integer
* Signed, two's complement
* Min value: -2^63
* Max value: 2^63 - 1
* Usage: when you need a wider range than int
* Initialize: 0L

### Float
* 32 bit floating point
* Use instead of double if you wan't to save memory
* Shouldn't be used for precise values, like currency.
* Initialize: 0.0f

### Double
* 64 bit floating point
* Shouldn't be used for precise values, like currency.
* Initialize: 0.0d

### Char
* 16 bit character (UTF-16)
* Initialize: 'hello'
