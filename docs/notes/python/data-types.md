# Data Types in Python

- basic

```python
print("Some basic types in Python:")
print(type(2))           # int
print(type(2.2))         # float
print(type(2 < 2.2))     # bool (boolean)
print(type(type(42)))    # type
```

- others

```python
print("And some other types")
print(type("2.2"))       # str (string or text)
print(type([1,2,3]))     # list
print(type((1,2,3)))     # tuple
print(type({1,2}))       # set
print(type({1:42}))      # dict (dictionary or map)
print(type(2+3j))        # complex  (complex number)
```

- builtin constant

```python
print(True)
print(False)
print(None)
```

- module constant

```python
import math
print(math.pi)
print(math.e)
```