---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# EC2 User Data Script
Bootstrapping instances (launch command **once** when machine starts)

Can be used to automate boot tasks such as:
- Install updates
- Install software
- Download files
- Anything really

The bigger the EC2 User Data Script the longer the boot time

**EC2 User Data Script is run as root by default**