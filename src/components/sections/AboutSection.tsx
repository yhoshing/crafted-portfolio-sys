import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

interface AboutSectionProps {
  data: {
    profile: {
      name: string;
      tagline: string;
      bio: string;
      kpis: Array<{
        label: string;
        value: string;
        unit: string;
      }>;
    };
    contact: {
      email: string;
      phone: string;
      location: string;
    };
  };
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.profile.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {data.profile.kpis.map((kpi, index) => (
              <Card
                key={index}
                className="glass-effect p-8 text-center hover:scale-105 transition-all"
              >
                <div className="text-5xl font-bold text-gradient mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {kpi.label} {kpi.unit}
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-effect p-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {data.profile.bio}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">{data.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">{data.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">{data.contact.location}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
