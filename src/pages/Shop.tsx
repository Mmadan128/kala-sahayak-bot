import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import CategoryFilter from "@/components/CategoryFilter";

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Shop Artisan Creations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unique handcrafted products made by talented artisans from across India
          </p>
        </div>
        
        <CategoryFilter 
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;