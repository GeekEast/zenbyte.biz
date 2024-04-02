# Error Handling

<aside>
💡 Deal with errors without breaking the program

</aside>

### Without Error Handling

```python
print("before code")
file = open('x')
print('after code')

---------------------------------------------------------------------------
FileNotFoundError                         Traceback (most recent call last)
<ipython-input-155-14af8db11883> in <module>
      1 print("before code")
----> 2 file = open('x')
      3 print('after code')

FileNotFoundError: [Errno 2] No such file or directory: 'x'
```

### With Error Handling
```python
print("before code")
try:
    file = open('x')
except:
    print("Error openning files")
print('after code')

---------------------------------------------------------------------------
before code
Error openning files
after code
```