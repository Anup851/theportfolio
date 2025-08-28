import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "5+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed text-lg mb-4">
                  I'm Anup Singh, a passionate frontend developer who loves creating interactive web applications 
                  and AI chatbots. Currently pursuing my BCA degree (2024-2027), I specialize in React, JavaScript, 
                  and modern web technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to deliver clean, efficient, and user-friendly solutions that make a real difference. 
                  I'm particularly excited about the intersection of web development and artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div 
                    className="text-3xl font-bold text-primary mb-2"
                    data-testid={`stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <p 
                    className="text-muted-foreground"
                    data-testid={`stat-label-${index}`}
                  >
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
