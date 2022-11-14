---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# Security Groups
Security Groups control traffic to (inbound) and from (outbound) an instance. A basic example would be a Security Group could restrict traffic to only port 22.

Only contain allow rules, implicitly disallowed
Rules can reference IPs or other security groups

Security groups act as a firewall

Regulate:
- Access to ports
- IP Ranges (IPv4, IPv6)
- Control of inbound network
- Control of outbound network

Security groups can be attached to multiple instances

Are locked down to a region/VPC combination

Live "outside" the EC2, if traffic is blocked to an EC2 it won't even register an unauthorised request

Security groups return time outs if blocking, a "connection refused" is an application error

![[networking-port-list#Networking Ports]]