 import React, { useState, useEffect, useRef } from "react";

const images = ["/Doc.png", "/OBJECTS.png", "/Invocie.png"];

const DocumentCarousel = () => {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState("next");
  const startX = useRef(0);

  const next = () => {
    setDirection("next");
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection("prev");
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (endX) => {
    const diff = startX.current - endX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  // Logic 
  const prevIndex = (active - 1 + images.length) % images.length;
  const nextIndex = (active + 1) % images.length;

  return (
    <div className="carousel-wrapper">
      <div 
        className="carousel-container"
        onMouseDown={(e) => (startX.current = e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      >
        {/* SLOT 1*/}
        <div className="slot side">
          <img key={`prev-${prevIndex}`} src={images[prevIndex]} className={`doc-img slide-${direction}`} alt="" />
        </div>

        {/* SLOT 2  */}
        <div className="slot active">
          <img key={`active-${active}`} src={images[active]} className={`doc-img slide-${direction}`} alt="" />
        </div>

        {/* SLOT 3  */}
        <div className="slot side">
          <img key={`next-${nextIndex}`} src={images[nextIndex]} className={`doc-img slide-${direction}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DocumentCarousel;