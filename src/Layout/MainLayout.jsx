import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";
import { useEffect, useState } from "react";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
