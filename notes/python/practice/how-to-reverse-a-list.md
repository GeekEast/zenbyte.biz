# How to reverse a list

- `while` loop

```python
new_items = []
index = len(items) -1
while index >= 0:
    new_items.append(items[index])
    index = index - 1
```

- `for` loop with `join`

```python
new_items = []
for i in items:
	new_items = [i] + new_items
```

- not in-place **( recommended )**

```python
reversed_items = items[::-1]
print(reversed_items)
```

- `in-place` **reverse  ( not recommended )**

```python
items.reverse()
print(items)
```

## Reference

- [Caesar Cipher](https://cryptii.com/pipes/caesar-cipher)