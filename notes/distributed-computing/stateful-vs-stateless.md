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

<iframe width="560" height="315" src="https://www.youtube.com/embed/UQ2cfQV5nJ4?si=rJEe_fTiI02yE1C3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- https://medium.com/@ajin.sunny/system-design-architecture-stateful-vs-stateless-62ed0ddb9f2b