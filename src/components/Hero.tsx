import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse-gold" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-profit rounded-full animate-pulse-gold" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-gold rounded-full animate-pulse-gold" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-card/50 border border-gold/20 rounded-full px-4 py-2 text-sm text-gold font-medium backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Professional Trading Signals</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              MRK <span className="text-gold">Traders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Get profitable trading signals for <span className="text-gold font-medium">Gold</span>, 
              <span className="text-profit font-medium"> Oil</span>, and 
              <span className="text-primary font-medium"> Forex</span> markets
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">95%+</div>
              <div className="text-sm text-muted-foreground">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-profit">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Traders</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="gold" size="hero" className="group">
              Get Premium Signals
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="premium" size="hero" asChild>
              <Link to="/free-signals">
                <DollarSign className="mr-2 w-5 h-5" />
                View Free Signals
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>Trusted by professional traders worldwide • No hidden fees • Instant delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;