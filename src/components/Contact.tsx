import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "greeklearners.edu@gmail.com",
      description: "Send us an email anytime"
    },
    // {
    //   icon: Phone,
    //   title: "Call Us",
    //   details: "+30 123 456 7890",
    //   description: "Mon-Fri from 9am to 6pm"
    // },
    {
      icon: MapPin,
      title: "Location",
      details: "Noida, Uttar Pradesh",
      description: "Head Branch Location"
    },
    // {
    //   icon: Clock,
    //   title: "Working Hours",
    //   details: "9:00 AM - 6:00 PM",
    //   description: "Monday to Friday"
    // }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your transformation journey? Contact us today for a free consultation 
            and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you unlock your potential. Reach out to us through any of the 
                following methods, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid sm:auto-cols-max sm:grid-flow-col gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="card-floating">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1 break-words">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-2">Free Consultation Available</h4>
              <p className="mb-4 opacity-90">
                Book a 30-minute free consultation to discuss your goals and see how we can help.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                Book Free Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-floating">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+30 123 456 7890" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select className="w-full p-3 border border-border rounded-lg bg-background">
                    <option>Communication Skills</option>
                    <option>Career Guidance</option>
                    <option>Professional Networking</option>
                    <option>1:1 Personal Coaching</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your goals and how we can help you..."
                    rows={4}
                  />
                </div>
                
                <Button className="btn-hero w-full group">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;