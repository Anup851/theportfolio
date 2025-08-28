import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", icon: "🌐", description: "Semantic markup" },
    { name: "CSS3", icon: "🎨", description: "Modern styling" },
    { name: "JavaScript", icon: "⚡", description: "ES6+ features" },
    { name: "React.js", icon: "⚛️", description: "Component-based" },
    { name: "Node.js", icon: "🚀", description: "Server-side JS" },
    { name: "Tailwind CSS", icon: "💨", description: "Utility-first CSS" },
    { name: "AI Development", icon: "🤖", description: "Chatbots & ML" },
    { name: "API Integration", icon: "🔗", description: "RESTful APIs" },
  ];

  return (
    <section id="skills" className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="text-center skill-badge hover:scale-105 transition-transform duration-200"
              data-testid={`skill-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4" data-testid={`skill-icon-${index}`}>
                  {skill.icon}
                </div>
                <h3 
                  className="font-semibold text-foreground mb-2"
                  data-testid={`skill-name-${index}`}
                >
                  {skill.name}
                </h3>
                <p 
                  className="text-muted-foreground text-sm"
                  data-testid={`skill-description-${index}`}
                >
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
