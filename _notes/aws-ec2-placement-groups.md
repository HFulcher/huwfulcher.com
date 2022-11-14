---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# Placement Groups
Strategies:
- Cluster - Placed into a low-latency group in a single AZ]
	- In the same rack in the same AZ
	- High risk if rack goes down
	- Low latency means better performance (10 Gbps bandwidth between instances)
- Spread - Spread across underlying hardware (max 7 instances per AZ), used for critical applications
	- Opposite of cluster, designed to minimise risk or simultaneous failure
	- Good for critical applications
- Partition - Spread across many different partitions (which rely on different sets of racks) within an AZ. Scales to 100s of EC2 instances per group (hadoop, cassandra, kafka)
	- Up to 7 partitions per AZ
	- Can span multiple AZs
	- Partition = Rack