import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[1440px] h-[74vh]  mx-auto flex justify-center items-center">
      <div className="w-1/2 flex items-center border-2 h-full py-10">
        <form className="card-body" onSubmit={handleUserRegister}>
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
      <div className="w-1/2 h-full bg-red-600"></div>
    </div>
  );
};

export default Register;
