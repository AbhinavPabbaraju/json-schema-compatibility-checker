## Architecture

- Parser → Converts JSON Schema into AST
- Comparator → Traverses and compares nodes
- Rule Engine → Classifies changes
- Reporter → Outputs results (CLI / JSON)

---

### 1. Parser

- Reads JSON Schema files
- Converts them into a structured format (JavaScript objects)
- Normalizes schema (handles missing fields, defaults)

---

### 2. Comparator

- Traverses both schemas recursively
- Compares nodes at each level

Approach:
- Use **DFS (Depth-First Search)** to walk through schema trees
- Maintain path tracking (e.g., `properties.name`)

---

### 3. Rule Engine

The core of the system.

Each rule defines:
- Condition (what changed)
- Classification (breaking/safe/warning)

---

#### Example Rule: Required Field Added

**Condition:**
- Field exists in new schema
- Field is marked as required
- Field does not exist in old schema

**Result:**
BREAKING CHANGE: Required field 'X' added

---

#### Example Rule: Optional Field Added

**Condition:**
- Field added
- Not required

**Result:**
SAFE: Optional field 'X' added

---

#### Example Rule: Enum Value Removed

**Condition:**
- Enum exists in both schemas
- A value is removed in new schema

**Result:**
BREAKING: Enum value removed

---

## Comparison Strategy

### Step 1: Compare Types

- If type changes → potentially breaking

---

### Step 2: Compare Properties

- Detect added/removed fields
- Check required fields

---

### Step 3: Compare Constraints

- minLength
- maxLength
- minimum / maximum
- pattern

---

### Step 4: Handle Composition

- allOf
- anyOf
- oneOf

(Planned for later phases)

---

## Data Flow
Old Schema + New Schema
↓
Parser
↓
Comparator
↓
Rule Engine
↓
Reporter
↓
CLI Output + JSON Report

---

## Output Format

### CLI Output
BREAKING: Required field 'age' added
WARNING: Type changed from integer to number
SAFE: Optional field 'nickname' added

---

### JSON Output

```json
{
  "breaking": [
    "Required field 'age' added"
  ],
  "warnings": [],
  "safe": []
}
```

## Testing Strategy
Unit tests for each rule
Integration tests for full schema comparison
Edge case testing:
Missing fields
Nested objects
Complex compositions
