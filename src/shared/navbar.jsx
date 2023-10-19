import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="mx-auto flex items-center justify-between px-5 py-3">
      <span className="text-3xl">Logo</span>

      <ul className="inline-flex space-x-4 uppercase ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="resume">Resume</Link>
        </li>
        <li>
          <Link to="testimonial">Testimonial</Link>
        </li>
        <li>
          <Link to="clients">Clients</Link>
        </li>
        <li>
          <Link to="contact">Contacts</Link>
        </li>
      </ul>
      <div className="">
        <button className="btn btn-hover">Hire Me</button>
      </div>
    </div>
  )
}

export default Navbar
