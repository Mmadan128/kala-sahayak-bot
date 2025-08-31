import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">Kala Sahayak</h1>
                <p className="text-xs text-muted-foreground">The Artisan's AI Co-pilot</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/shop" className="text-foreground hover:text-primary transition-elegant">Shop</a>
            <a href="/mission" className="text-foreground hover:text-primary transition-elegant">Our Mission</a>
            <a href="/account" className="text-foreground hover:text-primary transition-elegant">Account</a>
            <a href="/ai-studio" className="text-foreground hover:text-primary transition-elegant">Agentic AI Studio</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-4 h-4" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-gradient-primary border-0"
              >
                3
              </Badge>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>

            {/* Login Button */}
            <Button variant="premium" className="hidden sm:flex" asChild>
              <a href="/ai-studio">Get Started</a>
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-3">
              <a href="/shop" className="text-foreground hover:text-primary transition-elegant py-2">Shop</a>
              <a href="/mission" className="text-foreground hover:text-primary transition-elegant py-2">Our Mission</a>
              <a href="/account" className="text-foreground hover:text-primary transition-elegant py-2">Account</a>
              <a href="/ai-studio" className="text-foreground hover:text-primary transition-elegant py-2">Agentic AI Studio</a>
              <Button variant="premium" className="mt-4 w-full" asChild>
                <a href="/ai-studio">Get Started</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;