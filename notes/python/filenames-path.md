# Filenames & Path

### Type of path

- Absolute path

```
'/Users/username/Documents/io.ppt'
```

- Relative path

```
'..'
'./'
```

- Relative to Absolute

```python
import os
os.path.abspath("..")
os.path.realpath("..")
```

---

### Common Operations

- list files and folders in current path

```python
os.listdir('.') # './' works as well
```

- check one thing exists or not

```python
os.path.exists('.')
```

- check one thing is a file or a folder

```python
os.path.isdir('.')
os.path.isfile('.')
```

- join path `conveniently`
```python
os.path.join('.','words.txt')
'.' + '/' + 'words.txt' # load the system seperator automatically
```