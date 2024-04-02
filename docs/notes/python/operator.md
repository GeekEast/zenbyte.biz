# Operator

- Arithmetic

```python
print(3//2) # 1 整除取商
print(-3//2) # -2*2 + 1 = -3
```

- Logical

```python
print(True and True)
print(False or True)
print(not True)
```

- Type Affect Semantics

```python
3*"abc" # abcabcabc
3+"abc" # throw error
```

- operator order

```python
# ** associates right-to-left
print(4**3**2) # prints 262144, not 4096 
```

- approximate values of floating-point numbers

```python
print(0.1 + 0.1 == 0.2)        # True, but...
print(0.1 + 0.1 + 0.1 == 0.3)  # False!

from math import isclose
isclose(0.3,0.1+0.1+0.1,rel_tol=10**-10)  # True!

def almostEqual(d1, d2):
	return abs(d1 - d1) < 0.1
```

- check type

```python
type(x,<Type String>)
isinstance(x, <Type Object>) # more robust

def isString(input):
	# return type(input) == str
	return isinstance(str)

def isNumber(input):
	import numbers
	return isinstance(numbers.Number)

```