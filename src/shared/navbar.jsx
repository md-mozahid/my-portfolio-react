import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="mx-auto flex items-center justify-between px-5 py-6 ">
        <span className="text-3xl">
          <Link to="/">Logo</Link>
        </span>
        <div className="hidden md:block">
          <ul className="inline-flex space-x-4 uppercase">
            {['home', 'skills', 'portfolio', 'clients', 'contact'].map((item, index) => (
              <li key={index}>
                <Link to={item}>{item}</Link>
              </li>
            ))}
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
  );
};

export default Navbar;
