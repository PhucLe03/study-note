import { parseFrontmatter, type FrontmatterData } from "@/utils/frontmatter";

export interface BlogPostConfig {
  id: string;
  contentPath: string;
  category: "blog" | "note";
}

export interface BlogPost extends FrontmatterData {
  id: string;
  contentPath: string;
  category: "blog" | "note";
}

export const blogPostConfigs: BlogPostConfig[] = [
  {
    id: "devops-notes",
    contentPath: "posts/devops-notes.md",
    category: "note"
  },
  {
    id: "ai-notes",
    contentPath: "posts/ai-notes.md",
    category: "note"
  }
];

export async function fetchPost(config: BlogPostConfig): Promise<BlogPost> {
  const response = await fetch(config.contentPath);
  const markdown = await response.text();
  const { data } = parseFrontmatter(markdown);
  
  return {
    id: config.id,
    contentPath: config.contentPath,
    category: config.category,
    ...data
  };
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    blogPostConfigs.map(config => fetchPost(config))
  );
  return posts;
}

export function getPostConfigById(id: string): BlogPostConfig | undefined {
  return blogPostConfigs.find(config => config.id === id);
}
