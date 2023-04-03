import React, { useState, useEffect } from "react";
import { GrFormPrevious, GrFormNext} from "react-icons/gr"

import img1 from "../img/DJI_ok 0055_Easy-Resize.com.jpg"
import img2 from "../img/DJI_ok 0056_Easy-Resize.com.jpg"
import img3 from "../img/DJI_ok 0058_Easy-Resize.com.jpg"
import img4 from "../img/DJI_ok 0061_Easy-Resize.com.jpg"
import img5 from "../img/DJI_ok 0180_Easy-Resize.com.jpg"

const images = [
    {
      src: `${img5}`,
      alt: "Slide 1"
    },
    {
      src: `${img4}`,
      alt: "Slide 2",
    },
    {
      src: `${img3}`,
      alt: "Slide 3",
    },
    {
      src: `${img2}`,
      alt: "Slide 4",
    },
    {
      src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByYWlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 5",
    },
    {
      src: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/11/makaira-beach-resort-canavieiras-bahia-capa-2021.jpg",
      alt: "Slide 6",
    },
    {
      src: "https://turismo.bahia.ws/wp-content/uploads/2012/11/Canavieiras-na-Bahia-2.jpg",
      alt: "Slide 7",
    },
    {
      src: `${img1}`,
      alt: "Slide 8",
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

