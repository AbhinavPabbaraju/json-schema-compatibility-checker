import type { RuleCheck, CompatibilityChange } from "../types.js";
import { makeChange, normalizeType, display } from "../utils.js";
 
export const typeChangeRule: RuleCheck = (source, target, path) => {
  const changes: CompatibilityChange[] = [];
 
  const oldTypes = normalizeType(source.type);
  const newTypes = normalizeType(target.type);
 
  if (oldTypes.length === 0 && newTypes.length === 0) return [];
  if (JSON.stringify([...oldTypes].sort()) === JSON.stringify([...newTypes].sort())) return [];
 
  // Types that were removed (narrowing — breaking)
  const removed = oldTypes.filter((t) => !newTypes.includes(t));
  // Types that were added (widening — safe)
  const added = newTypes.filter((t) => !oldTypes.includes(t));
 
  if (removed.length > 0 && added.length === 0) {
    changes.push(
      makeChange({
        ruleId: "TYPE_NARROWED",
        title: "Type narrowed",
        level: "breaking",
        path,
        message:
          `Removed accepted type(s) ${display(removed)} from ${display(oldTypes)} → ${display(newTypes)}. ` +
          `Existing data of type ${removed.join("/")} will now fail validation.`,
        before: source.type,
        after: target.type,
        breaksBwd: true,
        breaksFwd: false,
      })
    );
  } else if (added.length > 0 && removed.length === 0) {
    // Pure widening
    changes.push(
      makeChange({
        ruleId: "TYPE_WIDENED",
        title: "Type widened",
        level: "safe",
        path,
        message:
          `Added accepted type(s) ${display(added)}. ` +
          `Previously-valid data remains valid; new types are now also permitted.`,
        before: source.type,
        after: target.type,
        breaksBwd: false,
        breaksFwd: true,
      })
    );
  } else {
    changes.push(
      makeChange({
        ruleId: "TYPE_CHANGED",
        title: "Type changed incompatibly",
        level: "breaking",
        path,
        message:
          `Type changed from ${display(source.type)} to ${display(target.type)}. ` +
          `This is a potentially breaking change — data valid under the old type may fail, ` +
          `and data valid under the new type may have been rejected before.`,
        before: source.type,
        after: target.type,
        breaksBwd: true,
        breaksFwd: true,
      })
    );
  }
 
  return changes;
};
