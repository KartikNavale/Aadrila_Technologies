const AboutUsHero = () => {
  return (
    <section className="aboutus-hero">
      <div className="container py-5"  data-aos="fade-up">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 col-md-8 col-11">
            <div className="about-card text-center shadow-sm">
              <h2 className="mb-1 hero-text">About Us</h2>
              <p className=" mb-0 hero-text-c">
                Meet the Minds Shaping Document Automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 justify-content-start mb-5"  data-aos="fade-right">
        <div className="col-12">
          <div className="info-pill d-flex align-items-center">
            <p className="flex-grow-1 mb-0 text-end pe-md-4 info-pill-p">
              To redefine document management with cutting-edge technology that
              ensures accuracy, efficiency, and trust.
            </p>

            <div className="pill-divider d-none d-md-block"></div>

            <div className="pill-icon text-center pill-icon-main">
              <p className="text-start">
                Our
                <br />
                Vision
              </p>
              <img src="/Frame-1.png" alt="vision" className="pill-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 justify-content-end"  data-aos="fade-right">
        <div className="col-12">
          <div className="info-pill-2 d-flex align-items-center">
            <div className="pill-icon text-center pill-icon-main">
              <img src="/Frame-2.png" alt="mission" className="pill-icon" />
              <p className="text-end">
                Our
                <br />
                Mission
              </p>
            </div>

            <div className="pill-divider-2 d-none d-md-block"></div>

            <p className="flex-grow-1 mb-0 text-start ps-md-5 info-pill-p info-pill-p-mobi">
              To redefine document management with cutting-edge technology that
              ensures accuracy, efficiency, and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
