import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const LogIn = () => {
  const { handleGoogle, LogInUser } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    handleGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    LogInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[1440px] h-[74vh]  mx-auto flex justify-center items-center">
      <div className="w-1/2 h-full bg-red-600"></div>
      <div className="w-1/2 flex items-center border-2 h-full py-10">
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
