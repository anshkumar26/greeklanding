import { MessageCircle, Users, Briefcase, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import networkingImage from '@/assets/networking.jpg';
import careerImage from '@/assets/career-guidance.jpg';
import communicationImage from '@/assets/communication.jpg';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Communication Excellence",
      description: "Develop powerful communication skills that open doors and build meaningful relationships.",
      image: communicationImage,
      features: ["Public Speaking", "Interpersonal Skills", "Professional Presence"]
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Navigate your career path with expert guidance and strategic planning for long-term success.",
      image: careerImage,
      features: ["Career Planning", "Interview Preparation", "Professional Development"]
    },
    {
      icon: Users,
      title: "Professional Networking",
      description: "Build a powerful network of professional connections that accelerate your career growth.",
      image: networkingImage,
      features: ["Network Building", "Relationship Management", "Industry Connections"]
    },
    {
      icon: Target,
      title: "1:1 Personal Coaching",
      description: "Personalized coaching sessions tailored to your unique challenges and growth objectives.",
      image: communicationImage,
      features: ["Goal Setting", "Action Planning", "Progress Tracking"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive personal and professional development services designed to help you 
            achieve your goals and unlock your full potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="card-floating group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-0">
                <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;