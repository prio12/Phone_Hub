import { useState } from "react";
import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {

  const [products, setProducts] = useState(data);

  const handleDeleteProduct = (id) => {
    // eslint-disable-next-line react/prop-types
    setProducts(data?.filter((product) => product.id !== id));
  };
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {
          // eslint-disable-next-line react/prop-types
          products?.map((phone) => (
            <SingleProduct key={phone.id} phone={phone} onDelete={handleDeleteProduct} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
