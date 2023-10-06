import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-[1440px] h-[80vh]  mx-auto flex justify-center items-center">
      <div className="w-1/2 flex items-center border-2 h-full py-10">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>

          <p className="mt-3">
            Already have an account{" "}
            <Link to="/login" className="text-blue-500">
              login
            </Link>
          </p>
        </form>
      </div>
      <div className="w-1/2 h-full bg-red-600"></div>
    </div>
  );
};

export default Register;
