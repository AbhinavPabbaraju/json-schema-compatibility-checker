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
