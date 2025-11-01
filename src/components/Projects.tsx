import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Real-Time Analytics Dashboard",
    description: "Built a high-performance analytics platform processing millions of events daily. Features real-time data visualization and custom reporting.",
    tags: ["Python", "PostgreSQL", "Redis", "React"],
    gradient: "from-primary/20 to-accent/20",
    github: "https://github.com/ndp-coder",
    demo: "#"
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented scalable microservices backend with API gateway, service mesh, and distributed tracing.",
    tags: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    gradient: "from-accent/20 to-primary/20",
    github: "https://github.com/ndp-coder",
    demo: "#"
  },
  {
    title: "Data Pipeline Automation",
    description: "Created ETL pipelines for data extraction, transformation, and loading. Automated workflows reduced processing time by 70%.",
    tags: ["Python", "Airflow", "Spark", "SQL"],
    gradient: "from-primary/20 to-secondary/40",
    github: "https://github.com/ndp-coder",
    demo: "#"
  },
  {
    title: "Machine Learning API",
    description: "Developed REST API serving ML models for predictive analytics. Handles 10k+ requests per minute with 99.9% uptime.",
    tags: ["Python", "FastAPI", "TensorFlow", "AWS"],
    gradient: "from-secondary/40 to-accent/20",
    github: "https://github.com/ndp-coder",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={1000 + index * 100}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-3 transition-all`} />
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent/50 hover:bg-accent/10"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
