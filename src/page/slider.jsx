

const Slider = () => {
  return (
    <div className="container">
        <div className="content">
          <div className="l-side">
            <div className="title">
              <span>WELCOME TO MY WORLD</span>
              <h1>Hi, I’m Jone Lee</h1>
              <h2>a Professional Developer</h2>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </div>
            <div className="social-icons">
              <div className="l-icons">
                <h4>find with me</h4>
                <div className="fw-i">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <!-- <i className="fas fa-envelope"></i> -->
                </div>
              </div>
              <div className="r-icons">
                <h4>best skill on</h4>
                <div className="img-i">
                  <img src="/assets/img/icons/icons-01.png" alt="icon" />
                  <img src="/assets/img/icons/icons-02.png" alt="icon" />
                  <img src="/assets/img/icons/icons-03.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="r-side">
            <img src="/assets/img/slider/banner-01.png" alt="banner-01" />
          </div>
        </div>
        <hr />
      </div>
  );
}

export default Slider
