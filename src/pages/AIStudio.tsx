import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Sparkles, DollarSign, Hash, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIStudio = () => {
  const [image, setImage] = useState<File | null>(null);
  const [productDescription, setProductDescription] = useState("");
  const [customPrice, setCustomPrice] = useState("");
  const [googleApiKey, setGoogleApiKey] = useState("");
  const [clipdropApiKey, setClipdropApiKey] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      toast({
        title: "Image uploaded",
        description: "Your product image has been uploaded successfully.",
      });
    }
  };

  const handleGenerate = async () => {
    if (!image || !productDescription) {
      toast({
        title: "Missing information",
        description: "Please upload an image and add a product description.",
        variant: "destructive",
      });
      return;
    }

    if (!googleApiKey || !clipdropApiKey) {
      toast({
        title: "API Keys required",
        description: "Please enter your Google Gemini and Clipdrop API keys.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults = {
        enhancedImage: URL.createObjectURL(image),
        description: `This beautiful handcrafted piece showcases traditional artistry with modern appeal. ${productDescription} Each detail reflects the artisan's dedication to preserving cultural heritage while creating something truly unique.`,
        hashtags: ["#Handmade", "#ArtisanCraft", "#TraditionalArt", "#Sustainable", "#UniqueDesign"],
        aiPrice: Math.floor(Math.random() * 200) + 50,
        finalPrice: customPrice ? parseFloat(customPrice) : Math.floor(Math.random() * 200) + 50,
        mockUrl: `https://kalasahayk.com/gallery/artisan123/product_${Math.random().toString(36).substr(2, 6)}`
      };
      
      setResults(mockResults);
      setIsProcessing(false);
      
      toast({
        title: "AI Processing Complete!",
        description: "Your professional listing is ready.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              🎨 Kala Sahayak - AI Studio
            </h1>
            <p className="text-xl text-muted-foreground">
              Turn a simple photo and description into a professional, market-ready product listing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    API Configuration
                  </CardTitle>
                  <CardDescription>
                    Enter your API keys to activate AI processing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="google-api">Google Gemini API Key</Label>
                    <Input
                      id="google-api"
                      type="password"
                      placeholder="Enter your Google Gemini API key"
                      value={googleApiKey}
                      onChange={(e) => setGoogleApiKey(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clipdrop-api">Clipdrop API Key</Label>
                    <Input
                      id="clipdrop-api"
                      type="password"
                      placeholder="Enter your Clipdrop API key"
                      value={clipdropApiKey}
                      onChange={(e) => setClipdropApiKey(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
                    Product Details
                  </CardTitle>
                  <CardDescription>
                    Upload your product image and add description
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="image-upload">Product Image</Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    {image && (
                      <div className="mt-2">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Product preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Product Description</Label>
                    <Textarea
                      id="description"
                      placeholder="e.g., This is a hand-painted necklace made from terracotta clay, featuring traditional 'Warli' art motif. The black beads are made of glass. It took me two days to paint the intricate details."
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Custom Price (Optional)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter your selling price"
                      value={customPrice}
                      onChange={(e) => setCustomPrice(e.target.value)}
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isProcessing}
                    className="w-full"
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        AI Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Professional Listing
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Enhanced Product Listing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Enhanced Image</Label>
                        <img
                          src={results.enhancedImage}
                          alt="Enhanced product"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>

                      <div>
                        <Label className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Pricing
                        </Label>
                        <div className="mt-2 p-3 bg-muted rounded-lg">
                          <p className="font-semibold">
                            Final Price: ₹{results.finalPrice}
                          </p>
                          {results.aiPrice !== results.finalPrice && (
                            <p className="text-sm text-muted-foreground">
                              AI Suggested: ₹{results.aiPrice}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label>Product Story</Label>
                        <div className="mt-2 p-3 bg-muted rounded-lg">
                          <p className="text-sm">{results.description}</p>
                        </div>
                      </div>

                      <div>
                        <Label className="flex items-center gap-2">
                          <Hash className="h-4 w-4" />
                          Social Media Hashtags
                        </Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {results.hashtags.map((tag: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>Gallery URL</Label>
                        <div className="mt-2 p-3 bg-muted rounded-lg">
                          <code className="text-sm">{results.mockUrl}</code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Your AI-enhanced product listing will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIStudio;