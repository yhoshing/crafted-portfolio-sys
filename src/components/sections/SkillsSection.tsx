import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface SkillsSectionProps {
  data: SkillCategory[];
}

export const SkillsSection = ({ data }: SkillsSectionProps) => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
            <p className="text-xl text-muted-foreground">
              나의 기술 스택과 역량
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {data.map((category, index) => (
              <Card
                key={category.category}
                className="glass-effect p-6 md:p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
