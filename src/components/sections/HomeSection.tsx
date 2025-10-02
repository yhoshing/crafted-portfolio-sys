import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10"></div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold">
              안녕하세요, <span className="text-gradient">{data.name}</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {data.tagline}
            </p>
          </div>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="rounded-full gradient-primary group mt-8"
          >
            더 알아보기
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
