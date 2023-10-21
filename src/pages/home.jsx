import Clients from './clients'
import Contact from './contact'
import Hero from './hero'
import Portfolio from './portfolio'
import Resume from './resume'
import Services from './services'
import Testimonial from './testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Clients />
      <Contact />
    </>
  )
}

export default Home
