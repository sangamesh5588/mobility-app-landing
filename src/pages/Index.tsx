import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { 
  Car, 
  MapPin, 
  CreditCard, 
  Globe, 
  TrendingUp, 
  Smartphone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! We'll notify you at launch.");
      setEmail("");
    }
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Instant Parking",
      description: "Find and book parking spots in seconds with real-time availability."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Real-Time Availability",
      description: "Live updates on parking spaces and ride options near you."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Safe, encrypted transactions with multiple payment options."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-City Support",
      description: "Seamless experience across cities and countries worldwide."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Host Earnings Dashboard",
      description: "Track your earnings and optimize your parking space revenue."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Mobility Ecosystem",
      description: "Integrated platform for all your transportation and parking needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-foreground">
              BrandName
            </div>
            <Button 
              onClick={handleNotify}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="glass-heavy rounded-3xl p-8 sm:p-12 space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  A Smarter Way to Move, Park & Travel
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  Our superapp is launching soon.
                </p>
                <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 text-lg bg-background/50 backdrop-blur-sm border-2 focus:border-primary"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-lg font-semibold"
                  >
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative z-10 flex justify-center lg:justify-end">
                <img 
                  src={heroMockup} 
                  alt="Mobile App Mockup" 
                  className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for seamless mobility and parking in one powerful platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 space-y-4 hover:scale-105 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launching Soon Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="glass-heavy rounded-3xl p-12 sm:p-16 text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Launching in 2025
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience the future of urban mobility
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Stay Connected</h3>
              <form onSubmit={handleNotify} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background/50"
                />
                <Button 
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 justify-start md:justify-end">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="text-center md:text-right space-x-4 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition-smooth">Contact</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 BrandName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
