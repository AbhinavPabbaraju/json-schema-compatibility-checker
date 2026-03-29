import type { RuleCheck, CompatibilityChange } from "../types.js";
import { makeChange } from "../utils.js";
 
export const requiredChangeRule: RuleCheck = (source, target, path) => {
  const changes: CompatibilityChange[] = [];
 
  const oldRequired = new Set(source.required ?? []);
  const newRequired = new Set(target.required ?? []);

  for (const field of newRequired) {
    if (!oldRequired.has(field)) {
      const fieldPath = path ? `${path}.required` : "required";
      changes.push(
        makeChange({
          ruleId: "REQUIRED_FIELD_ADDED",
          title: "Required field added",
          level: "breaking",
          path: fieldPath,
          message:
            `Field "${field}" is now required. ` +
            `Existing data that does not include this field will fail validation. ` +
            `To make this a non-breaking change, provide a default value or make the field optional.`,
          before: [...oldRequired],
          after: [...newRequired],
          breaksBwd: true,
          breaksFwd: false,
        })
      );
    }
  }
