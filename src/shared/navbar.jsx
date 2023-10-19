const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <nav className="navbar">
            <div className="logo">
              <img src="/assets/img/logo/logos-circle.png" alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#feature">feature</a>
                </li>
                <li>
                  <a href="#portfolio">portfolio</a>
                </li>
                <li>
                  <a href="#resume">resume</a>
                </li>
                <li>
                  <a href="#testimonial">testimonial</a>
                </li>
                <li>
                  <a href="#clients">clients</a>
                </li>
                <li>
                  <a href="#pricing">pricing</a>
                </li>
                <li>
                  <a href="#blog">blog</a>
                </li>
                <li>
                  <a href="#contacts">contacts</a>
                </li>
              </ul>
            </div>
            <div className="cart">
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
              <button className="btn btn-hover">Hire Me</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
