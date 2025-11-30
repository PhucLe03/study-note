import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostConfigById, fetchPost, type BlogPost as BlogPostType } from "@/data/posts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseFrontmatter } from "@/utils/frontmatter";
import CodeBlock from "@/components/CodeBlock";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = id ? getPostConfigById(id) : undefined;
    
    if (config) {
      fetchPost(config)
        .then((fetchedPost) => {
          setPost(fetchedPost);
          return fetch(fetchedPost.contentPath);
        })
        .then((response) => response.text())
        .then((text) => {
          const { content: markdownContent } = parseFrontmatter(text);
          setContent(markdownContent);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error loading post:", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (!post) {
    return null;
  }
  else {
    document.title = post.tabtitle;
  }


  return (
    <Layout>
      <article className="container py-8 md:py-12">
        {/* Back button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 -ml-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Post Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              Loading...
            </div>
          ) : (
            <div className="prose prose-lg max-w-none blog-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={CodeBlock}>
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border">
          <Link to="/blog">
            <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
