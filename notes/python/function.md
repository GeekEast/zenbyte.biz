# Function

- builtin function

```python
print(bool(0))   # convert to boolean (True or False)
print(float(42)) # convert to a floating point number
print(int(2.8))  # convert to an integer (int)

print(abs(-5))   # absolute value
print(max(2,3))  # return the max value
print(min(2,3))  # return the min value
print(pow(2,3))  # pow(x,y) == x**y
print(round(2.354, 1)) # 保留下小数点后1位， 四舍五入
```

- return

```python
def f(x):
	result = x + 42
	# no return = return None
```

- function composition

```python
def f(w):
	return 10*w

def g(x,y):
	return f(3*x) + y
```

- recommended function

```python
# 遇到5就出错的round
round(0.5) # expect 1 but 0.5
round(1.5) # expect 2 but 1.5

def myRound(f, d=0):
    x = f*10**d 
    from math import modf
    y = modf(x)[0] 
    r = modf(x)[1]
    z = (y - modf(y * 10)[0])*10
    res = (r+1)/10**d
    if (z < 5):
        res = r/10**d
    if d == 0:
        return int(res)
    return res
```

- test function

```python
def testMyRound():
    print("start testing myRound(): ", end="")
    assert(myRound(0) == 0)
    assert(myRound(0.5) == 1)
    assert(myRound(1.1) == 1)
    assert(myRound(1.5) == 2)
    assert(myRound(1.53,1) == 1.5)
    assert(myRound(1.55,1) == 1.6)
    assert(myRound(1.55,2) == 1.55)
    assert(myRound(1.55,3) == 1.55)
    print("passed")
```