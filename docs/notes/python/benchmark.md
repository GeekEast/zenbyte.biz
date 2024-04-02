# Benchmark

```python
from time import time

start = time()

for x in range(0,100000):
y = x + 1

end = time()

[print((end-start)*1000, 'ms'](in ms))

```

- util

```python
def benchmark(func, *args):
    from time import time
    start = time();
    func(*args)
    end = time()
    print("Execution Time of ",func.__name__,args,' is ',(end-start)*1000, 'ms')
```