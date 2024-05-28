import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line react/prop-types
const SingleProduct = ({ phone,onDelete }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = phone;
  const { pathname } = useLocation();

  const handleDelete = async () => {
    // Display confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete this product?");

    if (confirmed) {
        try {
            const response = await fetch(`http://localhost:3000/phones/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                onDelete(id);
                toast.success('Product deleted successfully!');
            } else {
                throw new Error("Failed to delete product");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        // User cancelled, do nothing
        console.log("User cancelled");
    }
};


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <ToastContainer/>
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
              {/* <button className="btn bg-green-500">Edit</button> */}
              <button className="btn bg-green-600 text-white">
                <Link to={`/editProduct/${id}`}>Edit</Link>
              </button>
              <button onClick={handleDelete} className="btn bg-red-500">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
