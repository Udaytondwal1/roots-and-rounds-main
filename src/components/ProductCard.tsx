import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  className?: string;
}

export function ProductCard({ image, name, price, originalPrice, className }: ProductCardProps) {
  const discount = originalPrice ? Math.round(((parseFloat(originalPrice.replace('₹', '')) - parseFloat(price.replace('₹', ''))) / parseFloat(originalPrice.replace('₹', ''))) * 100) : 0;
  
  return (
    <Card className={`overflow-hidden border border-border-light rounded-lg hover:opacity-90 transition-opacity ${className}`}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-2 truncate">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-foreground">{price}</span>
          {originalPrice && (
            <>
              <span className="text-muted-foreground line-through text-sm">{originalPrice}</span>
              <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                -{discount}%
              </Badge>
            </>
          )}
        </div>
        <Button variant="default" size="sm" className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}