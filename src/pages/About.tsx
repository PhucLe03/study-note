import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Server, Database } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Me - Study notes";
  }, []);

  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineer passionate about building intelligent systems
            </p>
          </div>

          {/* Main Content */}
          <Card className="border-border/50">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Hi there! 👋</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a software engineer with a deep passion for creating innovative solutions 
                  at the intersection of technology and intelligence. My work focuses on building 
                  robust, scalable systems that solve real-world problems.
                </p>
              </div>

              {/* Interests Grid */}
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">AI & Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring the frontiers of artificial intelligence and building intelligent systems
                  </p>
                </div>

                <div className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Server className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">DevOps</h3>
                  <p className="text-sm text-muted-foreground">
                    Automating workflows and building efficient deployment pipelines
                  </p>
                </div>

                <div className="space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Data (not really)</h3>
                  <p className="text-sm text-muted-foreground">
                    Dabbling in data engineering when the mood strikes 😄
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="text-xl font-semibold">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Cloud Platforms</Badge>
                </div>
              </div>

              {/* Closing */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or sharing my learnings through this blog.
                  Feel free to reach out if you'd like to connect!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
