import type { RuleCheck, CompatibilityChange } from "../types.js";
import { makeChange } from "../utils.js";
 
export const requiredChangeRule: RuleCheck = (source, target, path) => {
  const changes: CompatibilityChange[] = [];
 
  const oldRequired = new Set(source.required ?? []);
  const newRequired = new Set(target.required ?? []);
