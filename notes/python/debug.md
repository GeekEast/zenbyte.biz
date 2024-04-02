# Debug


### locals()

- print local variables within a function

```python

def nthPrime(n):
    found = 0
    guess = 0
    while (found <= n):
        print(locals()) ### <--- THIS is our well-placed print statement!
        input()         
        guess += 1
        if (isPrime(guess)):
            found + 1
    return guess
print(nthPrime(5))
```

### input()

- hand the code somewhere
- continue after you enter anything

```python
def nthPrime(n):
    found = 0
    guess = 0
    while (found <= n):
        print(locals())
        input()         ### <--- THIS pauses until we hit Enter. Sweet!
        guess += 1
        if (isPrime(guess)):
            found + 1
    return guess
```