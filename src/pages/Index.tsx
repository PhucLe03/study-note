import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Study notes - Ideas, Stories & Code";
  })
  return (
    <Layout>
      <div className="container">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Welcome to my digital garden</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Ideas, Stories
              </span>
              <br />
              <span className="text-foreground">& Code</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of design, development, and creativity. 
              Join me on this journey of continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/blog">
                <Button size="lg" className="text-lg px-8 group">
                  Read my study notes
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 group hover:border-primary hover:text-primary">
                  <BookOpen className="w-5 h-5 mr-2" />
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              What I Write About
            </h2>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-lg">Development</h3>
                <p className="text-muted-foreground text-sm">
                  Modern web technologies, best practices, and code architecture
                </p>
              </div>
              
              <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-accent/5 to-transparent border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg">Design</h3>
                <p className="text-muted-foreground text-sm">
                  UI/UX principles, design systems, and visual creativity
                </p>
              </div>
              
              <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold text-lg">Ideas</h3>
                <p className="text-muted-foreground text-sm">
                  Thoughts on technology, productivity, and innovation
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
