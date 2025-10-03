export interface FrontmatterResult {
  data: Record<string, any>;
  content: string;
}

export const parseFrontmatter = (markdown: string): FrontmatterResult => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  // Parse YAML-like frontmatter
  const data: Record<string, any> = {};
  const lines = frontmatterText.split('\n');
  let currentKey = '';
  let currentArray: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) continue;

    // Check if it's an array item
    if (trimmedLine.startsWith('- ')) {
      currentArray.push(trimmedLine.substring(2).trim());
      continue;
    }

    // If we were building an array, save it
    if (currentKey && currentArray.length > 0) {
      data[currentKey] = currentArray;
      currentArray = [];
      currentKey = '';
    }

    // Parse key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      if (value) {
        // Remove quotes if present
        const cleanValue = value.replace(/^["']|["']$/g, '');
        data[key] = cleanValue;
      } else {
        // Key with no value means array follows
        currentKey = key;
        currentArray = [];
      }
    }
  }

  // Handle last array if exists
  if (currentKey && currentArray.length > 0) {
    data[currentKey] = currentArray;
  }

  return { data, content };
};
