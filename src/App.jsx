import { Route, Routes } from 'react-router-dom'
import Skills from './components/sections/resume/skills'
import Layout from './layout/layout'
import Clients from './pages/clients'
import Contact from './pages/contact'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Testimonials from './pages/testimonials'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
