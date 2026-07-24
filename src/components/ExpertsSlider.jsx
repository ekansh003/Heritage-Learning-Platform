import { useEffect, useRef, useState } from "react";

import experts from "../data/experts";

function ExpertsSlider() {
  const sliderRef = useRef(null);

  const [selectedExpert, setSelectedExpert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 220,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => clearInterval(autoSlide);
  }, []);

  const openLightbox = (img, index) => {
    setSelectedExpert(img);
    setCurrentIndex(index);
  };

  const changeExpert = (direction) => {
    const newIndex =
      (currentIndex + direction + experts.length) % experts.length;

    setCurrentIndex(newIndex);
    setSelectedExpert(experts[newIndex]);
  };

  return (
    <section className="experts-section">
      <div className="container">
        <h3 className="subsection-title">OUR EXPERTS</h3>

        <div className="experts-slider" ref={sliderRef}>
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <img
                src={expert.image}
                alt={expert.name}
                onClick={() => openLightbox(expert.image, index)}
              />

              <div className="expert-info">
                <h4>{expert.name}</h4>

                <p>{expert.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedExpert && (
          <div className="lightbox active">
            <span
              className="lightbox-close"
              onClick={() => setSelectedExpert(null)}
            >
              &times;
            </span>

            <button className="lightbox-prev" onClick={() => changeExpert(-1)}>
              &#10094;
            </button>

            <img src={selectedExpert} alt="" className="lightbox-img" />

            <button className="lightbox-next" onClick={() => changeExpert(1)}>
              &#10095;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExpertsSlider;
