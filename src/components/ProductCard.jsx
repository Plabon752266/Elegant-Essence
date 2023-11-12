import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  const { _id, name, imageUrl, brand, price, rating, productDescription } =
    data;
//   console.log(Object.keys(data).join(","));
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} className="h-48 " alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>

        <p>
          Rating :{" "}
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly></Rating>
        </p>

        <h3>
          Brand : <span className="capitalize">{brand}</span>{" "}
        </h3>
        <p>{productDescription.slice(0, 40)}</p>
        <div className="card-actions justify-end flex ">
          <Link to={`/product/${_id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm btn-secondary">Update Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
