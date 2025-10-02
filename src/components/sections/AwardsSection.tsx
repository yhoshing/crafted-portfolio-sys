import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, FileText } from "lucide-react";

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: "award" | "certification" | "education";
}

interface AwardsSectionProps {
  data: AwardItem[];
}

const categoryConfig = {
  award: {
    icon: Award,
    label: "수상",
    color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
  },
  certification: {
    icon: FileText,
    label: "자격증",
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-400"
  },
  education: {
    icon: GraduationCap,
    label: "교육",
    color: "bg-green-500/10 text-green-700 dark:text-green-400"
  }
};

export const AwardsSection = ({ data }: AwardsSectionProps) => {
  return (
    <section id="awards" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Awards & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              수상 이력 및 자격증
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.map((item, index) => {
              const config = categoryConfig[item.category];
              const Icon = config.icon;

              return (
                <Card
                  key={item.id}
                  className="glass-effect p-6 hover:scale-105 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${config.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <Badge variant="secondary" className={config.color}>
                          {config.label}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                          <span className="text-sm text-primary font-semibold">
                            {item.organization}
                          </span>
                          <span className="hidden md:inline text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
