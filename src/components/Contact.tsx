import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Zap
} from "lucide-react";

const Contact = () => {
  const plans = [
    {
      name: "Free Signals",
      price: "Free",
      description: "Get started with basic signals",
      features: [
        "2-3 signals per week",
        "Basic market analysis", 
        "Email delivery",
        "Community access"
      ],
      cta: "Get Free Signals",
      variant: "premium" as const,
      popular: false
    },
    {
      name: "Premium Signals",
      price: "$99/month",
      description: "Complete trading solution",
      features: [
        "5-7 daily signals",
        "Real-time notifications",
        "Advanced risk management",
        "VIP Telegram group",
        "24/7 support",
        "Video analysis"
      ],
      cta: "Start Premium",
      variant: "gold" as const,
      popular: true
    },
    {
      name: "VIP Mentorship",
      price: "$299/month",
      description: "One-on-one trading mentorship",
      features: [
        "Everything in Premium",
        "Weekly 1-on-1 calls",
        "Custom strategy development",
        "Portfolio review",
        "Direct message access"
      ],
      cta: "Book Mentorship",
      variant: "signal" as const,
      popular: false
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Telegram",
      description: "Join our VIP group for instant signals",
      action: "Join Now",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get detailed market analysis via email",
      action: "Subscribe",
      color: "text-gold"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Direct support and quick questions",
      action: "Message Us",
      color: "text-profit"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Start Trading <span className="text-gold">Profitably Today</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the plan that fits your trading goals and join thousands of successful traders
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group bg-gradient-card border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-hover animate-fade-in ${
                plan.popular ? 'ring-2 ring-gold/20 border-gold/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-gold text-primary-foreground font-semibold px-6 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-display font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-gold mb-2">
                  {plan.price}
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-profit flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full group"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="group bg-gradient-card border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-card cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 mb-4 group-hover:shadow-gold transition-all duration-300">
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <Button variant="premium" className="group">
                  {method.action}
                  <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-card border border-border/30 rounded-2xl p-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of successful traders who rely on our signals for consistent profits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="gold" size="hero" className="group">
                <Clock className="mr-2 w-5 h-5" />
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="text-sm text-muted-foreground">
                No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;