import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  contribution: number;
  details: string;
  results: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

interface ProjectsSectionProps {
  data: Project[];
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <p className="text-xl text-muted-foreground">
              주요 프로젝트와 성과
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-0">
            {data.map((project, index) => (
              <Card
                key={project.id}
                className="glass-effect overflow-hidden cursor-pointer hover-lift transition-all animate-fade-in-up group relative"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start sm:items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-gradient transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full flex-shrink-0">
                      {project.contribution}%
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  {/* 프로젝트 카드에 미묘한 진행률 표시 */}
                  <div className="w-full bg-muted/30 rounded-full h-1 mt-4">
                    <div 
                      className="bg-gradient-primary h-1 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${project.contribution}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">기여도</span>
                    <span className="text-sm text-muted-foreground">
                      {selectedProject.contribution}%
                    </span>
                  </div>
                  <Progress value={selectedProject.contribution} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">상세 설명</h4>
                  <p className="text-muted-foreground">{selectedProject.details}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">주요 성과</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  {selectedProject.links.github && (
                    <Button asChild variant="outline">
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.links.demo && (
                    <Button asChild className="gradient-primary">
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
