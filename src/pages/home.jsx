import Skills from '../components/sections/resume/skills'
import Clients from './clients'
import Contact from './contact'
import Hero from './hero'
import Portfolio from './portfolio'

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Portfolio />
      <Clients />
      <Contact />
    </>
  )
}

export default Home
