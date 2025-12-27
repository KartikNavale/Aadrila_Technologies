const ContactUs = () => {
  return (
    <section className="contact-section py-5 position-relative">
      <div className="container">
        <div className="row align-items-start g-4">
          <img className="dots-bottom4" alt="" src="/horizontal-dots.png"></img>
          <div className="col-lg-5 col-md-12">
            <h2 className="fw-bold mb-3 hero-text">Contact Us</h2>
            <p className="mb-4 hero-text-c contact-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>

            <div className="mb-3">
              <p className="fw-semibold mb-1 blog-title">
                <span>
                  <img src="/location.png" alt="" />
                </span>{" "}
                U.S. Office
              </p>
              <p className="contact-span">
                Aadrila Technologies INC,
                <br />8 The Green, Ste R, in the City of Dover County of Kent
                Zip Code 19901.
              </p>
            </div>

            <div>
              <p className="fw-semibold mb-1">
                <span>
                  <img src="/location.png" alt="" />
                </span>{" "}
                India Office
              </p>
              <p className="contact-span">
                Aadrila Technologies Private Limited,
                <br />
                Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near
                D.N. Nagar, Andheri West, Mumbai, Maharashtra 400053.
              </p>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="card shadow-sm border-0 p-4 contact-form">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Inquiry Type"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="py-2 contact-btn custom-btn w-100"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
