# Loop & Iterator
## Loop

### For Loop

- with `start` and `end`

```python
for i in items:
	# action
for a,b,c in items: # [(1,2),(3,4)] tuple or list inside a list
	# action
for i in range(0,100,1): #[0,100) step by 1
	# action
```

### While Loop

- with `start` and `end condition`
- wtih `start` and `break condition`

```python
# test with break and continue
i = 1
while i < 6:
  print(i)
  i += 1
```

### Keywords

```python
# continue, break, and pass are three keywords used in loops
# in order to change the program flow
for n in range(200):
    if (n % 3 == 0):
        continue # skips rest of this pass
    elif (n == 8):
        break # skips rest of entire loop
    else:
        pass # does nothing! pass is a placeholder, not needed here
    print(n, end=" ")
print()
```

## Iterator

<aside>
💡 `Lists`, `tuples`, `dictionaries` and `sets` are all iterable objects. You can get an iterator from them by using the `iter`  method.

</aside>

- for loop for iterable items

```python
items = (1,2,3,4) # tuple is iterable
for x in items:
	# actions
```

- unpacking

```python
x = [1,2,3]
a,b,c = x # a:1, b:2, c:3
```

- get iterator from iterable objects

```python
items = ["apple", "banana", "cherry"] # same as (): immutable sequence
myit = iter(items)
print(next(items))
print(next(items))

mystr = "banana" # string is iterable
myit = iter(mystr)
print(next(myit))
print(next(myit))
```

- other methods on Iterable

```python
sum([1,2,3]) # 1 + 2 + 3
any([0,[],None]) # false because no true value in the list
all([1,[1],"x"]) # true becaseu no false value in the list
max([1,2,3]) # 3
min([1,2,3]) # 1
sorted([2,1,3]) # 1,2,3
```