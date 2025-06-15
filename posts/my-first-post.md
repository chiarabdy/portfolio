---
title: "A Developer's Rite of Passage: Debugging a Stubborn Build Error"
date: '2025-06-15'
excerpt: "My journey building a new project, and how I tackled a persistent error that tested every part of my development environment."
---

When you start a new project, you expect a few bumps along the way. But when I began building my portfolio, I hit a wall with a stubborn build error that wouldn't go away. This error led me on a deep-dive into modern web development troubleshooting.

### The Troubleshooting Journey

My first instinct was that it was a simple dependency issue. I began a systematic process to find the root cause, from checking dependencies with `npm install`, to switching terminals from PowerShell to Git Bash, to performing a full, clean re-installation of Node.js itself.

Even after switching package managers to Yarn, the error persisted. This confirmed the problem wasn't the code, but a deep issue with my local Windows environment.

### The Professional Solution

Instead of continuing to fight my local machine, I pivoted to a modern solution: **GitHub Codespaces**. This gave me a clean Linux environment in the cloud where the code ran perfectly on the first try. It was a powerful lesson: sometimes the problem isn't the code, but the environment in which it runs.