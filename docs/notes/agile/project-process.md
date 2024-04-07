---
prev: false
---

# Agile Release Stages

## Product Requirements Document
- Generators: Product Manager, Product Owner, User
- Output: Product Requirements Document
- Reviewers: product, design, backend, frontend and qa team

## UI/UX Document
- Generators: UI/UX
- Output: UI/UX Documents
- Reviewers: product, design, backend, frontend and qa team

## Technical Document
- Generators: engineer
- Output:
  - divide product requirements and tickets planning
  - **influence on existing features** (for regression test)
  - shared understanding of related system components relationship (transparent team responsibilities)
- Reviewers: backend, frontend and qa team

<!-- fullstack workflow maybe different, TODO -->
## API Schema Document
- Generators: backend engineer
- Output: **API Schema Document**
- Reviewers: backend/frontend engineers

## Code Development
- Generators: engineer
- Output: 
  - mock data
  - code
- Reviewers: engineer

## Integration Stage
- Participants: backend, frontend
- Output: 
  - online working environment
  - generate UAT test cases

## Engineer Test
- Participants: backend, frontend
- Activities: smoke test (main path) by engineers
- Output: Ready for Test Report

## QA Test
- Participants: QA
- Output: bug report
- Activities:
  - bug report
  - bug fix

## Test Report
- Generator: qa
- Output: test report
- Reviewers: product, design, engineer and qa

## Deployment
- Participants: Product
- Activities:
  - release report
  - user guide on new feature


## User Behavior Report
- Generators: Product, 
- Output: use usage report for next release improvement.
- Reviewers: product, engineer, qa


## Retro Stage
- Participants: All
- Output: keep and fix documents


