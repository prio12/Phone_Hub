import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const phone = useLoaderData();
  const { brand, description, image_url, price, title } = phone;
  return (
    <div>
      <img className="w-full my-5" src={image_url} alt="product image" />
      <h1 className="text-5xl text-center font-bold">{title}</h1>
      <div className="my-8">
      <h3 className="text-2xl my-8 font-semibold">{price} $$</h3>
      <h3 className="text-xl my-8 font-semibold">{brand}</h3>
      <p className="text-lg my-8 font-light">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
