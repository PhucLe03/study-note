export interface FrontmatterData {
  title: string;
  tabtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface ParsedContent {
  data: FrontmatterData;
  content: string;
}

export function parseFrontmatter(markdown: string): ParsedContent {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error("No frontmatter found in markdown file");
  }

  const [, frontmatterStr, content] = match;
  const data: Partial<FrontmatterData> = {};

  // Parse each line of frontmatter
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();

    if (key === 'tags') {
      // Parse comma-separated tags
      data.tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    } else {
      if (key === 'title') {
        data.tabtitle = value;
        data.title = value;
      }
      else if (key === 'title-icon') {
        data.title = `${value} ${data.title}`;
      }
      else {
        data[key as keyof FrontmatterData] = value as any;
      }
    }
  });

  return {
    data: data as FrontmatterData,
    content: content.trim()
  };
}
