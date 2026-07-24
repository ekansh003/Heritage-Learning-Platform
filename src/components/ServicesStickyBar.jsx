import { Link } from "react-router-dom";

function ServicesStickyBar() {
  return (
    <div className="services-sticky-bar">
      <Link to="/#services" className="sticky-btn secondary">
        ← Back to Services
      </Link>

      <Link to="/#contact" className="sticky-btn primary">
        STEP INTO HISTORY NOW
      </Link>
    </div>
  );
}

export default ServicesStickyBar;
