import React, { useState, useEffect } from "react";
import Slide from "../components/Slide";
import data from "../data";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    if (activeSlide === data.length) {
      setActiveSlide(1);
    } else {
      setActiveSlide((old) => old + 1);
    }
  };

  const backSlide = () => {
    if (activeSlide === 1) {
      setActiveSlide(data.length);
    } else {
      setActiveSlide((old) => old - 1);
    }
  };

  useEffect(() => {
    const autoplay = setTimeout(nextSlide, 3000);

    return () => clearTimeout(autoplay);
  }, [activeSlide]);

  return (
    <div className="container py-5 text-center">
      <h1 className="text-primary">Slider</h1>
      <div className="slider-wrapper container mt-5 text-dark">
        <div className="slider">
          {data.map((el) => {
            return <Slide card={el} active={activeSlide} key={el.id} />;
          })}
        </div>
        <div className="controller-slider d-flex justify-content-between">
          <button className="btn btn-primary" onClick={backSlide}>
            back
          </button>
          <button className="btn btn-primary" onClick={nextSlide}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
