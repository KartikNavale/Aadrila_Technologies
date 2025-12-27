const OurProductLeft = ({
  badge,
  title,
  features = [],
  benefits = [],
  image,
}) => {
  return (
    <section className="our-product-right position-relative">
      <img
        src="/Combined-Shape-left.png"
        alt="circle-bg"
        className="circle-bg-left"
      />
      <div className="container">
        <div className="row align-items-center my-5 left-product">
          <div className="col-lg-6 col-md-6 col-12 text-center order-2 order-md-1">
            <img src={image} alt="Product Visual" className="product-img" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 powered-doc ps-4 order-1 order-md-2">
            <span className="badge-product">{badge}</span>

            <h2 className="left-title">{title}</h2>

            <div className="left-text">
              <strong>Features:</strong>
              <ul>
                {features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <strong>Benefits:</strong>
              <ul>
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="d-flex gap-3 mt-3 flex-wrap">
              <button className="custom-btn border-0">Learn More</button>
              <button className="custom-btn border-0">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductLeft;
