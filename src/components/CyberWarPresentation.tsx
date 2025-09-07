import { useState, useEffect } from "react";
import { PresentationNav } from "./PresentationNav";
import { TitleSlide } from "./slides/TitleSlide";
import { IntroSlide } from "./slides/IntroSlide";
import { HistorySlide } from "./slides/HistorySlide";
import { TypesSlide } from "./slides/TypesSlide";
import { ActorsSlide } from "./slides/ActorsSlide";
import { ExamplesSlide } from "./slides/ExamplesSlide";
import { ImpactSlide } from "./slides/ImpactSlide";
import { ChallengesSlide } from "./slides/ChallengesSlide";
import { ProtectionSlide } from "./slides/ProtectionSlide";
import { ConclusionSlide } from "./slides/ConclusionSlide";

const slides = [
  TitleSlide,
  IntroSlide,
  HistorySlide,
  TypesSlide,
  ActorsSlide,
  ExamplesSlide,
  ImpactSlide,
  ChallengesSlide,
  ProtectionSlide,
  ConclusionSlide,
];

export const CyberWarPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        previousSlide();
      } else if (event.key >= "1" && event.key <= "9") {
        const slideIndex = parseInt(event.key) - 1;
        if (slideIndex < slides.length) {
          goToSlide(slideIndex);
        }
      } else if (event.key === "0") {
        // الرقم 0 للشريحة العاشرة
        if (slides.length >= 10) {
          goToSlide(9);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="slide-enter-active">
        <CurrentSlideComponent />
      </div>
      
      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrevious={previousSlide}
        onSlideSelect={goToSlide}
      />

      {/* Keyboard shortcuts hint */}
      <div className="fixed top-4 left-4 z-40">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 text-xs text-muted-foreground">
          <p>استخدم الأسهم أو المسافة للتنقل</p>
          <p>اضغط 1-9 أو 0 للانتقال لشريحة محددة</p>
        </div>
      </div>
    </div>
  );
};