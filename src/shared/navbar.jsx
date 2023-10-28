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
              <Link to="resume">Education</Link>
            </li>
            <li>
              <Link to="/skills">Skill</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="clients">Client</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className=" mr-3 md:hidden">
            <i className="fa-solid fa-bars cursor-pointer text-2xl"></i>
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
