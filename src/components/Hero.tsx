import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coaching.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your{' '}
                <span className="text-gradient">
                  Potential
                </span>{' '}
                Through Personal Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Transform your career and personal life with expert guidance. We provide 1:1 coaching, 
                career development, and professional networking to help you achieve your goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Coached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional coaching session" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="card-floating rounded-xl p-4 bg-card max-w-xs animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Network Building</div>
                    <div className="text-xs text-muted-foreground">Expand connections</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20">
              <div className="card-floating rounded-xl p-4 bg-card max-w-xs animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-gold/10 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-accent-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Career Growth</div>
                    <div className="text-xs text-muted-foreground">Achieve your goals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-gold/5 rounded-2xl -z-10 transform rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;