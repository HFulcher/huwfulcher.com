---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# IP Addresses
## Private vs Public IP
Public IP ranges allow servers to be accessible over the internet. Private IP ranges allow servers on the same network to connect to each other.

Machines on a private network can access the internet (public internet) via a gateway machine

## Elastic IPs
When you stop and start an EC2 instance its public IP gets reassigned

If a fixed public IP is needed you can add an Elastic IP which remains until you delete it.

Can only attach one-to-one with an instance

**Can only have 5 Elastic IPs per account**