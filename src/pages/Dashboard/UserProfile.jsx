import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
    const {user}  = useAuth();
    return (
        <div>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src="data:image/jpeg;base64,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" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xs font-semibold">{user?.email}</h2>
		</div>
	</div>
   <Link to="/addProduct">
   <button className="btn w-full bg-indigo-600 text-white">Add Product</button>
   </Link>
</div>
        </div>
    );
};

export default UserProfile;