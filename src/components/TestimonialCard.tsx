import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  product: string;
  rating: number;
  review: string;
  reviewer: string;
  location: string;
  productImage: string;
}

export function TestimonialCard({ product, rating, review, reviewer, location, productImage }: TestimonialCardProps) {
  return (
    <Card className="border border-border-light rounded-lg p-6">
      <CardContent className="p-0">
        <h4 className="font-medium text-foreground mb-2">{product}</h4>
        
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">"{review}"</p>
        
        <div className="text-sm">
          <p className="font-medium text-foreground">{reviewer}</p>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
}