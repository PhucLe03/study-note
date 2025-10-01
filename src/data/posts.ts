export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  contentPath: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    excerpt: "A comprehensive guide to starting your React journey with the latest best practices and modern tooling.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    contentPath: "/posts/getting-started-with-react.md"
  },
  {
    id: "design-systems-guide",
    title: "Building Beautiful Design Systems",
    excerpt: "Learn how to create consistent, scalable design systems that developers and designers love.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["Design", "UI/UX", "Frontend"],
    contentPath: "/posts/design-systems-guide.md"
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for Better Code",
    excerpt: "Practical TypeScript tips that will make your code more robust and maintainable.",
    date: "2025-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    contentPath: "/posts/typescript-tips.md"
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
