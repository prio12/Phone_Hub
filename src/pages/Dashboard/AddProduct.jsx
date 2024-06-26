import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Display confirmation dialog
        const confirmed = window.confirm("Are you sure you want to add this product?");
    
        if (confirmed) {
            const form = e.target;
            const id = form.id.value;
            const title = form.title.value;
            const brand = form.brand.value;
            const price = form.price.value;
            const description = form.description.value;
            const image_url = form.image_url.value;
    
            const data = { id, title, brand, price, description, image_url };
            console.log(data);
    
            try {
                const response = await fetch("http://localhost:3000/phones", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData);
                    form.reset();
                    toast.success('Product added successfully!')
                    // navigate("/dashboard");
                } else {
                    throw new Error("Failed to add product");
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
        <div>
        <h1 className="text-5xl font-bold text-center">Add a Product</h1>
        <ToastContainer/>
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;