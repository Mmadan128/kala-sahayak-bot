import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  { id: "all", name: "All", count: 156 },
  { id: "rugs", name: "Rugs & Carpets", count: 45 },
  { id: "pottery", name: "Pottery", count: 32 },
  { id: "textiles", name: "Textiles", count: 28 },
  { id: "jewelry", name: "Jewelry", count: 23 },
  { id: "woodwork", name: "Woodwork", count: 18 },
  { id: "metalcraft", name: "Metalcraft", count: 10 }
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popularity", label: "Most Popular" }
];

const CategoryFilter = ({
  selectedCategories,
  onCategoryChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange
}: CategoryFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleCategory = (categoryId: string) => {
    if (categoryId === "all") {
      onCategoryChange([]);
      return;
    }

    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    onCategoryChange(newCategories);
  };

  const clearFilters = () => {
    onCategoryChange([]);
    onSearchChange("");
    onSortChange("featured");
  };

  const hasActiveFilters = selectedCategories.length > 0 || searchQuery.length > 0;

  return (
    <div className="space-y-6">
      {/* Search and Sort Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-card/50 border-primary/20 focus:border-primary/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-48 bg-card/50 border-primary/20">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <Badge className="ml-2 bg-primary text-primary-foreground">
                {selectedCategories.length + (searchQuery ? 1 : 0)}
              </Badge>
            )}
          </Button>

          {hasActiveFilters && (
            <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className={`space-y-4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => {
            const isSelected = category.id === "all" 
              ? selectedCategories.length === 0 
              : selectedCategories.includes(category.id);

            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                onClick={() => toggleCategory(category.id)}
                className="transition-elegant"
              >
                {category.name}
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-background/20 text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCategories.map(categoryId => {
              const category = categories.find(c => c.id === categoryId);
              return category ? (
                <Badge 
                  key={categoryId}
                  variant="secondary" 
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-elegant"
                  onClick={() => toggleCategory(categoryId)}
                >
                  {category.name}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ) : null;
            })}
            {searchQuery && (
              <Badge 
                variant="secondary"
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-elegant"
                onClick={() => onSearchChange("")}
              >
                "{searchQuery}"
                <X className="w-3 h-3 ml-1" />
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;