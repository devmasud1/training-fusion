const Instructor = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-8 lg:my-10">
      <div className="text-center mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">
          Meet our Team
        </h1>
        <h4 className="max-w-[80px] md:w-[100px] lg:w-[120px] bg-red-500 h-1 mx-auto mb-8 lg:mb-10"></h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 mx-5 lg:mx-0">
        <div
          className="w-full lg:border-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/vV4nx08/instructor.jpg"
            alt=""
            className="w-full"
          />
          <h3 className="text-lg font-medium my-5 px-4">James</h3>
        </div>
        <div
          className="w-full lg:border-2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/SR9QRHQ/man.jpg"
            alt=""
            className="w-full"
          />
          <h3 className="text-lg font-medium my-5 px-4">David</h3>
        </div>
        <div
          className="w-full lg:border-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/ZHCkhrF/man3.jpg"
            alt=""
            className="w-full"
          />
          <h3 className="text-lg font-medium my-5 px-4">Christopher</h3>
        </div>
        <div
          className="w-full lg:border-2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/Np6sTG0/man4.jpg"
            alt=""
            className="w-full"
          />
          <h3 className="text-lg font-medium my-5 px-4">Benjamin</h3>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
