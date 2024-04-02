# Service Discovery

- Only used in containerized applications, where location of each service might change.
- usually used with tcp or grpc

## Alternative

- each service have a domain name
- use http call to do inter-service communication
- drawback: very slow compared to tcp/rpc method