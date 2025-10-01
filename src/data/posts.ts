export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    excerpt: "A comprehensive guide to starting your React journey with the latest best practices and modern tooling.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    content: `# Getting Started with React in 2025

React has evolved significantly over the years, and 2025 brings even more exciting features and best practices to the table.

## Why React?

React remains one of the most popular JavaScript libraries for building user interfaces. Here's why:

- **Component-Based Architecture**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates and rendering
- **Rich Ecosystem**: Thousands of libraries and tools
- **Strong Community**: Extensive resources and support

## Setting Up Your Environment

Before diving into React, you'll need to set up your development environment properly.

### Prerequisites

1. Node.js (v18 or higher)
2. A code editor (VS Code recommended)
3. Basic JavaScript knowledge

### Creating Your First App

Use Vite for the fastest development experience:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Core Concepts

### Components

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

### State and Props

- **Props**: Pass data from parent to child components
- **State**: Manage component-specific data that changes over time

### Hooks

Modern React uses hooks for state management and side effects:

- useState
- useEffect
- useContext
- Custom hooks

## Best Practices

1. Keep components small and focused
2. Use TypeScript for better type safety
3. Follow the single responsibility principle
4. Write meaningful component names

## Conclusion

React in 2025 is more powerful and developer-friendly than ever. Start building, keep learning, and enjoy the journey!`
  },
  {
    id: "design-systems-guide",
    title: "Building Beautiful Design Systems",
    excerpt: "Learn how to create consistent, scalable design systems that developers and designers love.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["Design", "UI/UX", "Frontend"],
    content: `# Building Beautiful Design Systems

A well-crafted design system is the foundation of any great product. It ensures consistency, speeds up development, and creates a cohesive user experience.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.

## Key Components

### Color Palette

Your color palette should include:

- Primary colors
- Secondary colors
- Neutral colors
- Semantic colors (success, error, warning)

### Typography

Define your type scale carefully:

1. Heading levels (H1-H6)
2. Body text sizes
3. Font weights
4. Line heights

### Spacing

Use a consistent spacing scale:

- 4px base unit
- 8px, 16px, 24px, 32px, 48px, 64px

### Components

Build reusable components:

- Buttons
- Forms
- Cards
- Navigation
- Modals

## Implementation Tips

### Use Design Tokens

Design tokens are the visual design atoms of the design system. They store values such as colors, typography, and spacing.

### Document Everything

Good documentation is crucial. Include:

- Component usage examples
- Accessibility guidelines
- Do's and don'ts
- Code snippets

### Make It Accessible

Accessibility should be built into your design system from the start:

- Proper color contrast
- Keyboard navigation
- Screen reader support
- Focus indicators

## Tools and Technologies

- **Figma**: For design work
- **Storybook**: For component documentation
- **Tailwind CSS**: For utility-first styling
- **TypeScript**: For type safety

## Conclusion

Building a design system takes time and effort, but the investment pays off in consistency, efficiency, and user satisfaction.`
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that will make your code more robust and maintainable.",
    date: "2025-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    content: `# 10 TypeScript Tips for Better Code

TypeScript has become the de facto standard for large-scale JavaScript applications. Here are 10 tips to help you write better TypeScript code.

## 1. Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 2. Leverage Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good
const name = "John";

// Unnecessary
const name: string = "John";
\`\`\`

## 3. Use Union Types

Union types are powerful for handling multiple type possibilities:

\`\`\`typescript
type Status = "pending" | "success" | "error";
\`\`\`

## 4. Avoid Any

The \`any\` type defeats the purpose of TypeScript. Use \`unknown\` instead when the type is truly unknown.

## 5. Use Utility Types

TypeScript provides useful utility types:

- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>
- Record<K, T>

## 6. Create Custom Type Guards

Type guards help narrow types safely:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
\`\`\`

## 7. Use Const Assertions

Const assertions prevent type widening:

\`\`\`typescript
const config = {
  api: "https://api.example.com"
} as const;
\`\`\`

## 8. Discriminated Unions

Use discriminated unions for complex state management:

\`\`\`typescript
type Result = 
  | { success: true; data: string }
  | { success: false; error: Error };
\`\`\`

## 9. Generic Constraints

Add constraints to generics for safer code:

\`\`\`typescript
function getValue<T extends { id: string }>(obj: T) {
  return obj.id;
}
\`\`\`

## 10. Use Non-Null Assertion Sparingly

Only use the non-null assertion operator (!) when you're absolutely certain a value isn't null.

## Conclusion

These tips will help you write more robust, maintainable TypeScript code. Keep learning and happy coding!`
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
