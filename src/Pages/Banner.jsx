const Banner = () => {
  return (
    <div className="flex justify-between items-center h-[70vh]">
      <div
        className="hidden lg:block lg:w-1/2 lg:h-full"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src="https://i.ibb.co/QDxttVT/banner.jpg"
          alt=""
          className="w-full h-[100%]"
        />
      </div>
      <div
        className="lg:w-1/2 hero h-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/4J2190X/bannerBg.jpg)",
        }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="hero-overlay bg-opacity-95"></div>

        <div
          className="w-full text-left pl-10 text-white"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className=" text-6xl font-bold">Learn & Discover</h1>
          <p className="my-5 text-lg">
            New Trends in Teaching, Learning & Education{" "}
          </p>

          <button className="px-8 py-2 bg-red-700 text-white font-medium rounded-lg">
            Join with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
