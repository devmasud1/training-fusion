import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mp4Video from "../assets/animation_lngkyoe1.mp4";

const Register = () => {
  const { createUser, passwordErrMsg } = useContext(AuthContext);

  const handleUserRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password, name)
      .then(() => {
        toast("User successfully created!", { type: "success" });
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
      })
      .catch(() => {
        toast("Already use this email", { type: "error" });
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
      });
  };

  return (
    <div className="max-w-[1440px] h-[74vh]  mx-auto flex justify-center items-center">
      <ToastContainer />
      <div className="w-full mx-auto lg:w-1/2 flex items-center border-2 h-full py-10">
        <form className="card-body" onSubmit={handleUserRegister}>
          {passwordErrMsg ? passwordErrMsg : ""}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>

          <p className="mt-3">
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-500">
              LogIn
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-full">
        <div className=" mt-28">
          <video autoPlay>
            <source src={mp4Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Register;
