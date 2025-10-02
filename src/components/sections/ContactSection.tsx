import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ContactSectionProps {
  data: {
    email: string;
    phone: string;
    location: string;
    links: {
      github?: string;
      linkedin?: string;
      website?: string;
      kakao?: string;
    };
  };
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label}이(가) 클립보드에 복사되었습니다!`);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
            <p className="text-xl text-muted-foreground">
              언제든지 연락 주세요!
            </p>
          </div>

          <Card className="glass-effect p-8 md:p-12 max-w-3xl mx-auto animate-fade-in-up">
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-sm text-muted-foreground">{data.email}</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-sm text-muted-foreground">{data.phone}</div>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-sm text-muted-foreground">{data.location}</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">빠른 연락</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button onClick={handleEmailClick} className="gradient-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    이메일 보내기
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(data.email, "이메일")}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    이메일 복사
                  </Button>

                  {data.links.kakao && (
                    <Button
                      variant="outline"
                      asChild
                    >
                      <a href={data.links.kakao} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        카카오톡
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-semibold text-center">소셜 미디어</h3>
                <div className="flex gap-3 justify-center">
                  {data.links.github && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={data.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  
                  {data.links.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  
                  {data.links.website && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={data.links.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground animate-fade-in">
            <p>© 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
