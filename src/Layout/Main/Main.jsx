import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const Main = () => {
    return (
        <div className="px-2">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;