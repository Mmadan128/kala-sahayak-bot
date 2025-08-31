import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Kala Sahayak</h3>
                <p className="text-xs text-muted-foreground">The Artisan's AI Co-pilot</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering Indian artisans with AI-powered tools to showcase their heritage crafts to the world.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">Shop</h4>
            <ul className="space-y-3">
              {[
                "All Products",
                "Rugs & Carpets", 
                "Pottery & Ceramics",
                "Textiles & Fabrics",
                "Jewelry & Accessories",
                "Woodwork & Furniture",
                "Metalcraft & Sculptures"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-elegant">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Shipping Info",
                "Returns & Exchanges", 
                "Size Guide",
                "Care Instructions",
                "Track Your Order",
                "Contact Us"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-elegant">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">Stay Connected</h4>
            <p className="text-muted-foreground">
              Subscribe to get updates on new artisan collections and AI-powered features.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-card/50 border-primary/20 focus:border-primary/40"
                />
                <Button variant="premium" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@kalasahayak.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Kala Sahayak. All rights reserved. Made with ❤️ for Indian artisans.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-elegant">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-elegant">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-elegant">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;