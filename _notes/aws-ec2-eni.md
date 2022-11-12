Back: [[aws-ec2]]

# Elastic Network Interfaces (ENI)
Logical component of a VPC that represent a **virtual network card**

Can attach many ENIs to an EC2 instance which act like an ethernet connection (e.g. eth0, eth1, ...).

An instance will have a primary ENI which provides primary private IPv4 and then it can have many secondary ENIs which have private IPv4 addresses.

Have the following attributes:
- Primary private IPv4, one or more secondary IPv4
- One elastic IP per private IPv4
- One public IPv4
- One or more security groups
- A MAC address

ENIs are **independent** of EC2 instances meaning they can be plug & played across instances. This is useful for failovers when you need a new EC2 instance to handle requests but want to keep static private IPs

ENIs are bound to specific availability zones
