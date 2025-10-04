export interface BlogPostConfig {
  id: string;
  contentPath: string;
  category: "blog" | "note";
}

export const blogPostConfigs: BlogPostConfig[] = [
  {
    id: "devops-notes",
    contentPath: "/study-note/posts/devops-notes.md",
    category: "note"
  },
  {
    id: "ai-notes",
    contentPath: "/study-note/posts/ai-notes.md",
    category: "note"
  }
];