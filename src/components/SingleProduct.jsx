import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({phone}) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, brand, price, description, image_url } = phone;
    const {pathname} = useLocation();
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn w-full btn-primary">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          {pathname === "/dashboard" && (
            <div className="flex w-full justify-between mt-4">
              <button className="btn bg-green-500">Edit</button>
              <button className="btn bg-red-500">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default SingleProduct;