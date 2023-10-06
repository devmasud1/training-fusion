import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-[1440px] h-[80vh]  mx-auto flex justify-center items-center">
      <div className="w-1/2 h-full bg-red-600"></div>
      <div className="w-1/2 flex items-center border-2 h-full py-10">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log in with google</button>
          </div>

          <p className="mt-3">Do not have account <Link to="/register" className="text-blue-500">register</Link></p>
        </form>
       
      </div>
    </div>
  );
};

export default LogIn;
