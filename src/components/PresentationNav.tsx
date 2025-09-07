import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface PresentationNavProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (slide: number) => void;
}

export const PresentationNav = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSlideSelect,
}: PresentationNavProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-card">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => onSlideSelect(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="h-4 w-4 rotate-180" />
          </Button>
        </div>
        
        <div className="text-center mt-2 text-xs text-muted-foreground">
          {currentSlide + 1} من {totalSlides}
        </div>
      </div>
    </div>
  );
};