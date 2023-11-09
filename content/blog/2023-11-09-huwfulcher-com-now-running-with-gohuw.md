---
date: 2023-11-09T12:40:41.834Z
title: huwfulcher.com, now running with gohuw
excerpt: I decided to take the challenge of writing my own SSG called gohuw.
published: true
---
While perusing [Hacker News](https://news.ycombinator.com) recently I came across [Why You Should Write Your Own Static Site Generator](https://news.ycombinator.com/item?id=38126210). Not one to turn down a challenge I decided that I should as well. Reasons being:

1. I don't like Hugo that much. It's definitely one of the best generators out there but I didn't like its structure or limitations it imposes.
2. I wanted to try Go. I've only gotten as far as "Hello World" previously with Go so doing a Static Site Generator seemed to be a good way to understand things.
3. I wanted a binary to run. I love the idea that with Go you can build a binary and then bundle that with your website. It means I have no external dependencies to weigh me down if I choose not to.

The result is [gohuw](https://github.com/HFulcher/gohuw), a Frankenstein-esque SSG that I wouldn't recommend others use. I have it on good authority from my Go expert friend that the code is bad. But that's okay, it does the job for me. 

Why not call it "huwgo"? I felt that was a bit on the nose being so close to "hugo" and I didn't want people having the misunderstanding that I have written this to be widely adopted.

This was a fun project and something I'll likely try and replicate in other languages I want to learn (e.g. Rust). It provides a good range of techniques to be used and also ends with something actually useful. 