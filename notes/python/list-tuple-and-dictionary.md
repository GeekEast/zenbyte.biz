

# List, Tuple and Dictionary


## List
> A sequnce of items.
```python
# create
items = ['apple','banana','cherry']

# create list with only one item
one_item = ['apple']

# read
items[0] # start from 0 to len(items)-1
items[-1]
items[1:3] # [1,3)

# update
items[0] = 'watermellon'

# add
items.append('cookie')
items.insert(1,"blackberry")

# remove
items.remove('cookie')
items.pop()
items.pop(0)
items.clear()

# copy
copy_of_items = items.copy()
copy_of_items2 = list(items)

# join
new_items = ['cookie'] + items

# loop
for i in items:
	# actions

# check element exists
if i in items:
	# actions

# get length
len(items)
```

## Tuple
> An `immutable` sequence of items

```python
# create
items = ("apple", "banana", "cherry")

# create tupe with only one item
one_item = ("apple",)

# read
items[0] # start from 0 to len(items)-1
items[-1]
items[1:3] # [1,3)

# you can't update items in a tuple
####################################

# you can't add items to a tuple
#####################################
#####################################

# you can't remove items from a tuple
#####################################
#####################################
#####################################
#####################################

# copy
copy_of_items2 = tuple(items)

# join 
new_items = ('cookie') + items

# loop
for i in items:
	# actions

# check element exists
if i in items:
	# actions

# get length
len(items)
```

## Dictionary
> A collection of key-value pairs

```python
# create
pairs = {'name': 'James','age': 28,'job': 'developer'}

# create dict with only one pair
one_pair = {'name': 'james'}

# read
pairs['name']
pairs.get('name')

# update
pairs['age'] = 18

# add
pairs['degree'] = 'master'

# remove
pairs.pop('age')
pairs.clear()

# copy
copy_of_pairs = items.copy()
copy_of_pairs2 = dict(items)

# join
paires = {**p1, **p2}

# loop
for key in pairs: # keys
for value in thisdict.values(): # values
for key, value in thisdict.items(): # pairs

# check key exists
if 'age' in items:
	# actions

# length
len(paris)
```
