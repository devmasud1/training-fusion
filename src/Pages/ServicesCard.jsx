import { Link } from "react-router-dom";

const ServicesCard = ({ item }) => {
  const {id, thumbnail_img, title, price, description } = item || {};
  return (
    
    <div className="card card-compact  bg-base-100 shadow-xl" data-aos="fade-up"
    data-aos-duration="3000">
      <figure className="max-h-[300px]">
        <img
          src={thumbnail_img}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 200 ? description.slice(0, 200) : description}
        </p>
        <div className="flex justify-between items-center mt-3">
          <h2 className="card-title">${price}</h2>

          <Link to={`/service/${id}`}>
            <button className="btn btn-neutral">show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
