# 10 TypeScript Tips for Better Code

TypeScript has become the de facto standard for large-scale JavaScript applications. Here are 10 tips to help you write better TypeScript code.

## 1. Use Strict Mode

Always enable strict mode in your tsconfig.json:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## 2. Leverage Type Inference

Let TypeScript infer types when possible:

```typescript
// Good
const name = "John";

// Unnecessary
const name: string = "John";
```

## 3. Use Union Types

Union types are powerful for handling multiple type possibilities:

```typescript
type Status = "pending" | "success" | "error";
```

## 4. Avoid Any

The `any` type defeats the purpose of TypeScript. Use `unknown` instead when the type is truly unknown.

## 5. Use Utility Types

TypeScript provides useful utility types:

- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>
- Record<K, T>

## 6. Create Custom Type Guards

Type guards help narrow types safely:

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

## 7. Use Const Assertions

Const assertions prevent type widening:

```typescript
const config = {
  api: "https://api.example.com"
} as const;
```

## 8. Discriminated Unions

Use discriminated unions for complex state management:

```typescript
type Result = 
  | { success: true; data: string }
  | { success: false; error: Error };
```

## 9. Generic Constraints

Add constraints to generics for safer code:

```typescript
function getValue<T extends { id: string }>(obj: T) {
  return obj.id;
}
```

## 10. Use Non-Null Assertion Sparingly

Only use the non-null assertion operator (!) when you're absolutely certain a value isn't null.

## Conclusion

These tips will help you write more robust, maintainable TypeScript code. Keep learning and happy coding!
