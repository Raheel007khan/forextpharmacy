import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, TrendingDown, Clock, Target, DollarSign, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Import your custom images here
// import customChart1 from "@/assets/my-chart1.jpg";
// import customChart2 from "@/assets/my-chart2.png";
// etc...

const FreeSignals = () => {
  const freeSignals = [
    {
      id: 1,
      pair: "XAUUSD",
      type: "BUY",
      entry: "2020.50",
      tp1: "2025.00",
      tp2: "2030.00",
      sl: "2015.00",
      status: "Active",
      time: "2 hours ago",
      profit: null,
      // Option 1: Use imported image - image: customChart1
      // Option 2: Use direct URL
     // image: "src/assets/XAUUSD_2025-09-15_16-16-48.png"
      import myChart from "@/src/assets/XAUUSD_2025-09-15_16-16-48.png"
    },
    {
      id: 2,
      pair: "EURUSD",
      type: "SELL",
      entry: "1.0850",
      tp1: "1.0820",
      tp2: "1.0800",
      sl: "1.0880",
      status: "Closed",
      time: "1 day ago",
      profit: "+45 pips"
      // No image for this signal
    },
    {
      id: 3,
      pair: "USOIL",
      type: "BUY",
      entry: "78.20",
      tp1: "79.00",
      tp2: "80.50",
      sl: "77.50",
      status: "Closed",
      time: "2 days ago",
      profit: "+80 pips",
      // Option 1: Use imported image - image: customChart2
      // Option 2: Use direct URL  
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop&crop=center"
    },
    {
      id: 4,
      pair: "GBPUSD",
      type: "SELL",
      entry: "1.2650",
      tp1: "1.2620",
      tp2: "1.2590",
      sl: "1.2680",
      status: "Stopped",
      time: "3 days ago",
      profit: "-30 pips"
      // No image for this signal
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
              Get Premium Access
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-card/50 border border-gold/20 rounded-full px-4 py-2 text-sm text-gold font-medium backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Free Trading Signals</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Free <span className="text-gold">Forex Signals</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a taste of our premium signals with these free samples. 
            Join thousands of profitable traders today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-gold/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-profit">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-gold/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gold">24</div>
              <div className="text-sm text-muted-foreground">Signals/Week</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-gold/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">+1,250</div>
              <div className="text-sm text-muted-foreground">Avg Pips/Month</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-gold/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-profit">$0</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </CardContent>
          </Card>
        </div>

        {/* Signals List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Free Signals</h2>
            <div className="text-sm text-muted-foreground">
              Updated every 4 hours
            </div>
          </div>

          <div className="grid gap-4">
            {freeSignals.map((signal) => (
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
                          <div className="font-semibold text-lg">{signal.pair}</div>
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
                        <div className="relative w-full lg:w-32 h-20 rounded-lg overflow-hidden border border-border/50">
                          <img 
                            src={(signal as any).image} 
                            alt={`${signal.pair} chart analysis`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    )}

                    {/* Signal Details */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Entry</div>
                        <div className="font-medium">{signal.entry}</div>
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
                          {signal.profit || "Pending"}
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
        <div className="mt-12 text-center bg-gradient-card border border-gold/20 rounded-xl p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Want More <span className="text-gold">Premium Signals?</span>
            </h3>
            
            <p className="text-muted-foreground">
              Get access to 5-10 daily premium signals with detailed analysis, 
              risk management, and 24/7 support from our expert traders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                <DollarSign className="w-5 h-5 mr-2" />
                View Premium Plans
              </Button>
              
              <Button variant="premium" size="lg">
                <Target className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              No setup fees • Cancel anytime • 30-day money back guarantee
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FreeSignals;
