# Data Mesh
Delivering Data-Driven Value at Scale

## Foreword (p. xv)
*"Wiser enterprises have decentralized their data, pushing data storage, models and management into different business units. **That way, the people who best understand the data in their domain are responsible for managing that data.**"* (p. xv)

## Preface (p. xvii)
*"It (Data Mesh) aims to enable organisations to get value from data at scale, despite the messiness and organisational complexity"* (p. xvii)

*"Looking back through the history of our industry, we have been nudged before. The birth of Unix and its philosophy to **'Write programs that do one thing and do it well. Write programs to work together...'** ..."* (p. xvii)

The Unix philosophy is seeing a renaissance in the online space in the wake of Twitter and the migration to Mastodon. People are being exposed to the concept of [[federation]] and the idea that pieces of software can be shrunk to fix specific needs without sacrificing interoperability with other software. By using [[acitivitypub|ActivityPub]], Mastodon is able to communicate with other software while not needing to expand its core functionality.

If I am correct, Data Mesh takes a similar principle. Allowing specific *data nodes* within the mesh to meet their core user needs while using federated protocols to allow interoperability between other nodes in the mesh.

"*The pains of data users -- data analyst or scientist -- were real; **they were all struggling to get timely access to high quality and trustworthy data. The pains of data engineers were shared, stuck in the middle between data providers and data users, trying to get meaning out of data from unreliable upstreams and put it in a form that others can use ...***" (p. xvii - xviii)

I had first hand exposure to this at Admiral Money. We were trying to build a data lake with different levels of data exposed, raw, sanitised and curated. The idea was meant to be that users could come and self serve once we had collected their requirements and built the necessary schemas, infrastructure, etc. While I think we did this well the problem is that you are always constrained by the capacity of the data team. A bottleneck in data engineering or governance or architecture will lead to a bottleneck in output. **If you are able to embed the customer-specific data within that team and have its ownership there then the team itself is a bottleneck. The issue with this is having capability on teams to make this type of thing happen.**