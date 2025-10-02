import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
            {data.map((category, index) => (
              <Card
                key={category.category}
                className="glass-effect p-4 sm:p-6 md:p-8 animate-fade-in-up hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient-animated group-hover:scale-105 transition-transform">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="space-y-3 p-3 rounded-lg hover:bg-muted/20 transition-all cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium transition-all ${
                          hoveredSkill === skill.name ? 'text-primary scale-105' : ''
                        }`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                          {skill.level >= 90 && <span className="text-yellow-500">⭐</span>}
                          {skill.level >= 80 && skill.level < 90 && <span className="text-blue-500">💎</span>}
                          {skill.level >= 70 && skill.level < 80 && <span className="text-green-500">🚀</span>}
                        </div>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={hoveredSkill === skill.name ? skill.level : skill.level} 
                          className={`h-3 transition-all duration-500 ${
                            hoveredSkill === skill.name ? 'animate-pulse-glow' : ''
                          }`}
                        />
                        {hoveredSkill === skill.name && (
                          <div className="absolute -top-8 left-0 text-xs text-primary font-medium animate-fade-in">
                            {skill.level >= 90 ? '전문가' : skill.level >= 80 ? '숙련자' : skill.level >= 70 ? '중급자' : '초급자'}
                          </div>
                        )}
                      </div>
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
