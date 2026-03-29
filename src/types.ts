export type CompatibilityLevel = "breaking" | "warning" | "safe";
export type JsonSchemaDraft = "draft-04" | "draft-06" | "draft-07" | "2019-09" | "2020-12";
 
export interface JsonSchema {
  $schema?: string;
  $id?: string;
  $ref?: string;
  $defs?: Record<string, JsonSchema>;
  definitions?: Record<string, JsonSchema>;
 
  // Core
  type?: string | string[];
  enum?: unknown[];
  const?: unknown;
 
  // String
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
 
  // Number
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number | boolean;
  exclusiveMaximum?: number | boolean;
  multipleOf?: number;
 
  // Array
  items?: JsonSchema | JsonSchema[];
  prefixItems?: JsonSchema[];
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  contains?: JsonSchema;
