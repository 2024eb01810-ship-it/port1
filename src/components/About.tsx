import { Card } from "@/components/ui/card";
import { Code, Database, TrendingUp, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Building scalable systems and deriving insights from data
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={1000}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Backend Developer</span> and{" "}
                <span className="text-accent font-semibold">Data Analyst</span> with expertise in building
                robust, scalable systems and transforming complex data into actionable business insights.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has equipped me with strong problem-solving skills and a deep understanding
                of system architecture, database optimization, and data-driven decision making. I thrive on
                challenges that require both technical expertise and analytical thinking.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating efficient backend solutions using <span className="text-primary">Node.js</span>,{" "}
                <span className="text-primary">Python</span>, and <span className="text-primary">Go</span>, while
                leveraging data analysis tools to uncover patterns and drive strategic outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable, and efficient code following best practices
                </p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all">
                <Database className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Making informed decisions backed by comprehensive data analysis
                </p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing systems for maximum efficiency and reliability
                </p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">
                  Tackling complex challenges with innovative solutions
                </p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
