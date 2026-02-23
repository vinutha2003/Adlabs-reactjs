import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./sections/about-section";
import Services from "./sections/services";
import Contact from "./sections/contact-section";
import GetStarted from "./pages/Getstarted";
import Quote from "./pages/Quote";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}
