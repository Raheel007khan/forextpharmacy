import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, TrendingDown, Clock, Target, DollarSign, ImageIcon, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import goldChart from "@/assets/GOLD_2025-09-22_14-00-58.png";

const GoldTradingSignals = () => {
  const goldSignals = [
    {
      id: 1,
      pair: "XAUUSD",
      type: "BUY",
      entry: "3703.00",
      tp1: "3713.00",
      tp2: "3723.00",
      sl: "3698.00",
      status: "Closed",
      time: "2 hours ago",
      profit: "+200 pips",
      image: goldChart
    },
    {
      id: 2,
      pair: "XAUUSD",
      type: "SELL",
      entry: "2650.50",
      tp1: "2640.00",
      tp2: "2628.00",
      sl: "2665.00",
      status: "Closed",
      time: "1 day ago",
      profit: "+125 pips"
    },
    {
      id: 3,
      pair: "XAUUSD",
      type: "BUY",
      entry: "2580.25",
      tp1: "2595.00",
      tp2: "2610.50",
      sl: "2570.00",
      status: "Closed",
      time: "3 days ago",
      profit: "+180 pips"
    },
    {
      id: 4,
      pair: "XAUUSD",
      type: "SELL",
      entry: "2720.80",
      tp1: "2705.00",
      tp2: "2690.00",
      sl: "2735.00",
      status: "Active",
      time: "30 minutes ago",
      profit: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Closed":
        return "bg-profit/20 text-profit border-profit/30";
      case "Stopped":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getProfitColor = (profit: string | null) => {
    if (!profit) return "";
    return profit.startsWith("+") ? "text-profit" : "text-red-400";
  };

  return (
    <div className="min-h-screen bg-background font-trading">
      {/* Header */}
      <header className="bg-card/50 border-b border-border backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back to Home</span>
            </Link>
            <Button variant="gold" size="sm">
              Get Premium Gold Signals
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-gold/20 border border-gold/30 rounded-full px-4 py-2 text-sm text-gold font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Premium Gold Trading Signals</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            <span className="text-gold">Gold Trading</span> Signals
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized signals for XAUUSD (Gold) with high-precision entries and targets. 
            Our gold experts deliver consistent profits in volatile markets.
          </p>
        </div>

        {/* Gold Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-gold/10 border-gold/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gold">92%</div>
              <div className="text-sm text-muted-foreground">Gold Win Rate</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-gold/10 border-gold/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-profit">18</div>
              <div className="text-sm text-muted-foreground">Gold Signals/Week</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-gold/10 border-gold/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gold">+2,850</div>
              <div className="text-sm text-muted-foreground">Avg Pips/Month</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-gold/10 border-gold/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-profit">24/7</div>
              <div className="text-sm text-muted-foreground">Gold Analysis</div>
            </CardContent>
          </Card>
        </div>

        {/* Gold Market Overview */}
        <Card className="mb-8 bg-gradient-card border-gold/20">
          <CardHeader>
            <CardTitle className="text-gold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Gold Market Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-gold">Current Market Sentiment</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gold is currently showing strong bullish momentum with key support at 2650 level. 
                  Fed policy uncertainty and geopolitical tensions continue to support precious metals.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gold">Key Levels to Watch</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resistance:</span>
                    <span className="text-red-400">2720 - 2735</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="text-profit">2650 - 2665</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Signals List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold flex items-center">
              <Zap className="w-6 h-6 mr-2 text-gold" />
              Recent Gold Signals
            </h2>
            <div className="text-sm text-muted-foreground">
              Updated every 2 hours
            </div>
          </div>

          <div className="grid gap-4">
            {goldSignals.map((signal) => (
              <Card key={signal.id} className="bg-card/50 border-border hover:border-gold/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Signal Info */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {signal.type === "BUY" ? (
                          <TrendingUp className="w-5 h-5 text-profit" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-400" />
                        )}
                        <div>
                          <div className="font-semibold text-lg text-gold">{signal.pair}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {signal.time}
                          </div>
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(signal.status)}>
                        {signal.status}
                      </Badge>
                    </div>

                    {/* Signal Image */}
                    {(signal as any).image && (
                      <div className="lg:order-first">
                        <div className="relative w-full lg:w-48 h-32 lg:h-28 rounded-lg overflow-hidden border border-gold/30 bg-card/30">
                          <img 
                            src={(signal as any).image} 
                            alt={`${signal.pair} chart analysis`}
                            className="w-full h-full object-contain hover:object-cover transition-all duration-300 cursor-pointer"
                            onClick={() => window.open((signal as any).image, '_blank')}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            <ImageIcon className="w-3 h-3 inline mr-1" />
                            Gold Chart
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Signal Details */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Entry</div>
                        <div className="font-medium text-gold">{signal.entry}</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground">TP1</div>
                        <div className="font-medium text-profit">{signal.tp1}</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground">TP2</div>
                        <div className="font-medium text-profit">{signal.tp2}</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground">SL</div>
                        <div className="font-medium text-red-400">{signal.sl}</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground">Result</div>
                        <div className={`font-medium ${getProfitColor(signal.profit)}`}>
                          {signal.profit || "Active"}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-gold/10 border border-gold/30 rounded-xl p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Master <span className="text-gold">Gold Trading</span> with Us
            </h3>
            
            <p className="text-muted-foreground">
              Join our exclusive Gold Trading VIP group and get 3-5 high-precision 
              gold signals daily with detailed technical analysis and risk management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Join Gold VIP
              </Button>
              
              <Button variant="premium" size="lg" asChild>
                <Link to="/free-signals">
                  <Target className="w-5 h-5 mr-2" />
                  View All Signals
                </Link>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Gold specialist traders • Real-time alerts • 95%+ win rate
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoldTradingSignals;