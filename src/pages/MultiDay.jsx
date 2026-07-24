import { useState, useRef } from "react";
import multidayData from "../data/multidayData";

function MultiDay() {
  const [activeTrip, setActiveTrip] = useState(multidayData[0]);

  const tripsTopRef = useRef(null);

  const scrollToTrips = () => {
    tripsTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const trip = activeTrip;

  return (
    <section id="multiday" className="service-section" ref={tripsTopRef}>
      <div className="container">
        <h1 className="section-title">MULTI-DAY HERITAGE EXPEDITIONS</h1>

        <div className="city-tabs">
          {multidayData.map((item) => (
            <button
              key={item.id}
              className={activeTrip.id === item.id ? "active" : ""}
              onClick={() => setActiveTrip(item)}
            >
              {item.shortTitle}
            </button>
          ))}
        </div>

        <p className="service-intro mb--2half">
          Take learning beyond the classroom through immersive educational
          journeys where students explore archaeological sites, historical
          landscapes, and cultural traditions through guided fieldwork,
          storytelling, observation, and hands-on experiential activities.
        </p>

        <div className="expedition-block">
          <h3 className="expedition-title">{trip.title}</h3>

          <p className="expedition-duration">{trip.duration}</p>

          <p className="expedition-intro">{trip.intro}</p>

          <div className="service-gallery">
            {trip.images.map((img, index) => (
              <img key={index} src={img} alt={`${trip.title}-${index + 1}`} />
            ))}
          </div>

          <h4>Key Places & Experiences</h4>

          <ul>
            {trip.sites.map((site, index) => (
              <li key={index}>{site}</li>
            ))}
          </ul>

          <h4>Experiential Learning Activities</h4>

          <ul>
            {trip.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          <h4>Learning Outcomes</h4>

          <ul>
            {trip.outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>

          <h4>Approximate Program Cost</h4>

          <ul>
            <li>{trip.cost}</li>
          </ul>
        </div>

        <div className="back-to-cities-wrapper">
          <button className="back-to-cities-btn" onClick={scrollToTrips}>
            Back to Expeditions ↑
          </button>
        </div>
      </div>
    </section>
  );
}

export default MultiDay;
