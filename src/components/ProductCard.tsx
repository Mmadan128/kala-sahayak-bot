import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  artisan: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  onSale?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  image,
  artisan,
  category,
  rating,
  reviews,
  isNew = false,
  onSale = false
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group glass-card hover:shadow-elegant transition-elegant overflow-hidden border-primary/10 hover:border-primary/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gradient-surface">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-elegant group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-gradient-primary border-0 text-primary-foreground">
              New
            </Badge>
          )}
          {onSale && (
            <Badge variant="destructive">
              Sale
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-elegant ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          <Button 
            variant="glass" 
            size="icon" 
            className="w-8 h-8"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
          </Button>
          <Button variant="glass" size="icon" className="w-8 h-8">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Add to Cart - appears on hover */}
        <div className={`absolute bottom-3 left-3 right-3 transition-elegant ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <Button variant="premium" className="w-full">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>

        {/* Title */}
        <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-elegant cursor-pointer">
          {title}
        </h3>

        {/* Artisan */}
        <p className="text-sm text-muted-foreground mb-3">
          by {artisan}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-primary' : 'text-muted-foreground/30'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-foreground">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {onSale && originalPrice && (
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;