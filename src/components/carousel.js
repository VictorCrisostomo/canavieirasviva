import React, { useState, useEffect } from "react";
import { GrFormPrevious, GrFormNext} from "react-icons/gr"

const images = [
    {
      src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJhaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 1"
    },
    {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJhaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 2",
    },
    {
      src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByYWlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 3",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1663946899699-e69774d0594a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByYWlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 4",
    },
    {
      src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByYWlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 5",
    },
    {
      src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByYWlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 6",
    },
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            key={image.id}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="carousel-prev" onClick={prevSlide}>
          <GrFormPrevious/>
        </button>
        <div className="carousel-thumbnails">
          {images.map((image, index) => (
            <img
              src={image.src}
              alt={image.alt}
              key={image.id}
              className={`${index === currentIndex ? "active" : ""}`}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
        <button className="carousel-next" onClick={nextSlide}>
          <GrFormNext/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

