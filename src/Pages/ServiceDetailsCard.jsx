const ServiceDetailsCard = ({ newItem }) => {
  console.log(newItem);
  const {
    title,
    description,
    instructor_name,
    instructor_img,
    thumbnail_img,
    price,
  } = newItem || {};
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mx-5 lg:mx-0">
      <div className="w-full lg:w-3/4">
        <div className="bg-slate-200 py-2">
          <div className="flex items-center gap-4 ml-4">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={instructor_img} />
              </div>
            </div>
            <div>
              <h3>Team leader:</h3>
              <h2 className="font-semibold"> {instructor_name}</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" mt-3 text-xl lg:text-2xl font-semibold">{title}</h1>
          <img
            src={thumbnail_img}
            alt=""
            className="py-3 object-cover w-[100%] h-[500px]"
          />
          <p>{description}</p>

          <div className="flex justify-between items-center my-6">
            <p className="text-xl lg:text-2xl font-semibold">Price: ${price}</p>
            <button className="px-6 lg:px-10 py-1 bg-slate-700 text-white ">
              Booking Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3  mb-8 lg:mb-0">
        <div className="hidden lg:block h-[350px] bg-slate-200">
          <img
            src="https://i.ibb.co/qJHgS9Q/It-Training.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:mt-8">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Why should Attend Conference ?
            </div>
            <div className="collapse-content">
              <p>
                Conferences bring together experts, thought leaders, and
                industry professionals who share their insights, research
                findings, and expertise. Attending sessions and workshops allows
                you to gain valuable knowledge and stay up-to-date with the
                latest trends and developments in your field.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What you will learn ?
            </div>
            <div className="collapse-content">
              <p>
                Conferences can be incredibly inspiring. Hearing success
                stories, innovative ideas, and passionate speakers can motivate
                you to set new goals and pursue your ambitions with renewed
                vigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
