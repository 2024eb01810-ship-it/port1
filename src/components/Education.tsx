import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    institution: "BITS Pilani",
    degree: "BSc Computer Science",
    year: "2nd Year",
    icon: GraduationCap,
    description: "Pursuing Bachelor of Science in Computer Science",
    gradient: "from-primary/20 to-accent/20"
  },
  {
    institution: "NxtWave Institute of Advanced Technology",
    degree: "Advanced Tech Skills",
    year: "In Progress",
    icon: BookOpen,
    description: "Learning industry-relevant technology skills and best practices",
    gradient: "from-accent/20 to-primary/20"
  }
];

const certifications = [
  {
    title: "Google Certification 1",
    issuer: "Google",
    icon: Award,
    gradient: "from-primary/20 to-secondary/40"
  },
  {
    title: "Google Certification 2",
    issuer: "Google",
    icon: Award,
    gradient: "from-secondary/40 to-accent/20"
  },
  {
    title: "Google Certification 3",
    issuer: "Google",
    icon: Award,
    gradient: "from-accent/20 to-primary/20"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Academic background and professional certifications
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal delay={1100}>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.institution} delay={1000 + index * 100}>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                  <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${edu.gradient} mb-6 group-hover:h-3 transition-all`} />

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-lg font-semibold mb-1 text-muted-foreground">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-accent font-medium mb-3">
                        {edu.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal delay={1300}>
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.title} delay={1000 + index * 100}>
                <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 group h-full">
                  <div className={`h-2 w-full rounded-t-lg bg-gradient-to-r ${cert.gradient} mb-6 group-hover:h-3 transition-all`} />

                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mb-4">
                      <cert.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
