import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async()=>{
    await logout()
  }
  return (
    <div className="navbar  bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-500 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {
              user && <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            }
          </ul>
        </div>
        <Link to="/">
          <div className=" text-white py-4 px-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold">Phone Hub</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {
              user && <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <button onClick={handleLogout} className="btn text-white btn-outline">
            Log Out
          </button> : <Link className="pr-3 text-xs font-bold" to="/logIn">
          Log in
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
