import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Coins, 
  Fuel, 
  TrendingUp, 
  Clock, 
  Shield, 
  Target,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Coins,
      title: "Gold Trading Signals",
      description: "Premium XAU/USD signals with precise entry, stop loss, and take profit levels",
      features: ["Real-time alerts", "Risk management", "Daily market analysis"],
      accuracy: "96%",
      color: "gold",
      gradient: "from-gold/20 to-gold/5"
    },
    {
      icon: Fuel,
      title: "Oil Trading Signals", 
      description: "Crude oil and Brent oil signals based on supply-demand analysis",
      features: ["News-based alerts", "Technical analysis", "Economic calendar"],
      accuracy: "94%",
      color: "neutral",
      gradient: "from-neutral/20 to-neutral/5"
    },
    {
      icon: TrendingUp,
      title: "Forex Currency Pairs",
      description: "Major, minor, and exotic currency pairs with comprehensive market coverage",
      features: ["28 major pairs", "Economic events", "Multi-timeframe analysis"],
      accuracy: "95%",
      color: "profit",
      gradient: "from-profit/20 to-profit/5"
    }
  ];

  const features = [
    { icon: Clock, title: "24/7 Signals", description: "Round-the-clock market monitoring" },
    { icon: Shield, title: "Risk Management", description: "Built-in stop loss and position sizing" },
    { icon: Target, title: "High Accuracy", description: "Consistently profitable signal performance" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 border-gold/20 text-gold">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional Trading <span className="text-gold">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get access to our premium trading signals across multiple markets with proven strategies and consistent results
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="relative group bg-gradient-card border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} border border-${service.color}/10`}>
                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-profit font-semibold">
                    {service.accuracy} Accuracy
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-display font-semibold group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-profit flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="premium" className="w-full group">
                  Get Started
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-xl bg-card/30 border border-border/30 hover:border-gold/20 transition-all duration-300 hover:bg-card/50 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-card border border-gold/10 mb-4">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;