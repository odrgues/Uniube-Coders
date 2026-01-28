import React, { useState, useEffect } from "react";
import { SliderContainer, SlideImage, DotsWrapper, Dot } from "./styles";

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <h1>Uniube Coders em Ação!</h1>
      <SliderContainer>
        {images.map((image, index) => (
          <SlideImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            $active={index === currentIndex}
          />
        ))}

        <DotsWrapper>
          {images.map((_, index) => (
            <Dot
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsWrapper>
      </SliderContainer>
    </>
  );
};

export default Slider;
