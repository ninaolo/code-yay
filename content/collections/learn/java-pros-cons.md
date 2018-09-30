---
title: Java pros and cons
slug: java-pros-cons
---

### Pros

1. Scalable
2. Much support
3. Garbage collection
4. Type check
5. Often "forces" a more structured code design.
6. Because of type check etc. --> often easy to debug.
7. Often self-explanatory. In Python we often need a lot of comments to explain the code, while in Java
you only need comments for parts that might be extra difficult to understand.

### Cons

1. Simple things = much code
2. Boolean, Integer etc. can be null, which can be confusing.
3. Forced to use primitive wrappers if we want to put them in List, Map etc.. and
memory size of wrapper is bigger than the size of the primitive.
4. Doesn't have closures, however lambdas are pretty close.
5. People complain about having to do null checks everywhere. However, if you use the
Null object pattern or @NotNull you shouldn't have to.
