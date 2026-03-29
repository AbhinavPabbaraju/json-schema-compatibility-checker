# json-schema-compatibility-checker
### Detect breaking changes between schema versions

#### This Project aims to build a CLI Tool and library that semantically compares two JSON Schema versions and reports:
-Breaking Changes<br>
-Potentially Risky Changes<br>
-Safe Changes<br>

### Why this matters: 
#### In Production systems, schema changes can silently break APIs or invalidate existing data.<br> 
#### Unlike Protobuf or Avro, JSON Schema lacks robust compatibility tooling. This project addresses that gap.<br>

## Features:<br>
### Current Features:
#### -Detect added/removed fields<br>
#### -Detect required field changes<br>
#### -Detect enum changes<br>

### Planned Features:
#### -Constraint Comparison (min/max, patterns)<br>
#### -allOf / anyOf / oneOf Support<br>
#### -CLI output + JSON report
