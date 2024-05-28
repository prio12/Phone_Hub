import { useLoaderData } from "react-router-dom";
import UserProfile from "./UserProfile";
import Products from "../../components/Products";

const DashBoard = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="w-full md:w-1/2 mx-auto  my-5">
                <UserProfile/>
            </div>
            <Products data={data} />
        </div>
    );
};

export default DashBoard;