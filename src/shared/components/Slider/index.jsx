import { useEffect, useMemo, useState } from "react";
import {
  ArrowButton,
  Controls,
  Dot,
  Dots,
  Image,
  Slide,
  SliderWrapper,
  TextContent,
  Track,
} from "./styles";

const Slider = ({ slides = [], autoPlay = true, interval = 4500 }) => {
  const validSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [current, setCurrent] = useState(0);

  const total = validSlides.length;

  useEffect(() => {
    if (current > total - 1) {
      setCurrent(0);
    }
  }, [current, total]);

  useEffect(() => {
    if (!autoPlay || total <= 1) return undefined;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, total]);

  const goTo = (index) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  if (!total) return null;

  return (
    <SliderWrapper aria-label="Galeria de imagens">
      <Track $current={current}>
        {validSlides.map((slide, index) => (
          <Slide key={slide.id ?? slide.image ?? index}>
            <Image
              src={slide.image}
              alt={slide.alt ?? slide.title ?? `Slide ${index + 1}`}
            />

            <TextContent aria-live={index === current ? "polite" : "off"}>
              {slide.eyebrow && <span>{slide.eyebrow}</span>}
              {slide.title && <h3>{slide.title}</h3>}
              {slide.description && <p>{slide.description}</p>}
            </TextContent>
          </Slide>
        ))}
      </Track>

      {total > 1 && (
        <>
          <Controls>
            <ArrowButton
              type="button"
              onClick={goPrev}
              aria-label="Slide anterior"
            >
              ←
            </ArrowButton>

            <ArrowButton
              type="button"
              onClick={goNext}
              aria-label="Próximo slide"
            >
              →
            </ArrowButton>
          </Controls>

          <Dots>
            {validSlides.map((slide, index) => (
              <Dot
                key={slide.id ?? slide.image ?? index}
                type="button"
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                $active={index === current}
                onClick={() => goTo(index)}
              />
            ))}
          </Dots>
        </>
      )}
    </SliderWrapper>
  );
};

export default Slider;
