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
    if (!autoPlay || total <= 1) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, total]);

  const goTo = (index) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  if (!total) return null;

  return (
    <SliderWrapper>
      <Track style={{ transform: `translateX(-${current * 100}%)` }}>
        {validSlides.map((slide, index) => (
          <Slide key={`${slide.title}-${index}`}>
            <Image src={slide.image} alt={slide.title} />

            <TextContent>
              {slide.eyebrow && <span>{slide.eyebrow}</span>}
              <h3>{slide.title}</h3>
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
            {validSlides.map((_, index) => (
              <Dot
                key={index}
                type="button"
                aria-label={`Ir para slide ${index + 1}`}
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
