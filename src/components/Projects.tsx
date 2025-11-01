import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2, Clock, ChevronDown } from "lucide-react";
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

const upcomingProjects = [
  {
    title: "AI-Powered Code Review System",
    description: "Building an intelligent code review assistant using GPT models to provide automated code quality checks and suggestions.",
    tags: ["Python", "OpenAI", "NLP", "FastAPI"],
    gradient: "from-primary/20 to-accent/20",
    status: "In Planning"
  },
  {
    title: "Real-Time Collaboration Platform",
    description: "Developing a WebSocket-based platform for real-time document collaboration with conflict resolution.",
    tags: ["Node.js", "WebSocket", "MongoDB", "React"],
    gradient: "from-accent/20 to-primary/20",
    status: "Research Phase"
  },
  {
    title: "Blockchain Analytics Tool",
    description: "Creating a comprehensive analytics dashboard for tracking and analyzing blockchain transactions and smart contracts.",
    tags: ["Python", "Web3", "PostgreSQL", "D3.js"],
    gradient: "from-primary/20 to-secondary/40",
    status: "Starting Soon"
  }
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState(false);
  const [expandedUpcoming, setExpandedUpcoming] = useState(false);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work and upcoming initiatives
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal delay={1100}>
            <h3 className="text-2xl font-bold mb-8 text-center">Completed Projects</h3>
          </ScrollReveal>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <ScrollReveal delay={1100}>
                <Card
                  onClick={() => setExpandedProjects(!expandedProjects)}
                  className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <FolderGit2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Click on me to see Completed Projects
                    </h4>
                    <p className="text-muted-foreground">
                      Expand to view all completed projects
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-primary transition-transform duration-300 mt-2 ${
                        expandedProjects ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedProjects ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div
                      key={project.title}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedProjects
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedProjects ? `${index * 150}ms` : "0ms"
                      }}
                    >
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ScrollReveal delay={1300}>
            <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Projects</h3>
          </ScrollReveal>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <ScrollReveal delay={1300}>
                <Card
                  onClick={() => setExpandedUpcoming(!expandedUpcoming)}
                  className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/10 group-hover:bg-accent/20 rounded-lg transition-colors">
                      <Clock className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      Click on me to see Upcoming Projects
                    </h4>
                    <p className="text-muted-foreground">
                      Expand to view projects in development
                    </p>
                    <ChevronDown
                      className={`h-6 w-6 text-accent transition-transform duration-300 mt-2 ${
                        expandedUpcoming ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Card>
              </ScrollReveal>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  expandedUpcoming ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingProjects.map((project, index) => (
                    <div
                      key={project.title}
                      className={`transition-all duration-500 ease-out transform ${
                        expandedUpcoming
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: expandedUpcoming ? `${index * 150}ms` : "0ms"
                      }}
                    >
                      <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full flex flex-col">
                        <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-3 transition-all`} />

                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                            {project.status}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
