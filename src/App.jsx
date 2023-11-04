import { Route, Routes } from "react-router-dom";
import {
  Skills,
  Services,
  Portfolios,
  Testimonials,
  Clients,
  Contacts,
  NotFoundPage,
  Navbar,
  Footer,
  Home,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolios />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
