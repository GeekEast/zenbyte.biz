# BUild self-healing code with generative AI on AWS
- error happens
- ai review find cause and source code
- raise a PR for developer's review

## Generative AI Code Companion
- suggest and complete code
- explain and understand code
- transform and upgrade
  - Amazon Q to upgrade dependency version

## Self-healing Code
application logs -> agent -> improve source code

<p align="center"><img style="display: block; width: 600px; margin: 0 auto;" src="./img/2024-04-10-11-52-06.png" alt="no image found"></p>

## Self-healing Code Agent
- clone source code
- create prompt
- invoke Amazon Bedrock
- write source code changes
- create pull request

## What Next?
- complex company repos
- chat in code review and agent update code accordingly.
- How about the feedback loop automatically?