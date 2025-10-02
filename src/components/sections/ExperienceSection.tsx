import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  data: Experience[];
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-muted-foreground">
              나의 커리어 여정
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {data.map((exp, index) => (
              <Card
                key={exp.id}
                className="glass-effect p-6 md:p-8 hover:scale-[1.02] transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                        <span className="text-lg text-primary font-semibold">
                          {exp.company}
                        </span>
                        <span className="hidden md:inline text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">주요 성과</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
