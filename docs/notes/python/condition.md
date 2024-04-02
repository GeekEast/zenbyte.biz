# Condition
- one line

```python
x = 1
if x < 1: print("<1")
```

- multiple lines

```python
if x < 1:
	print("<1")
```

- multiple if

<aside>
💡 Meet the first one will **skip** `elif` and `else` downside

</aside>

```python
if x < 1:
	print("(,1)")
elif x < 2:
	print("[1,2)")
else:
	print("[2,)")
```

- if-else expression

```python
def abs(n):
	 return n  if n < 0 else -n
```