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
    id: "devops-notes",
    title: "🚀 DevOps Learning Resources",
    excerpt: "A curated list of DevOps resources covering foundations, Docker, GitHub Actions, and modern CI/CD practices.",
    date: "2025-10-01",
    readTime: "2 min read",
    tags: ["DevOps", "CI/CD", "Docker", "GitHub Actions", "Cloud", "Software Engineering"],
    contentPath: "/study-note/posts/devops-notes.md",
    category: "note"
  },
  {
    id: "ai-notes",
    title: "🤖 AI Learning Resources",
    excerpt: "A collection of practical AI learning links for development, design, automation, and productivity tools.",
    date: "2025-10-01",
    readTime: "5 min read",
    tags: ["AI", "Generative AI", "Copilot", "UX Design", "Automation", "Productivity"],
    contentPath: "/study-note/posts/ai-notes.md",
    category: "note"
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
