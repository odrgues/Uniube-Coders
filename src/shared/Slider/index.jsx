import { useEffect, useMemo, useState } from "react";
import { SliderContainer, SlideImage, DotsWrapper, Dot } from "./Slider.styles";

const Slider = ({ images = [], interval = 3000 }) => {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images : []),
    [images],
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeIndex =
    safeImages.length === 0 ? 0 : currentIndex % safeImages.length;

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [safeImages.length, interval]);

  const goToSlide = (index) => setCurrentIndex(index);

  if (safeImages.length === 0) return null;

  return (
    <SliderContainer role="region" aria-label="Galeria de imagens">
      {safeImages.map((image, index) => (
        <SlideImage
          key={image.id ?? index}
          src={image.src}
          alt={image.alt || `Imagem ${index + 1}`}
          $active={index === activeIndex}
          aria-hidden={index !== activeIndex}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}

      <DotsWrapper role="tablist" aria-label="Selecionar slide">
        {safeImages.map((_, index) => (
          <Dot
            key={index}
            type="button"
            $active={index === activeIndex}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsWrapper>
    </SliderContainer>
  );
};

export default Slider;
