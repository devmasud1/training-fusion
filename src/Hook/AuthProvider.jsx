import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./Firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [passwordErrMsg, setPasswordErrMsg] = useState([]);

  const handleGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    if (password.length < 6) {
      return setPasswordErrMsg("Password must be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      return setPasswordErrMsg(
        "Password at least one capital letter."
      );
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setPasswordErrMsg(
        "Password at least one special character."
      );
    }
    setPasswordErrMsg("");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInUser = (email, password) => {


    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    handleGoogle,
    createUser,
    LogInUser,
    passwordErrMsg,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
