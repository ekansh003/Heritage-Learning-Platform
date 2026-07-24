import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import "react-google-recaptcha";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:city" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
