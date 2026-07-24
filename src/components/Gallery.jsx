import { useEffect, useRef, useState } from "react";

function Gallery() {
  const sliderRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/gallery/1.webp",
    "/images/gallery/2.webp",
    "/images/gallery/3.webp",
    "/images/gallery/4.webp",
    "/images/gallery/5.webp",
    "/images/gallery/6.webp",
    "/images/gallery/7.webp",
    "/images/gallery/8.webp",
    "/images/gallery/9.webp",
    "/images/gallery/10.webp",
    "/images/gallery/11.webp",
    "/images/gallery/12.webp",
    "/images/gallery/13.webp",
    "/images/gallery/14.webp",
    "/images/gallery/15.webp",
    "/images/gallery/16.webp",
    "/images/gallery/17.webp",
    
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const autoSlide = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 310,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -310,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 310,
      behavior: "smooth",
    });
  };

  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);

    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-slider">
        <button className="slider-btn prev" onClick={slideLeft}>
          &#10094;
        </button>

        <div className="slider-track" ref={sliderRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index + 1}`}
              loading="lazy"
              onClick={() => {
                setSelectedImage(img);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <button className="slider-btn next" onClick={slideRight}>
          &#10095;
        </button>
      </div>

      {selectedImage && (
        <div className="lightbox active">
          <span
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>

          <button className="lightbox-prev" onClick={() => changeImage(-1)}>
            &#10094;
          </button>

          <img src={selectedImage} alt="" className="lightbox-img" />

          <button className="lightbox-next" onClick={() => changeImage(1)}>
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
