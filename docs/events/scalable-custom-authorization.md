


# Build Scalable Custom Authorization for Application in 30 minutes

## Overview of Authorization as a Service

- Why Authorization as a Service?
  - extracted from code
  - make audit easier
  - extra efforts like custom UI,etc
- [Amazon Verified Permissions](https://aws.amazon.com/verified-permissions/)

policy-based authorization:
- principal
- actions
- resource
- allow/deny


<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-05-23.png" alt="no image found"></p>

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-06-17.png" alt="no image found"></p>


## Demo

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-09-30.png" alt="no image found"></p>

- what does `context` mean here in AVP?
- what is the **policy store**?
- AVP will send audit data to **cloud trail**.
- how to accommodate **RBAC** & **ABAC**?
- build in Rust!
- Cost: Consumption based model.

### Use Cases
<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-21-43.png" alt="no image found"></p>

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-23-21.png" alt="no image found"></p>

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-23-35.png" alt="no image found"></p>

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-15-24-23.png" alt="no image found"></p>