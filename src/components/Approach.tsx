import { CheckCircle, Users2, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Approach = () => {
  const steps = [
    {
      icon: Users2,
      title: "Initial Assessment",
      description: "We start with a comprehensive assessment to understand your current situation, goals, and challenges.",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Customized Strategy",
      description: "Based on your assessment, we create a personalized development plan tailored to your specific needs.",
      color: "bg-accent-gold/10 text-accent-gold"
    },
    {
      icon: Target,
      title: "Implementation",
      description: "Together, we implement your development plan through regular 1:1 sessions and practical exercises.",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Continuous Growth",
      description: "We monitor your progress and adjust strategies to ensure continuous improvement and goal achievement.",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in a structured, personalized approach that focuses on your unique journey 
            and ensures sustainable growth and development.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="card-floating group relative">
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-4 ${step.color}`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent-gold/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of professionals who have already transformed their careers and personal lives 
              through our proven coaching methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-4 border border-border rounded-full font-semibold hover:bg-secondary transition-colors">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;