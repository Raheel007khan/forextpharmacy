import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Activity, 
  Target, 
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Brain
} from "lucide-react";

const Strategies = () => {
  const strategies = [
    {
      icon: BarChart3,
      title: "Technical Analysis",
      description: "Advanced chart patterns, support/resistance levels, and momentum indicators",
      methods: ["Fibonacci Retracements", "Bollinger Bands", "RSI Divergence", "Moving Averages"],
      success: "94%",
      timeframe: "All timeframes"
    },
    {
      icon: Activity,
      title: "Price Action Trading",
      description: "Pure price movement analysis without lagging indicators",
      methods: ["Candlestick Patterns", "Market Structure", "Supply & Demand", "Trend Analysis"],
      success: "96%",
      timeframe: "H1 - Daily"
    },
    {
      icon: Target,
      title: "News & Fundamental",
      description: "Economic events, central bank decisions, and market sentiment analysis",
      methods: ["Economic Calendar", "Interest Rate Analysis", "Geopolitical Events", "Market Sentiment"],
      success: "92%",
      timeframe: "Real-time"
    }
  ];

  const principles = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Never risk more than 2% per trade with proper position sizing"
    },
    {
      icon: Clock,
      title: "Patience & Discipline",
      description: "Wait for high-probability setups and stick to the trading plan"
    },
    {
      icon: Brain,
      title: "Psychology Control",
      description: "Manage emotions and maintain consistent trading psychology"
    },
    {
      icon: Zap,
      title: "Quick Execution",
      description: "Fast signal delivery and precise entry/exit timing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-card/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 border-profit/20 text-profit">
            Trading Strategies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Proven <span className="text-profit">Market Strategies</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our signals are based on time-tested strategies with consistent performance across different market conditions
          </p>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <Card 
              key={strategy.title}
              className="relative group bg-gradient-card border-border/50 hover:border-profit/20 transition-all duration-300 hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-profit/10 to-profit/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-profit/20 to-profit/5 border border-profit/10">
                    <strategy.icon className="w-6 h-6 text-profit" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-profit">{strategy.success}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-display font-semibold group-hover:text-profit transition-colors">
                  {strategy.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {strategy.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-2 mb-4">
                  {strategy.methods.map((method, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-profit rounded-full" />
                      <span className="text-sm text-foreground">{method}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Timeframe:</span>
                    <span className="text-foreground font-medium">{strategy.timeframe}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trading Principles */}
        <div className="bg-gradient-card border border-border/30 rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-2">
              Our Trading <span className="text-gold">Principles</span>
            </h3>
            <p className="text-muted-foreground">
              The foundation of successful trading built on years of market experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="text-center p-4 rounded-xl hover:bg-card/30 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 mb-3">
                  <principle.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold mb-2">{principle.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;