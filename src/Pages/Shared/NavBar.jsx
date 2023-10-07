import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);


  const handleSignOutUser = () => {
    logoutUser()
      .then(() => {
        toast("log out success", { type: "success" });
      })
      .catch(() => {
        toast("something wrong", { type: "error" });
      });
  };

  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/schedule"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Schedule
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200">
      <div className="navbar items-center  max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <h1 className="normal-case text-xl font-semibold">
            Training<span className="text-orange-700">Fusion</span>{" "}
          </h1>
        </div>
        <div className="navbar-center hidden px-2 lg:flex">
          <ul className="menu menu-horizontal">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 h-8 rounded-full">
                <img src={user.photoURL}/>

                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-200 rounded w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                 
                </a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 h-8 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src="https://i.ibb.co/ZJXnP8s/user.png" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-200 rounded w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-5 py-1 bg-slate-500 text-white rounded font-">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
