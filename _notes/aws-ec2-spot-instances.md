---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# Spot Instances
Can get up to 90% discount compared to On-demand

Two strategies for getting instances:
1. You define your **max spot price** and get the instance while the **current price is lower than the max**. When the trigger occurs you have 2 minutes to stop or terminate instance
2. Spot block. You block a specified time frame without interruptions. In some cases the instance can still be reclaimed

Spot instances are best used for batch jobs, data analysis or workloads that are resilient to failures

## Spot Fleets
Spot Fleets = set of spot instance + (optional) on-demand instances

Spot Fleet automates trying to meet target capacity with price constraints
- Define possible launch pools. E.g. instance type, OS, AZ
- Can have multiple launch pools so that the fleet can choose
- Spot Fleet stops launching instances when reaching capacity or max cost

Strategies to allocate Spot Instances:
- lowestPrice - Launch from a pool that has the lowest price (good for short workloads)
- diversified - Distributed across all pools (higher availability, long workloads)
- capacityOptimized - Pool with the optimal capacity for the number of instances