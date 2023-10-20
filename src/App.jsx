import { BrowserRouter } from 'react-router-dom'
import Skill from './components/sections/resume/skill'
import Clients from './pages/clients'
import Contact from './pages/contact'
import Hero from './pages/hero'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Services from './pages/services'
import Testimonials from './pages/testimonials'
import Footer from './shared/footer'
import Navbar from './shared/navbar'

// import Service from './components/sections/service/service'
// import Contact from './components/sections/contact/contacts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
     
        <Hero />
        
        <Skill />
        
        <Services />
        
        <Portfolio />
       
        <Resume />
      
        <Testimonials />
       
        <Clients />
        <hr />
        <Contact />
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
