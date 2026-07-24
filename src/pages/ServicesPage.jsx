import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesStickyBar from "../components/ServicesStickyBar";

import OneDay from "./OneDay";
import MultiDay from "./MultiDay";
import Workshops from "./Workshops";
import Facilitator from "./Facilitator";
import Expo from "./Expo";
import Custom from "./Custom";

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="services-page">
      <OneDay />
      <MultiDay />
      <Workshops />
      <Facilitator />
      <Expo />
      <Custom />
      <ServicesStickyBar />
    </main>
  );
}

export default ServicesPage;
