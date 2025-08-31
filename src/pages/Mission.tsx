import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering artisans through technology to preserve cultural heritage and create sustainable livelihoods
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Preserving Heritage</CardTitle>
                <CardDescription className="text-lg">
                  Keeping traditional crafts alive for future generations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that traditional crafts are not just products, but living pieces of cultural heritage. 
                  Our platform ensures that ancient techniques and artistic traditions continue to thrive in the modern world, 
                  connecting artisans with global audiences who appreciate authentic craftsmanship.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Empowering Artisans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide artisans with the tools and platform they need to showcase their work, 
                    reach new markets, and build sustainable businesses while maintaining their creative independence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Global Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By connecting local artisans with international buyers, we create opportunities for 
                    cultural exchange and economic growth that benefits communities worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">AI-Powered Innovation</CardTitle>
                <CardDescription className="text-lg">
                  Technology that enhances, not replaces, human creativity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our AI tools help artisans tell their stories better, optimize their pricing, 
                  and reach the right audiences. We believe technology should amplify human creativity, 
                  not diminish it.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Smart Photography</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhance product images to showcase true craftsmanship
                    </p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Story Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      Help artisans share the story behind their creations
                    </p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Market Insights</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide pricing guidance based on market trends
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Mission
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're an artisan looking to share your craft or a customer seeking authentic, 
                handmade products, you're part of a movement that celebrates human creativity and cultural diversity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;