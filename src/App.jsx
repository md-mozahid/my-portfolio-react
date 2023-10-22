import { Route, Routes } from 'react-router-dom'
// import Education from './components/sections/resume/educations'
import Experience from './components/sections/resume/experience'
import Interview from './components/sections/resume/interview'
import Skills from './components/sections/resume/skills'
import Layout from './layout/layout'
import About from './pages/about'
import Clients from './pages/clients'
import Contact from './pages/contact'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Services from './pages/services'
import Testimonials from './pages/testimonials'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />}>
            {/* <Route path="educations" element={<Education />} /> */}
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="interview" element={<Interview />} />
          </Route>
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
