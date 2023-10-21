import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto flex items-center justify-between px-5 py-8">
        <span className="text-3xl">
          <Link to="/">Logo</Link>
        </span>
        <div className="hidden md:block">
          <ul className="inline-flex space-x-4 uppercase">
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
        </div>
        <div className="flex items-center">
          <div className="hidden md:block">
            <i className="fa-solid fa-bars cursor-pointer  text-2xl mr-3"></i>
          </div>
          <button className="btn py-3 border hidden md:block border-[#475569]">
            Hire Me
          </button>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar
