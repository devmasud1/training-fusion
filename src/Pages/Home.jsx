import Banner from "./Banner";
import Instructor from "./Instructor";
import Services from "./Services";
import Footer from "./Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Instructor></Instructor>
      <Footer></Footer>
    </div>
  );
};

export default Home;
