# SSRF in Next.js API Route: Extracting Internal Tokens

Demonstrate and exploit an SSRF vulnerability in a Next.js application's API route to access sensitive internal data, simulating a real-world bug bounty scenario.

## Objectives
- Identify SSRF in a custom Next.js API route
- Exploit SSRF to access internal-only resources
- Understand impact of SSRF in server-side JavaScript environments
- Extract secrets from internal services via SSRF

**Difficulty:** Intermediate

**Estimated Time:** 45 minutes

### Prerequisites
- Basic knowledge of SSRF
- Familiarity with Node.js and Next.js application structure
- Ability to use HTTP request tools (curl, Postman, Burp Suite)

### Skills Learned
- Identifying and exploiting SSRF in Next.js apps
- Mapping internal network access vectors
- Extracting and recognizing sensitive secret material from SSRF payloads

### Project Structure
- folder:build
- folder:deploy
- folder:test
- folder:docs
- file:readme.md
- file:.gitignore

### Quick Start
**Prerequisites:** Docker and Node.js environment required.

**Installation:**
```
git clone <lab-repo>
cd <lab-folder>
docker-compose up -d
```
Next.js runs at http://localhost:3000; SSRF target available as internal service at http://localhost:8000/token.

**Issue Tracker:**
https://github.com/example-ssrf-lab/issues 