import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGallery from "@/components/ProductGallery";
import AgenticStudio from "@/components/AgenticStudio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductGallery />
        <AgenticStudio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
