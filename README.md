# json-schema-compatibility-checker
### Detect breaking changes between schema versions

#### This Project aims to build a CLI Tool and library that semantically compares two JSON Schema versions and reports:
-Breaking Changes
-Potentially Risky Changes
-Safe Changes

### Why this matters: 
#### In Production systems, schema changes can silently break APIs or invalidate existing data.<br> 
#### Unlike Protobuf or Avro, JSON Schema lacks robust compatibility tooling. This project addresses that gap.<br>

## Features:<br>
### Current Features:
-Detect added/removed fields  
-Detect required field changes  
-Detect enum changes  

### Planned Features:
-Constraint Comparison (min/max, patterns)  
-allOf / anyOf / oneOf Support  
-CLI output + JSON report

#### Example:

Old Schema:

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" }
  }
}
```

New Schema:

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "number" }
  }
}
```

### Output:
BREAKING: Required field `age` added

### How to Run:

  npm install
  npm run compare old.json new.json

### Tech Stack:
- TypeScript
- Node.js
- JSON Schema Draft-07+

### GSoC Note:
This repository is being developed as a proposal for GSoC 2026 under JSON Schema Org.

The goal is to build a robust compatibility checker aligned with industry standards (Protobuf, Avro).
