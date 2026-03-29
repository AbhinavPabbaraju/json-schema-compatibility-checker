# Contributions Plan: JSON Schema Compatibility Checker

## Overview

This document outlines my planned contributions toward the JSON Schema Compatibility Checker project as part of GSoC 2026.

The goal is not only to build the project but also to actively contribute to the JSON Schema ecosystem through code, documentation, and collaboration with maintainers.

---

## Contribution Goals

- Build a robust compatibility checker aligned with JSON Schema specifications
- Contribute reusable components to the ecosystem
- Maintain high code quality with tests and documentation
- Collaborate actively with mentors and community members

---

## Pre-GSoC Contributions (Before Selection)

I will begin contributing before the official GSoC period to demonstrate commitment and familiarity with the codebase.

### Planned Contributions:

- Explore existing tools:
  - getsentry/json-schema-diff
  - json-schema-diff (npm)

- Submit small PRs such as:
  - Documentation improvements
  - Fixing edge cases
  - Adding missing test cases

- Engage in discussions:
  - Ask clarifying questions on issues
  - Propose design improvements
  - Validate assumptions with mentors

---

## Core Contributions (During GSoC)

### 1. Schema Comparison Engine

- Implement recursive schema traversal (DFS-based)
- Compare:
  - Types
  - Properties
  - Required fields
  - Enums

---

### 2. Rule-Based Compatibility System

Implement modular rules such as:

- Required field added →  Breaking
- Required field removed → Safe
- Enum value removed →  Breaking
- Enum value added →  Warning
- Type narrowing →  Breaking
- Type widening →  Warning

---

### 3. CLI Tool

- Build a CLI interface:
json-schema-diff old.json new.json


- Features:
- Human-readable output
- Colored output for clarity
- Summary of changes

---

### 4. JSON Output API

- Provide machine-readable output:
- breaking
- warnings
- safe changes

- Enable integration with other tools

---

### 5. Testing & Validation

- Unit tests for all rules
- Integration tests for full schema comparisons
- Edge case coverage:
- Nested schemas
- Missing fields
- Complex compositions

---

## Stretch Contributions (If Time Permits)

- GitHub Action for PR compatibility checks
- Support for multiple JSON Schema drafts:
- Draft-04
- Draft-07
- 2020-12
- Performance optimizations for large schemas
- `$ref` resolution and circular reference handling

---

## Community Contributions

- Actively participate in discussions on GitHub issues
- Help other contributors understand the project
- Review PRs (if permitted)
- Improve onboarding documentation

---

## Documentation Contributions

- Write clear usage guides
- Add examples for different types of schema changes
- Maintain a compatibility rules matrix
- Document edge cases and limitations

---

## Progress Tracking

I will maintain consistent progress updates in the repository:

- Daily/weekly commits
- Clear commit messages
- Progress logs in README

---

## Development Principles

- Write clean, readable, and maintainable code
- Follow project coding standards
- Keep features modular and extensible
- Prioritize correctness over premature optimization

---

## Communication Plan

- Regular updates to mentors
- Early feedback on design decisions
- Transparent discussion of blockers
- Iterative improvements based on feedback

---

## Conclusion

My approach is to contribute consistently, communicate clearly, and build a high-quality tool that aligns with the goals of the JSON Schema organization.

This project is not just a GSoC submission, but a long-term contribution to the ecosystem.
