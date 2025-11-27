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
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="text-xl sm:text-2xl font-bold text-foreground">
              BrandName
            </div>
            <Button 
              onClick={handleNotify}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth sm:text-base text-sm"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="glass-heavy rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                  A Smarter Way to Move, Park & Travel
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  Our superapp is launching soon.
                </p>
                <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 sm:h-14 text-base sm:text-lg bg-background/50 backdrop-blur-sm border-2 focus:border-primary"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="h-12 sm:h-14 px-6 sm:px-8 bg-primary text-primary-foreground hover:bg-muted transition-smooth text-base sm:text-lg font-semibold"
                  >
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative z-10 flex justify-center lg:justify-end">
                <img 
                  src={heroMockup} 
                  alt="Mobile App Mockup" 
                  className="w-64 sm:w-80 md:w-96 lg:max-w-md xl:max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Everything you need for seamless mobility and parking in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 sm:p-7 lg:p-8 space-y-3 sm:space-y-4 hover:bg-muted transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launching Soon Banner */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-heavy rounded-xl p-8 sm:p-12 lg:p-16 text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Launching in 2025
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Be among the first to experience the future of urban mobility
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">Stay Connected</h3>
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background/50 h-11 sm:h-12"
                />
                <Button 
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-12"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 justify-start md:justify-end">
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-smooth">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-smooth">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-smooth">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-smooth">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
              <div className="text-center md:text-right text-sm sm:text-base space-x-2 sm:space-x-4 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-foreground transition-smooth">Contact</a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-sm sm:text-base text-muted-foreground">
            <p>© 2025 BrandName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
