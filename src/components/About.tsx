import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Star,
  MessageSquare,
  PhoneCall,
  Shield
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Active Traders", color: "text-profit" },
    { icon: Award, value: "5+", label: "Years Experience", color: "text-gold" },
    { icon: Globe, value: "50+", label: "Countries", color: "text-primary" },
    { icon: TrendingUp, value: "95%+", label: "Success Rate", color: "text-profit" }
  ];

  const achievements = [
    "Certified Financial Market Analyst",
    "Featured in Top Trading Publications", 
    "Speaking at International Trading Conferences",
    "Mentored 1000+ Successful Traders"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-card/10 via-background to-card/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <Badge variant="outline" className="mb-4 border-gold/20 text-gold">
                About Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Your Trusted <span className="text-gold">Trading Partner</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in the financial markets, I've helped thousands of traders 
                  achieve consistent profitability through precise signal delivery and proven strategies.
                </p>
                <p>
                  My expertise spans across Gold (XAU/USD), Oil (WTI/Brent), and major Forex pairs, 
                  with a focus on combining technical analysis with fundamental market drivers.
                </p>
                <p>
                  Every signal comes with detailed risk management parameters, ensuring you can trade 
                  with confidence while protecting your capital.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg">
                <MessageSquare className="mr-2 w-5 h-5" />
                Join Our Community
              </Button>
              <Button variant="premium" size="lg">
                <PhoneCall className="mr-2 w-5 h-5" />
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Cards */}
          <div className="space-y-8 animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="bg-gradient-card border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 mb-3">
                      <stat.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Card */}
            <Card className="bg-gradient-card border-border/50 hover:border-gold/20 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                  "The signals are incredibly accurate and the risk management advice has transformed my trading. 
                  I've been consistently profitable for 8 months now."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mike K.</div>
                    <div className="text-sm text-muted-foreground">Professional Trader</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Verified Signals
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Expert Trader
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                5000+ Members
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;