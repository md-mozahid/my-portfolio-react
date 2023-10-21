import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Skill from './components/sections/resume/skill'
import Education from './components/sections/resume/educations'
import Experience from './components/sections/resume/experience'
import Interview from './components/sections/resume/interview'
import Skills from './components/sections/resume/skills'
import Clients from './pages/clients'
import Contact from './pages/contact'
import Hero from './pages/hero'
import NotFound from './pages/notFound'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Services from './pages/services'
import Testimonials from './pages/testimonials'
import Footer from './shared/footer'
import Navbar from './shared/navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* <Hero />
        <hr />
        <Skill />       
        <Services />        
        <Portfolio />      
        <Resume />      
        <Testimonials />       
        <Clients />
        <hr />
        <Contact /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />}>
            <Route path="educations" element={<Education />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="interview" element={<Interview />} />
          </Route>
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
