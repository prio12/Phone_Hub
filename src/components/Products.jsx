import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
        {
          // eslint-disable-next-line react/prop-types
          data?.map((phone) => (
            <SingleProduct key={phone.id} phone={phone} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
