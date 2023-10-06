const Banner = () => {
  return (
    <div className="flex justify-between items-center h-[70vh]">
      <div className="w-1/2 hidden lg:block h-full">
        <img
          src="https://i.ibb.co/QDxttVT/banner.jpg"
          alt=""
          className= "w-full h-[100%]"
        />
      </div>
      <div
        className="lg:w-1/2 hero h-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/4J2190X/bannerBg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>

        <div className="w-full text-left pl-10 text-white">
          <h1 className=" text-6xl font-bold">Learn & Discover</h1>
          <p className="my-5 text-lg">Ready to learn and have fun ? <br />
          Find a perfect course and join us today

          </p>

          <button className="px-8 py-2 bg-red-700 text-white font-medium rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
