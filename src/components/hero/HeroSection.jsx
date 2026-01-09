import DocumentCarousel from "../common/DocumentCarousel"

const HeroSection = () => {
  return (
     <>
      <section className="hero-section">
      <div className="container-fluid">
        <div className="row min-vh-100 align-items-center hero-custom">
         
          <div className="col-lg-6 hero-col" data-aos="fade-right">
            <h6 className="hero-text hero-text-c">AI-Powered</h6>

            <h1 className="hero-text">
              Document Automation <br /> & Fraud Detection
            </h1>

            <p className="hero-p mb-4">
              Enhance security, accuracy, and efficiency with our cutting-edge
              AI solutions for seamless document processing and fraud
              prevention.
            </p>

            <div className="d-flex gap-3">
              <button className="hero-btn border-0">Get a Demo</button>

              <button className="hero-btn border-0">Explore Solutions</button>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
     <DocumentCarousel/>
          </div>
        </div>
      </div>
    </section>
     </>
  )
}

export default HeroSection