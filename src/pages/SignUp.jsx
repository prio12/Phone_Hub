import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const SignUp = () => {
  const { createUser, user , googleLogin} = useAuth();
  const navigate = useNavigate();

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      createUser(email, password);
      if (user) {
        navigate(-1);
      }
    }
  };
  
  const handleGoogleSignIn = () =>{
    googleLogin()
  }

  useEffect(() => {
    if (user) {
      navigate(-1)
    }
  }, [user,navigate]);
  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="hidden md:block w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h3 className="md:hidden block text-center">Sign Up</h3>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Register"
              />
              <button onClick={handleGoogleSignIn} className="btn my-2 bg-green-400">
                Google
              </button>
            </div>
            <div className="mt-6">
              <p>
                Already have an account?{" "}
                <Link to="/logIn" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
