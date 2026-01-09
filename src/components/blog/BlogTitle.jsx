const BlogTitle = ({ title, subtitle, showDots = true, compact = false }) => {
  return (
    <section className="products-section">
      {showDots && (
        <img
          src="/vertical-dots.png"
          data-aos="fade-right"
          alt=""
          className="dots-bottom2"
        />
      )}

      <div className="container" data-aos="fade-up">
        <div
          className={`row blog-title-head ${
            compact ? "blog-title-compact" : ""
          }`}
        >
          <div className="col-12 text-center">
            <h2 className="hero-text">{title}</h2>

            <p className="subtitle hero-text-c my-0 blog-subtitle">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
