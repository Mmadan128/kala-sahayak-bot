import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Import product images
import rugImage from "@/assets/product-rug.jpg";
import potteryImage from "@/assets/product-pottery.jpg";
import textileImage from "@/assets/product-textile.jpg";
import metalcraftImage from "@/assets/product-metalcraft.jpg";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    title: "Hand-Painted Indigo Ceramic Vase",
    price: 4500,
    originalPrice: 5500,
    image: potteryImage,
    artisan: "Priya Devi",
    category: "pottery",
    rating: 4.8,
    reviews: 23,
    isNew: true,
    onSale: true
  },
  {
    id: "2", 
    title: "Traditional Handwoven Persian Rug",
    price: 8500,
    image: rugImage,
    artisan: "Ramesh Kumar",
    category: "rugs",
    rating: 4.9,
    reviews: 45,
    isNew: false,
    onSale: false
  },
  {
    id: "3",
    title: "Golden Embroidered Silk Textile",
    price: 3200,
    originalPrice: 4000,
    image: textileImage,
    artisan: "Anita Sharma",
    category: "textiles", 
    rating: 4.7,
    reviews: 18,
    isNew: true,
    onSale: true
  },
  {
    id: "4",
    title: "Handcrafted Brass Decorative Bowl",
    price: 2800,
    image: metalcraftImage,
    artisan: "Vikram Singh",
    category: "metalcraft",
    rating: 4.6,
    reviews: 12,
    isNew: false,
    onSale: false
  },
  {
    id: "5",
    title: "Artisan Hand-Knotted Floor Rug",
    price: 12000,
    image: rugImage,
    artisan: "Meera Bai",
    category: "rugs",
    rating: 5.0,
    reviews: 67,
    isNew: false,
    onSale: false
  },
  {
    id: "6",
    title: "Traditional Ceramic Tea Set",
    price: 3500,
    originalPrice: 4200,
    image: potteryImage,
    artisan: "Gopal Das",
    category: "pottery",
    rating: 4.5,
    reviews: 28,
    isNew: false,
    onSale: true
  },
  {
    id: "7",
    title: "Handwoven Cotton Table Runner",
    price: 1500,
    image: textileImage,
    artisan: "Sunita Devi",
    category: "textiles",
    rating: 4.4,
    reviews: 35,
    isNew: true,
    onSale: false
  },
  {
    id: "8",
    title: "Engraved Copper Wall Art",
    price: 5500,
    image: metalcraftImage,
    artisan: "Rajesh Kumar",
    category: "metalcraft",
    rating: 4.8,
    reviews: 22,
    isNew: false,
    onSale: false
  }
];

const ProductGallery = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const productsPerPage = 8;

  // Filter products based on selected criteria
  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return a.isNew ? -1 : 1;
      case "price-low":
        return a.price - b.price;
      case "price-high": 
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popularity":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by <span className="text-gradient-primary">Craft</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover unique handcrafted pieces from talented artisans across India
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <CategoryFilter
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, sortedProducts.length)} of {sortedProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {paginatedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More / Pagination */}
        {currentPage < totalPages && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={loadMore}
              disabled={isLoading}
              className="min-w-40"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More Products"
              )}
            </Button>
          </div>
        )}

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-3xl">🎨</div>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategories([]);
                setSearchQuery("");
                setSortBy("featured");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;