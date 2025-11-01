import { Database, Server, BarChart3, Code2, GitBranch, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js", "Python", "Java", "REST APIs", "GraphQL"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"]
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    items: ["Python", "Pandas", "SQL", "Tableau", "Power BI"]
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["TypeScript", "Python", "Java", "Go", "Rust"]
  },
  {
    icon: GitBranch,
    title: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux"]
  },
  {
    icon: Terminal,
    title: "Tools",
    items: ["Git", "VS Code", "Postman", "Jupyter", "bash"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Technical</span> Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.title} delay={1000 + index * 100}>
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span 
                          key={item}
                          className="text-sm px-3 py-1 bg-secondary rounded-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
