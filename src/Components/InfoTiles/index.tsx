import { Link } from "react-router-dom";

const index = (card) => {
  return (
    <Link to={card?.data?.href} className="card">
      <h2 className="card__heading">{card?.data?.heading}</h2>
      <h5 className="card__subhead">{card?.data?.subheading}</h5>
      <p className="text__small card__desc">{card?.data?.description}</p>
      <div className="card__img">
        <img
          src={card?.data?.img?.path}
          alt={card?.data?.img?.altText}
          width={card?.data?.img?.width}
          height={card?.data?.img?.height}
          className="card__icon"
        />
      </div>
      <span className="card__bg"></span>
    </Link>
  );
};

export default index;
