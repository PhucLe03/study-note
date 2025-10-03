import matter from 'gray-matter';

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

export interface BlogPostConfig {
  id: string;
  contentPath: string;
  category: "blog" | "note";
}

export const blogPostConfigs: BlogPostConfig[] = [
  {
    id: "devops-notes",
    contentPath: "/posts/devops-notes.md",
    category: "note"
  },
  {
    id: "ai-notes",
    contentPath: "/posts/ai-notes.md",
    category: "note"
  }
];

// Parse frontmatter from markdown content
export const parsePostMetadata = (content: string, config: BlogPostConfig): BlogPost => {
  const { data } = matter(content);
  
  return {
    id: config.id,
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    date: data.date || new Date().toISOString().split('T')[0],
    readTime: data.readTime || "5 min read",
    tags: typeof data.tags === 'string' ? data.tags.split(',').map((t: string) => t.trim()) : (data.tags || []),
    contentPath: config.contentPath,
    category: config.category
  };
};

// Fetch and parse a single post
export const fetchPost = async (config: BlogPostConfig): Promise<BlogPost> => {
  const response = await fetch(config.contentPath);
  const content = await response.text();
  return parsePostMetadata(content, config);
};

// Fetch all posts with metadata
export const fetchAllPosts = async (): Promise<BlogPost[]> => {
  const posts = await Promise.all(
    blogPostConfigs.map(config => fetchPost(config))
  );
  return posts;
};

export const getPostById = (id: string): BlogPostConfig | undefined => {
  return blogPostConfigs.find(post => post.id === id);
};
