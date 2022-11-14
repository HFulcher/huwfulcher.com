---
description: A note in Huw's knowledge base
---

Back: [[aws-ec2]]

# EC2 Instance Types
AWS has a naming convention, example:

`m5.2xlarge`

m - Instance class
5 - Generation, AWS improves hardware overtime, higher number means newer hardware
2xlarge - Size within the instance class

| Instance Type     | Description                                                         | Use Case                                                                          | Instance Classes     |
| ----------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------- |
| General Purpose   | For diverse workloads that rely on storage, CPU and RAM             | Web servers, Code repositories                                                    | t, M                 |
| Compute Optimized | Great for compute-intensive tasks                                   | Batch processing, media transcoding, high performance computing                   | c                    |
| Memory Optimized  | Fast performance to process large datasets in memory                | Databases, distributed web scale cache stores, in-memory DBs                      | R, X, z, High Memory |
| Storage Optimized | Good for high sequential read and write access on **local storage** | Online transaction processing systems, Data warehousing, Distributed file systems | I, D, H1                     |
