
# Boost Loop
- use **if-else** to **replace** loop
- use i**f-else** to **exclude cases** and made loop less
- `n**0.5` to reduce time to loop
- 能用计算绝对不用复杂数据结构

### Questions

- 该loop循环4下还是循环30下？

```python
def ctx(n):
    for i in range(0,n):
        print(i)
        n = n + 1
        if n  == 30:
            return 'finish'

ctx(5)
```