import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/posts";
import { Calendar, Clock, BookOpen, StickyNote } from "lucide-react";

type CategoryFilter = "all" | "blog" | "note";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory === "all") return true;
    return post.category === selectedCategory;
  });

  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Thoughts & Notes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Exploring ideas about development, design, and everything in between.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="transition-all"
            >
              All Posts
            </Button>
            <Button
              variant={selectedCategory === "blog" ? "default" : "outline"}
              onClick={() => setSelectedCategory("blog")}
              className="transition-all"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Blog Posts
            </Button>
            <Button
              variant={selectedCategory === "note" ? "default" : "outline"}
              onClick={() => setSelectedCategory("note")}
              className="transition-all"
            >
              <StickyNote className="w-4 h-4 mr-2" />
              Quick Notes
            </Button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="max-w-5xl mx-auto grid gap-8 md:gap-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No posts found in this category.
            </div>
          ) : (
            filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
