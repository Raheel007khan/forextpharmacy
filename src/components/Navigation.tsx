import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/50 border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <TrendingUp className="w-6 h-6 text-gold" />
            <span>MRK <span className="text-gold">Traders</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/free-signals" className="text-foreground hover:text-gold transition-colors">
              Free Signals
            </Link>
            <Link to="/gold-signals" className="text-foreground hover:text-gold transition-colors">
              Gold Trading Signals
            </Link>
            <Button variant="gold" size="sm">
              Get Premium Signals
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/free-signals" 
              className="block text-foreground hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Free Signals
            </Link>
            <Link 
              to="/gold-signals" 
              className="block text-foreground hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gold Trading Signals
            </Link>
            <Button variant="gold" size="sm" className="w-full">
              Get Premium Signals
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;