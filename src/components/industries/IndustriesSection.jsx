import IndustryCard from "./IndustryCard";

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="container mx-5 custom-main-ind">
        <div className="row align-items-center ">
          <div className="col-lg-5 position-relative custom-left">
            <p className="subtitle hero-text-c">
              AI-driven innovation for growth.
            </p>
            <h2 className="title hero-text">Industries We Empower</h2>

            <img src="/Combined-Shape-Copy.png" alt="" className="circle-bg" />
          </div>

          <div className="col-lg-7">
            {/* DESKTOP / TABLET  */}
            <div className="cards-area d-none d-md-block">
              <div className="card-pos card-1">
                <IndustryCard
                  img="/Healthcare_Icon.png"
                  title="Healthcare"
                  text="Streamline patient record management and ensure compliance with HIPAA standards."
                />
              </div>

              <div className="card-pos card-2">
                <IndustryCard
                  img="/Lending_Icon.png"
                  title="Lending"
                  text="Ensure faster loan approvals with fraud detection and instant verification."
                />
              </div>

              <div className="card-pos card-3">
                <IndustryCard
                  img="/Insurance_Icon.png"
                  title="Insurance"
                  text="Automate claims processing with accurate document validation."
                />
              </div>

              <img src="/vertical-dots.png" className="dots-top" alt="" />
              <img src="/horizontal-dots.png" className="dots-bottom" alt="" />
            </div>

            {/*MOBILE CAROUSEL*/}
            <div className="d-md-none" style={{ marginLeft: "24px" }}>
              <div
                id="industryCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-touch="true"
                data-bs-interval="2500"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <IndustryCard
                      img="/Healthcare_Icon.png"
                      title="Healthcare"
                      text="Streamline patient record management and ensure compliance with HIPAA standards."
                    />
                  </div>

                  <div className="carousel-item">
                    <IndustryCard
                      img="/Lending_Icon.png"
                      title="Lending"
                      text="Ensure faster loan approvals with fraud detection and instant verification."
                    />
                  </div>

                  <div className="carousel-item">
                    <IndustryCard
                      img="/Insurance_Icon.png"
                      title="Insurance"
                      text="Automate claims processing with accurate document validation."
                    />
                  </div>
                </div>

                <div className="carousel-indicators mt-3">
                  <button
                    type="button"
                    data-bs-target="#industryCarousel"
                    data-bs-slide-to="0"
                    className="active"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#industryCarousel"
                    data-bs-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#industryCarousel"
                    data-bs-slide-to="2"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
