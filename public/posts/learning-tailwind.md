# Learning Tailwind CSS

Quick notes and tips I've learned while working with Tailwind CSS.

## Why Tailwind?

- Utility-first approach = faster development
- No naming fatigue
- Smaller CSS bundle with PurgeCSS
- Easy to customize via config

## Common Patterns

### Responsive Design

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
```

### Hover States

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors">
  Hover me
</button>
```

### Custom Colors

Define in `tailwind.config.js`:

```js
colors: {
  primary: '#9333ea',
  secondary: '#3b82f6'
}
```

## Design System with Tailwind

Use CSS variables + Tailwind for themeable designs:

```css
:root {
  --primary: 262 83% 58%;
}
```

```js
colors: {
  primary: 'hsl(var(--primary))'
}
```

## Component Extraction

When patterns repeat, extract to components:

```jsx
const Button = ({ children, variant = 'primary' }) => {
  const styles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  };
  
  return (
    <button className={`px-4 py-2 rounded ${styles[variant]}`}>
      {children}
    </button>
  );
};
```

## Resources

- [Official Tailwind Docs](https://tailwindcss.com)
- Tailwind UI for components
- HeadlessUI for accessible components

## Quick Tips

1. Use `@apply` sparingly - defeats the purpose
2. Install Tailwind CSS IntelliSense extension
3. Use arbitrary values when needed: `w-[137px]`
4. Group variants: `hover:(bg-blue-500 text-white)`
