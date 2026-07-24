import Services from "../components/Services";
import OurWork from "./OurWork";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import ExpertsSlider from "../components/ExpertsSlider";
import logo from "../assets/img/logo.png";

function Home() {
  return (
    <main id="home">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <img src={logo} alt="Exploristory Logo" className="hero-logo" />
          </div>

          <div className="hero-right">
            <h1>
              <strong>EXPERIENCE HISTORY</strong> BEING UNCOVERED THROUGH
              IMMERSIVE, HANDS-ON TRIPS AND EXPEDITIONS
            </h1>
          </div>
        </div>
      </header>
      <Gallery />
      <div className="container">
        <div className="about-content">
          <div className="about-text full-width">
            <h2>ABOUT EXPLORISTORY</h2>

            <p>
              Exploristory is an experiential learning initiative that brings
              history and archaeology to life by transforming them from subjects
              of rote learning into journeys of discovery, curiosity, and
              critical thinking. Through immersive field experiences, mock
              excavations, artefact analysis, historical simulations, and
              interactive learning labs, it enables learners to actively engage
              with the past and experience history as a dynamic, hands-on
              process of exploration.
            </p>
          </div>
        </div>

        <h3 className="subsection-title">WHY CHOOSE EXPLORISTORY?</h3>

        <div className="why-grid">
          <div className="why-card">
            <h4>EXPERT LED</h4>

            <p>
              Led by experienced archaeologists and historians, our programs
              bring deep expertise and real-world insight into Indian History
              and Archaeology.
            </p>
          </div>

          <div className="why-card">
            <h4>CURRICULUM ALIGNED</h4>

            <p>
              Designed in line with CBSE, IB, ICSE, IGCSE and Cambridge
              frameworks, our programs support NEP goals through meaningful
              experiential and cultural learning.
            </p>
          </div>

          <div className="why-card">
            <h4>IMMERSIVE EXPERIENCE</h4>

            <p>
              Go beyond textbooks with hands-on activities, historical site
              visits, and interactive experiences that make the past come alive.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <OurWork />
      <Team />
      <ExpertsSlider />
      <FAQ />
      <Contact />
      <a href="#contact" className="floating-contact-btn">
        STEP INTO HISTORY NOW
      </a>
    </main>
  );
}

export default Home;
