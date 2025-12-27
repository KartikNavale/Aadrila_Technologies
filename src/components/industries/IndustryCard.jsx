const IndustryCard = ({ img, title, text }) => {
  return (
    <>
      <div className="card text-center">
        <div className="d-flex justify-content-center mt-3">
          <img
            src={img}
            alt={title}
            className="card-img"
          />
        </div>

        <div className="card-body">
          <h5 className="card-head">{title}</h5>
          <p className="card-text">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default IndustryCard;
