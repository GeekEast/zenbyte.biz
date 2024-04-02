# Stateful vs Stateless

## Stateful Application

- store user session in memory of application server
- drawbacks:
    - it won’t allow you to do horizontal scaling of application server
- Solution:
    - store user session in seperate data storage like redis so application server doesn’t need to store any session in memory

## Stateless Application

- user session is not stored in application server memory

## References

- https://www.youtube.com/watch?v=UQ2cfQV5nJ4
- https://medium.com/@ajin.sunny/system-design-architecture-stateful-vs-stateless-62ed0ddb9f2b