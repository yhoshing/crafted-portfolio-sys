import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface HomeSectionProps {
  data: {
    name: string;
    tagline: string;
    image: string;
  };
}

export const HomeSection = ({ data }: HomeSectionProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-up">
          <div className="relative">
            <div className="w-48 h-56 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <OptimizedImage
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
                priority={true}
                width={192}
                height={224}
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10"></div>
          </div>

          <div className="space-y-6 max-w-4xl px-4 sm:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              안녕하세요, <span className="text-gradient-animated">{data.name}</span>입니다
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {data.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-xs sm:text-sm font-medium text-primary">React</span>
              </div>
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary/10 rounded-full border border-secondary/20">
                <span className="text-xs sm:text-sm font-medium text-secondary">TypeScript</span>
              </div>
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-xs sm:text-sm font-medium text-accent">Node.js</span>
              </div>
            </div>
          </div>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="rounded-full gradient-primary group mt-8 hover-lift animate-pulse-glow"
          >
            더 알아보기
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform animate-bounce-subtle" />
          </Button>
        </div>
      </div>
    </section>
  );
};
