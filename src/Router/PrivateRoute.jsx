import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation()
   

    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <span>loading</span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
  