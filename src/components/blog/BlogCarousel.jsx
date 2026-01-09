import BlogCard from "./BlogCard";

const BlogCarousel = () => {
  return (
    <section className="blog-carousel-section" data-aos="fade-right">
      <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* SLIDE 1 */}
          <div className="carousel-item active">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                <BlogCard />
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-none d-md-flex justify-content-center">
                <BlogCard />
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-center">
                <BlogCard />
              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="carousel-item">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                <BlogCard />
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-none d-md-flex justify-content-center">
                <BlogCard />
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-center">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button
            className="carousel-btn border-0"
            type="button"
            data-bs-target="#blogCarousel"
            data-bs-slide="prev"
          >
            <img src="/Left arrow.png" alt="Previous" />
          </button>

          <button
            className="carousel-btn border-0"
            type="button"
            data-bs-target="#blogCarousel"
            data-bs-slide="next"
          >
            <img src="/Right Arrow.png" alt="Next" />
          </button>
        </div>
        <img
          className="dots-bottom3"
          data-aos="fade-left"
          alt=""
          src="/horizontal-dots.png"
        />
      </div>
    </section>
  );
};

export default BlogCarousel;
