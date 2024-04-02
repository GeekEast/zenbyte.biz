

# Cookie vs Session

- 两者出现的共同原因: http每次请求是不会记录用户身份的(**无状态**)
- Cookie保存在**客户端**，可以保存用户的账户和密码，避免重复登录
    - 也会保存一个session ID, 每次http请求都会附带cookie信息
    - 这样每次http请求来的时候 ，**服务器对比cookie和session就能找出保存的session，继续之前的会话**
    - 如果cookie在客户端被禁止了的话，可以通过**url里面加sid=xxxx**来表示session id
- Session保存在**服务端**，服务器用特定的session来**保存**跟特定用户沟通的**状态**
- 总结: **状态存在服务端，cookie用以配对**