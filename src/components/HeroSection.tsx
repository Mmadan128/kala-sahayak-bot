import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Users, Award, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-gradient-primary border-0 text-primary-foreground">
              <Sparkles className="w-4 h-4 mr-2" />
              Artistry in Every Thread
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                A Story in Every{" "}
                <span className="text-gradient-primary">Piece</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Discover authentic, handcrafted arts from the heart of India. Our AI-powered platform connects artisans with a global marketplace.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">2K+</div>
                <div className="text-sm text-muted-foreground">Artisans</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="group">
                Explore the Collection
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-elegant" />
              </Button>
              <Button variant="hero" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                Watch Our Story
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 glass-card p-4 rounded-lg">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Direct from Artisans</div>
                  <div className="text-xs text-muted-foreground">No middlemen</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card p-4 rounded-lg">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Authentic Quality</div>
                  <div className="text-xs text-muted-foreground">Verified crafts</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card p-4 rounded-lg">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Enhanced</div>
                  <div className="text-xs text-muted-foreground">Smart discovery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-surface rounded-2xl p-8 shadow-elegant">
              {/* Placeholder for hero image - you can replace with actual image */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">AI-Powered Artisan Studio</h3>
                    <p className="text-muted-foreground">Transforming traditional crafts with modern technology</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-lg">
                <div className="text-xs text-muted-foreground">Live Orders</div>
                <div className="font-bold text-primary">₹1,24,000</div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-lg">
                <div className="text-xs text-muted-foreground">Active Artisans</div>
                <div className="font-bold text-primary">1,890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;