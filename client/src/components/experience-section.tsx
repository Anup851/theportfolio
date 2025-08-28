import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const timeline = [
    {
      title: "BCA Student",
      organization: "Computer Applications",
      period: "2024 - 2027",
      description: "Currently pursuing Bachelor of Computer Applications with focus on modern web technologies, programming fundamentals, and software development practices.",
      icon: GraduationCap,
    },
    {
      title: "Freelance Developer",
      organization: "Frontend Development",
      period: "2023 - Present",
      description: "Developing custom web applications, AI chatbots, and responsive websites for various clients. Specialized in React.js, modern CSS frameworks, and API integrations.",
      icon: Code,
    },
    {
      title: "Personal Projects",
      organization: "Full-Stack Development",
      period: "2022 - Present",
      description: "Built multiple web applications including AI chatbots, e-commerce platforms, and portfolio websites. Focus on user experience, performance optimization, and modern development practices.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="relative flex items-start mb-8 lg:mb-12"
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <Card className="ml-8 card-hover flex-1">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 
                        className="text-xl font-bold text-foreground"
                        data-testid={`timeline-title-${index}`}
                      >
                        {item.title}
                      </h3>
                      <Badge 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        data-testid={`timeline-period-${index}`}
                      >
                        {item.period}
                      </Badge>
                    </div>
                    <p 
                      className="text-muted-foreground mb-3"
                      data-testid={`timeline-organization-${index}`}
                    >
                      {item.organization}
                    </p>
                    <p 
                      className="text-foreground"
                      data-testid={`timeline-description-${index}`}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
