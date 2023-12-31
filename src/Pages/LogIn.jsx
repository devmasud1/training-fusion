import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mp4Video from "../assets/animation_lngkv4hq.mp4";

const LogIn = () => {
  const { handleGoogle, LogInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    handleGoogle()
      .then(() => {
        toast("successfully logIn!", { type: "success" });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast("something wrong!", { type: "error" });
      });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    LogInUser(email, password)
      .then(() => {
        toast("successfully logIn!", { type: "success" });
        navigate(location?.state ? location.state : "/");
        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch(() => {
        toast("Incorrect email or Password. Please try again.", {
          type: "error",
        });

        e.target.email.value = "";
        e.target.password.value = "";
      });
  };

  return (
    <div className="max-w-[1440px] h-[74vh]  mx-auto flex justify-center items-center">
      <ToastContainer />
      <div className="hidden lg:block w-1/2 h-full">
        <video autoPlay>
          <source src={mp4Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full lg:w-1/2 flex items-center lg:border-2 h-full py-10">
        <form onSubmit={handleUserLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="mt-6">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-neutral w-full"
            >
              Log in with google
            </button>
          </div>

          <p className="mt-3">
            Do not have account? Please,{" "}
            <Link to="/register" className="text-blue-500">
              {" "}
              register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
