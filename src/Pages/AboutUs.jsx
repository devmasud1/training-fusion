const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-12">
      <div data-aos="fade-up" data-aos-duration="3000">
        <h3 className="text-center text-2xl lg:text-3xl font-semibold">
          About Us
        </h3>
        <h4 className="w-[90px] bg-red-500 h-1 mx-auto mb-10"></h4>
      </div>

      <div className="flex justify-between  gap-10">
        <div
          className="w-full mx-5 lg:mx-0 lg:w-1/2 space-y-8 border-b-2 pb-5 lg:pb-0"
          data-aos="fade-up"
        >
          <h1 className="text-xl lg:text-2xl font-bold">
            {" "}
            About The <br />
            <span className="text-xl md:text-2xl lg:text-3xl">
              {" "}
              Training Fusion Management
            </span>
          </h1>
          <p className="my-6">
            Training Fusion is produced by the team behind Metl Summit and Fiver
            Collision two of the largest and fastest growing education
            conferences.
          </p>
          <div className="flex gap-6 items-center">
            <button className="text-white px-8 py-1 bg-red-500 rounded-sm">
              Buy Ticket
            </button>
            <button className="text-white px-8 py-1 bg-orange-500 rounded-sm">
              view location
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-1/2" data-aos="fade-up-left">
          <img
            src="https://i.ibb.co/bmQgv4S/img2.jpg"
            alt=""
            className="w-full max-h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
