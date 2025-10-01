export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  contentPath: string;
  category: "blog" | "note";
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    excerpt: "A comprehensive guide to starting your React journey with the latest best practices and modern tooling.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    contentPath: "/posts/getting-started-with-react.md",
    category: "blog"
  },
  {
    id: "design-systems-guide",
    title: "Building Beautiful Design Systems",
    excerpt: "Learn how to create consistent, scalable design systems that developers and designers love.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["Design", "UI/UX", "Frontend"],
    contentPath: "/posts/design-systems-guide.md",
    category: "blog"
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that will make your code more robust and maintainable.",
    date: "2025-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    contentPath: "/posts/typescript-tips.md",
    category: "blog"
  },
  {
    id: "learning-tailwind",
    title: "Learning Tailwind CSS",
    excerpt: "Quick notes on mastering utility-first CSS with Tailwind.",
    date: "2025-01-20",
    readTime: "3 min read",
    tags: ["CSS", "Tailwind", "Frontend"],
    contentPath: "/posts/learning-tailwind.md",
    category: "note"
  },
  {
    id: "async-patterns",
    title: "Async Patterns in JavaScript",
    excerpt: "Personal notes on handling asynchronous operations effectively.",
    date: "2025-01-18",
    readTime: "4 min read",
    tags: ["JavaScript", "Async", "Programming"],
    contentPath: "/posts/async-patterns.md",
    category: "note"
  },
  {
    id: "git-workflow",
    title: "My Git Workflow",
    excerpt: "Notes on my daily Git workflow and useful commands.",
    date: "2025-01-12",
    readTime: "5 min read",
    tags: ["Git", "Workflow", "Tools"],
    contentPath: "/posts/git-workflow.md",
    category: "note"
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
