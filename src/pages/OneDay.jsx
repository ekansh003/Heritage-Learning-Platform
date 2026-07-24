import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

function OneDay() {
  const { city } = useParams();
  const [activeCity, setActiveCity] = useState("chennai");

  const citiesTopRef = useRef(null);

  const scrollToCities = () => {
    citiesTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    if (city) {
      setActiveCity(city.toLowerCase());
    }
  }, [city]);
  return (
    <section id="oneday" className="service-section" ref={citiesTopRef}>
      <div className="container">
        <h1 className="section-title">ONE-DAY TRIPS</h1>

        <div className="city-tabs">
          <button
            className={activeCity === "chennai" ? "active" : ""}
            onClick={() => setActiveCity("chennai")}
          >
            Chennai
          </button>

          <button
            className={activeCity === "bangalore" ? "active" : ""}
            onClick={() => setActiveCity("bangalore")}
          >
            Bangalore
          </button>

          <button
            className={activeCity === "hyderabad" ? "active" : ""}
            onClick={() => setActiveCity("hyderabad")}
          >
            Hyderabad
          </button>

          <button
            className={activeCity === "mumbai" ? "active" : ""}
            onClick={() => setActiveCity("mumbai")}
          >
            Mumbai
          </button>

          <button
            className={activeCity === "delhi" ? "active" : ""}
            onClick={() => setActiveCity("delhi")}
          >
            Delhi NCR
          </button>

          <button
            className={activeCity === "ahmedabad" ? "active" : ""}
            onClick={() => setActiveCity("ahmedabad")}
          >
            Ahmedabad
          </button>

          <button
            className={activeCity === "surat" ? "active" : ""}
            onClick={() => setActiveCity("surat")}
          >
            Surat
          </button>

          <button
            className={activeCity === "indore" ? "active" : ""}
            onClick={() => setActiveCity("indore")}
          >
            Indore
          </button>

          <button
            className={activeCity === "nagpur" ? "active" : ""}
            onClick={() => setActiveCity("nagpur")}
          >
            Nagpur
          </button>

          <button
            className={activeCity === "ujjain" ? "active" : ""}
            onClick={() => setActiveCity("ujjain")}
          >
            Ujjain
          </button>

          <button
            className={activeCity === "khandwa" ? "active" : ""}
            onClick={() => setActiveCity("khandwa")}
          >
            Khandwa
          </button>
        </div>

        <div className="service-panel">
          {activeCity === "chennai" && (
            <>
              <h3>Chennai - One Day Heritage Trail</h3>
              <p className="service-intro">
                For schools in Chennai, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Chennai, we curate special multi-day trips
                to explore the historical Chennai.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/chennai-1.webp"
                  alt="Chennai Heritage"
                />
                <img
                  src="/images/service-pics/oneday/chennai-2.webp"
                  alt="Chennai Museum"
                />
                <img
                  src="/images/service-pics/oneday/chennai-3.webp"
                  alt="Chennai Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Mahabalipuram</strong> - Shore Temple, Five Rathas,
                  Arjuna's Penance and Krishna's Butter Ball.
                </li>
                <li>
                  <strong>Egmore Government Museum</strong> - Chola bronzes,
                  Archaeological gallery and Children's museum.
                </li>
                <li>
                  <strong>Fort St. George</strong> - Fort Museum, St. Mary's
                  Church and Early colonial structures.
                </li>
                <li>
                  <strong>Historic Churches of Chennai</strong> - Santhome
                  Basilica, Luz Church, Armenian Church and St. Thomas Church.
                </li>
                <li>
                  <strong>Kanchipuram</strong> - Kailasanathar temple, Vaikunta
                  Perumal Temple and Ancient Jain Temples.
                </li>
                <li>
                  <strong>Gingee Fort</strong> - Rajagiri Citadel, Kalyana Mahal
                  and Medieval fortification structures.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Architecture observation and sketching exercises.</li>
                <li>Artifact analysis and museum exploration activities.</li>
                <li>Epigraphy and inscription interpretation.</li>
                <li>Historical mapping and heritage documentation projects.</li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1,100 - ₹1,700 per student depending on the destination.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "bangalore" && (
            <>
              <h3>Bangalore - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Bangalore, we transform a single school day into
                an unforgettable, hands-on learning adventure beyond the
                classroom. For schools outside Bangalore, we curate special
                multi-day trips to explore the historical Bangalore.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/bangalore-1.webp"
                  alt="Bangalore Heritage"
                />
                <img
                  src="/images/service-pics/oneday/bangalore-2.webp"
                  alt="Bangalore Fort"
                />
                <img
                  src="/images/service-pics/oneday/bangalore-3.webp"
                  alt="Bangalore Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Begur Fort</strong> - Early medieval site known for
                  the famous inscription containing the earliest reference to
                  the name “Bengaluru”.
                </li>
                <li>
                  <strong>Shravanabelagola</strong> - Jain Heritage Trail - Rock
                  cut architecture and Basadi traditions.
                </li>
                <li>
                  <strong>Bangalore Fort</strong> - Originally built by
                  Kempegowda and later expanded with stone fortifications.
                </li>
                <li>
                  <strong>Mysuru-Srirangapatna Trail</strong> - The majestic
                  royal palace built by Tipu Sultan.
                </li>
                <li>
                  <strong>Someshwara Temple, Halasuru</strong> - Chola-period
                  temple with Vijayanagara additions showcasing Dravidian
                  architecture.
                </li>
                <li>
                  <strong>Mysuru Channapatna Trail</strong> - Experience
                  traditional wooden toys and how they are made.
                </li>
                <li>
                  <strong>Bangalore Heritage Trail </strong> - Tipu Sultan's
                  Summer palace.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Guided heritage walks identifying architectural and defensive
                  features.
                </li>
                <li>
                  Inscription reading and historical interpretation exercises.
                </li>
                <li>Architecture sketching and sculpture documentation.</li>
                <li>
                  Group discussions on city growth, governance, and heritage
                  conservation.
                </li>
                <li>
                  Interactive tasks such as heritage quizzes, mapping
                  activities, and model making.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "hyderabad" && (
            <>
              <h3>Hyderabad - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Hyderabad, we transform a single school day into
                an unforgettable, hands-on learning adventure beyond the
                classroom. For schools outside Hyderabad, we curate special
                multi-day trips to explore the historical Hyderabad.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/hyderabad-1.webp"
                  alt="Hyderabad Heritage"
                />
                <img
                  src="/images/service-pics/oneday/hyderabad-2.webp"
                  alt="Hyderabad Fort"
                />
                <img
                  src="/images/service-pics/oneday/hyderabad-3.webp"
                  alt="Hyderabad Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Golconda Fort & Qutub Shahi Tombs</strong> - Study
                  fortification systems, acoustics, water management, and Deccan
                  Sultanate architecture.
                </li>
                <li>
                  <strong>Salar Jung Museum</strong> - Explore global
                  collections and learn how artifacts reveal cultural and
                  historical connections.
                </li>
                <li>
                  <strong>
                    Chowmahalla Palace, Bansilalpet Stepwell & Badshahi
                    Ashurkhana
                  </strong>
                  - Understand Nizam-era court life, water systems, and
                  religious-cultural spaces.
                </li>
                <li>
                  <strong>Warangal Fort & Thousand Pillar Temple</strong> -
                  Examine Kakatiya urban planning, temple architecture, and fort
                  design.
                </li>
                <li>
                  <strong>Ramappa Temple & Pandavula Guhalu</strong> - Study
                  advanced temple construction techniques and prehistoric rock
                  art traditions.
                </li>
                <li>
                  <strong>Bhuvanagiri Fort</strong> - Learn about hill fort
                  engineering and landscape-based defence strategies.
                </li>
                <li>
                  <strong>Bidar Fort</strong> - Explore Indo-Persian
                  architecture and cultural synthesis in the Deccan region.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Fort defence analysis, mapping, and architectural observation.
                </li>
                <li>
                  Artifact interpretation and museum-based investigation
                  exercises.
                </li>
                <li>
                  Temple architecture study, sculpture analysis, and rock art
                  observation.
                </li>
                <li>
                  Water system and urban planning investigations (stepwells and
                  forts).
                </li>
                <li>
                  Group challenges like fort defence strategy, cultural
                  interpretation, and historical storytelling.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "mumbai" && (
            <>
              <h3>Mumbai - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Mumbai, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Mumbai, we curate special multi-day trips to
                explore the historical Mumbai.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/mumbai-1.webp"
                  alt="Mumbai Heritage"
                />
                <img
                  src="/images/service-pics/oneday/mumbai-2.webp"
                  alt="Mumbai Fort"
                />
                <img
                  src="/images/service-pics/oneday/mumbai-3.webp"
                  alt="Mumbai Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Elephanta Caves</strong> - UNESCO heritage site known
                  for its rock-cut sculptures and depictions of Hindu mythology.
                </li>
                <li>
                  <strong>Kanheri Caves</strong> - Ancient Buddhist monastic
                  complex showcasing rock-cut architecture and water management
                  systems.
                </li>
                <li>
                  <strong>Jogeshwari & Mahakali Caves</strong> - Early cave
                  temples reflecting evolving architectural styles.
                </li>
                <li>
                  <strong>Vasai & Worli Forts</strong> - Coastal forts
                  highlighting military planning and maritime defense.
                </li>
                <li>
                  <strong>Colonial Fort Area</strong> - Historic district with
                  Gothic and colonial-era civic buildings.
                </li>
                <li>
                  <strong>CSMVS & Dr. Bhau Daji Lad Museum</strong> - Museums
                  preserving artifacts and cultural history of the region.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Heritage treasure hunts and archaeological exploration
                  challenges.
                </li>
                <li>
                  Decoding sculptures, symbols, and religious iconography.
                </li>
                <li>Architecture observation and mapping activities.</li>
                <li>
                  Group discussions on heritage conservation and urban
                  evolution.
                </li>
                <li>
                  Museum artifact identification and interpretation exercises.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "delhi" && (
            <>
              <h3>Delhi NCR - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Delhi NCR, we transform a single school day into
                an unforgettable, hands-on learning adventure beyond the
                classroom. For schools outside Delhi NCR, we curate special
                multi-day trips to explore the historical Delhi.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/delhi-1.webp"
                  alt="Delhi Heritage"
                />
                <img
                  src="/images/service-pics/oneday/delhi-2.webp"
                  alt="Delhi Fort"
                />
                <img
                  src="/images/service-pics/oneday/delhi-3.webp"
                  alt="Delhi Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>
                    Aravalli Prehistoric Landscape (Mangar Village trail)
                  </strong>{" "}
                  - Exploring Stone Age lifeways and prehistoric archaeology.
                </li>
                <li>
                  <strong>Rakhigarhi</strong> - Discovering the urban planning
                  and culture of the Indus Valley Civilisation.
                </li>
                <li>
                  <strong>Purana Qila</strong> - Understanding the
                  archaeological layers and history of ancient Delhi.
                </li>
                <li>
                  <strong>Tughlaqabad Fort and Humayun's Tomb</strong> -
                  Understanding medieval military architecture and defence
                  systems.
                </li>
                <li>
                  <strong>Taj Mahal, Agra Fort & Fatehpur Sikri</strong> -
                  Examining Mughal power, architecture, and urban planning.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Landscape analysis and archaeological observation exercises.
                </li>
                <li>Stratigraphy and artifact interpretation activities.</li>
                <li>
                  Architectural investigation through sketching and mapping.
                </li>
                <li>
                  Group challenges like settlement design, fort defence, and
                  city planning.
                </li>
                <li>
                  Roleplay, debates, and evidence-based historical
                  interpretation.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  ₹1200 - ₹2000 per student (depending on group size and site
                  selection).
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "ahmedabad" && (
            <>
              <h3>Ahmedabad - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Ahmedabad, we transform a single school day into
                an unforgettable, hands-on learning adventure beyond the
                classroom. For schools outside Ahmedabad, we curate special
                multi-day trips to explore the historical Ahmedabad.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/ahmedabad-1.webp"
                  alt="Ahmedabad Heritage"
                />
                <img
                  src="/images/service-pics/oneday/ahmedabad-2.webp"
                  alt="Ahmedabad Stepwell"
                />
                <img
                  src="/images/service-pics/oneday/ahmedabad-3.webp"
                  alt="Ahmedabad Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Vadnagar Museum</strong> - Exploring the
                  archaeological and cultural history of one of Gujarat's oldest
                  continuously inhabited settlements.
                </li>

                <li>
                  <strong>Rani ki Vav & Adalaj Stepwell</strong> - Understanding
                  stepwell architecture, water management systems, and artistic
                  traditions.
                </li>

                <li>
                  <strong>Modhera Sun Temple</strong> - Studying temple
                  architecture, astronomy, and sacred landscapes.
                </li>

                <li>
                  <strong>Lothal & National Maritime Heritage Complex</strong>-
                  Discovering Harappan urban planning, trade networks, and
                  maritime heritage.
                </li>

                <li>
                  <strong>Champaner-Pavagadh Archaeological Park</strong> -
                  Exploring medieval urbanism, fortifications, and cultural
                  interactions.
                </li>

                <li>
                  <strong>Siddhapur & Rudra Mahalaya</strong> - Investigating
                  Solanki-era temple architecture and historical landscapes.
                </li>

                <li>
                  <strong>Vadodara Cultural Circuit</strong> - Examining royal
                  patronage, museums, and educational institutions.
                </li>

                <li>
                  <strong>Devnimori, Shamlaji & Roda Temples</strong> -
                  Understanding Buddhist archaeology, temple evolution, and
                  regional history.
                </li>

                <li>
                  <strong>Ahmedabad Heritage Walk</strong> - Experiencing
                  Sultanate architecture, historic neighbourhoods, and living
                  heritage.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Archaeological interpretation, excavation simulation, and
                  artifact classification exercises.
                </li>

                <li>
                  Architectural sketching, temple layout mapping, and sculpture
                  decoding activities.
                </li>

                <li>
                  Heritage mapping, trade route analysis, and urban planning
                  investigations.
                </li>

                <li>
                  Stepwell engineering studies, geometry in architecture, and
                  water system exploration.
                </li>

                <li>
                  Group challenges including storytelling, cultural
                  interpretation, timeline reconstruction, and preservation
                  discussions.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "surat" && (
            <>
              <h3>Surat - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Surat, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Surat, we curate special multi-day trips to
                explore the historical Surat.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/surat-1.webp"
                  alt="Surat Heritage"
                />
                <img
                  src="/images/service-pics/oneday/surat-2.webp"
                  alt="Surat Fort"
                />
                <img
                  src="/images/service-pics/oneday/surat-3.webp"
                  alt="Surat Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Surat Fort</strong> - Historic fort built to defend
                  the city during its period as a major trading port.
                </li>
                <li>
                  <strong>Kadia Dungar</strong> - A 1st-2nd century CE rock-cut
                  Buddhist monument offering insight into early religious
                  architecture.
                </li>
                <li>
                  <strong>Dutch, English & Armenian Cemeteries</strong> -
                  Heritage sites reflecting the presence of European traders in
                  Surat.
                </li>
                <li>
                  <strong>Udvada</strong> - Important center of Parsi culture
                  and heritage.
                </li>
                <li>
                  <strong>Dabhoi</strong> - Historic fortified town known for
                  its medieval gateways and architecture.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Guided heritage walks and site interpretation.</li>
                <li>
                  Observation and documentation of architectural features.
                </li>
                <li>
                  Group discussions on trade, culture, and historical exchange.
                </li>
                <li>
                  Interactive heritage activities encouraging critical thinking.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "indore" && (
            <>
              <h3>Indore - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Indore, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Indore, we curate special multi-day trips to
                explore the historical Indore.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/indore-1.webp"
                  alt="Indore Heritage"
                />
                <img
                  src="/images/service-pics/oneday/indore-2.webp"
                  alt="Indore Fort"
                />
                <img
                  src="/images/service-pics/oneday/indore-3.webp"
                  alt="Indore Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>
                    Rajwada Palace, Krishnapura Chhatris and Lal Bagh Palace
                  </strong>{" "}
                  - Understanding the history, administration, and architectural
                  legacy of the Holkar dynasty.
                </li>
                <li>
                  <strong>Bagh Caves and Dhamnar Caves</strong> - Discovering
                  Buddhist rock-cut architecture, monastic traditions, and
                  ancient artistic heritage.
                </li>
                <li>
                  <strong>
                    Maheshwar Fort, Navdatoli and the Narmada Ghats
                  </strong>{" "}
                  - Exploring Chalcolithic cultures, river valley settlements,
                  fort architecture, and living craft traditions.
                </li>
                <li>
                  <strong>Mandu</strong> - Studying medieval urban planning,
                  water management systems, palaces, and Indo-Islamic
                  architecture.
                </li>
                <li>
                  <strong>
                    Tribal Museum and Indira Gandhi Rashtriya Manav Sangrahalaya
                  </strong>{" "}
                  - Understanding tribal cultures, indigenous traditions,
                  vernacular architecture, and ethnographic interpretation.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Guided heritage walks and monument exploration.</li>
                <li>Museum-based learning and artefact analysis.</li>
                <li>
                  Architectural documentation, sketching, and photography.
                </li>
                <li>Heritage mapping and settlement studies.</li>
                <li>
                  Interactive worksheets, group challenges, and reflection
                  exercises.
                </li>
                <li>
                  Traditional craft demonstrations and cultural interactions.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "nagpur" && (
            <>
              <h3>Nagpur - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Nagpur, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Nagpur, we curate special multi-day trips to
                explore the historical Nagpur.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/nagpur-1.webp"
                  alt="Nagpur Heritage"
                />
                <img
                  src="/images/service-pics/oneday/nagpur-2.webp"
                  alt="Nagpur Fort"
                />
                <img
                  src="/images/service-pics/oneday/nagpur-3.webp"
                  alt="Nagpur Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Ramtek Fort & Temple Complex</strong> - Includes the
                  Ram Temple, Karpur Baoli, Varaha statue and several medieval
                  temples around the hill.
                </li>
                <li>
                  <strong>Mansar Archaeological Site</strong> - An important
                  site associated with the Vakataka dynasty and early urban
                  settlement remains.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>Temple architecture and fortification study.</li>
                <li>
                  Sketching and documentation of sculptures and inscriptions.
                </li>
                <li>
                  Introduction to archaeological methods such as stratigraphy
                  and dating.
                </li>
                <li>Artifact interpretation using replica objects.</li>
                <li>
                  Group discussions and creative reconstruction of ancient
                  settlements.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "ujjain" && (
            <>
              <h3>Ujjain - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Ujjain, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Ujjain, we curate special multi-day trips to
                explore the historical Ujjain.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/ujjain-1.webp"
                  alt="Ujjain Heritage"
                />
                <img
                  src="/images/service-pics/oneday/ujjain-2.webp"
                  alt="Ujjain Fort"
                />
                <img
                  src="/images/service-pics/oneday/ujjain-3.webp"
                  alt="Ujjain Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <ul>
                <li>
                  <strong>Triveni Museum and Ram Janardhan Mandir</strong> -
                  Exploring sculpture traditions, temple architecture, and the
                  sacred landscape of ancient Ujjain.
                </li>
                <li>
                  <strong>Devbadla Temple Site</strong> - Investigating the
                  evolution of early temple architecture and archaeological
                  interpretation.
                </li>
                <li>
                  <strong>Dharmarajeshwar Temple and Dhamnar Caves</strong> -
                  Discovering rock-cut architecture, monastic traditions, and
                  ancient artistic heritage.
                </li>
              </ul>

              <h4>Learning Activities</h4>
              <ul>
                <li>
                  Architectural documentation, sketching, and photography.
                </li>
                <li>Heritage mapping and settlement studies.</li>
                <li>
                  Interactive worksheets, group challenges, and reflection
                  exercises.
                </li>
                <li>
                  Storytelling sessions focused on archaeology, history, and
                  heritage conservation.
                </li>
                <li>
                  - Archaeological site interpretation and landscape
                  observation.
                </li>
              </ul>

              <h4>Indicative Cost</h4>
              <ul>
                <li>₹650 per student (for groups around 100 students).</li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          {activeCity === "khandwa" && (
            <>
              <h3>Khandwa - One Day Heritage Trail</h3>

              <p className="service-intro">
                For schools in Khandwa, we transform a single school day into an
                unforgettable, hands-on learning adventure beyond the classroom.
                For schools outside Khandwa, we curate special multi-day trips
                to explore the historical Khandwa.
              </p>

              <div className="service-gallery">
                <img
                  src="/images/service-pics/oneday/khandwa-1.webp"
                  alt="Khandwa Heritage"
                />
                <img
                  src="/images/service-pics/oneday/khandwa-2.webp"
                  alt="Khandwa Fort"
                />
                <img
                  src="/images/service-pics/oneday/khandwa-3.webp"
                  alt="Khandwa Temple"
                />
              </div>

              <h4>Key Heritage Sites</h4>
              <h4>1. Maheshwar</h4>

              <ul>
                <li>
                  <strong>Maheshwar Fort Complex</strong> - Explore the historic
                  fort associated with Ahilya Bai Holkar.
                </li>
                <li>
                  <strong>Rajwada Palace</strong> - Discover royal life and
                  architecture of the Holkar period.
                </li>
                <li>
                  <strong>Narmada Ghats</strong> - Study riverfront temple
                  architecture and cultural life along the Narmada.
                </li>
                <li>
                  <strong>Rehwa Society</strong> - Experience traditional
                  Maheshwari handloom weaving and crafts.
                </li>
              </ul>

              <h4>2. Burhanpur</h4>

              <ul>
                <li>
                  <strong>Shahi Qila</strong> - Mughal royal fort and palace
                  complex.
                </li>
                <li>
                  <strong>Royal Hammam</strong> - Historic bathhouse associated
                  with Mumtaz Mahal.
                </li>
                <li>
                  <strong>Ahukhana</strong> - Site connected to the original
                  plan of the Taj Mahal.
                </li>
                <li>
                  <strong>Jama Masjid</strong> - A major Mughal-era mosque
                  showcasing Islamic architecture.
                </li>
                <li>
                  <strong>Khooni Bhandara</strong> - A remarkable 400-year-old
                  underground water management system.
                </li>
              </ul>

              <h4>Learning Activities</h4>

              <ul>
                <li>Heritage walks and architectural observation.</li>
                <li>Interactive role-playing of historical characters.</li>
                <li>Creative sketching and monument documentation.</li>
                <li>Treasure hunts and heritage discovery games.</li>
                <li>Storytelling and reflection sessions.</li>
              </ul>

              <h4>Indicative Cost</h4>

              <ul>
                <li>
                  Approximately ₹800 - ₹1500 per student depending on group size
                  and itinerary.
                </li>
                <li>
                  Includes AC transport, entry fees, meals, facilitators and
                  activity materials.
                </li>
              </ul>

              <p>
                Programs can be customised according to school requirements. For
                detailed planning and bookings, please contact us through the
                contact section.
              </p>
            </>
          )}

          <div className="back-to-cities-wrapper">
            <button className="back-to-cities-btn" onClick={scrollToCities}>
              Back to Cities ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OneDay;
