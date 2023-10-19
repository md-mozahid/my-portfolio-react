const contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="content">
            <div className="title">
              <span>contact</span>
              <h2>Contact With Me</h2>
            </div>
            <div className="contact-area">
              <div className="relationship">
                <img
                  src="/assets/img/contact/contact1.png"
                  alt="contact image"
                />
                <h4>Nevine Acotanza</h4>
                <span>Chief Operating Officer</span>
                <p>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <div>
                  <span>Phone: +01234567890</span>
                  <span>Email: admin@example.com</span>
                </div>
                <div className="l-icons">
                  <h4>find with me</h4>
                  <div className="fw-i">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
              <div className="form-area">
                <form action="#">
                  <div className="input1">
                    <input
                      className="inputVal"
                      type="text"
                      placeholder="Your name"
                    />
                    <input
                      className="inputVal"
                      type="text"
                      placeholder="Your phone number"
                    />
                  </div>
                  <input
                    className="inputVal"
                    type="text"
                    placeholder="Your email"
                  />
                  <input
                    className="inputVal"
                    type="text"
                    placeholder="Your subject"
                  />
                  <textarea
                    className="inputVal"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                  ></textarea>
                  <button className="btn btn-fw btn-hover" type="submit">
                    Send Message
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default contact;
