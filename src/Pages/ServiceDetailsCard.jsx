const ServiceDetailsCard = ({ newItem }) => {
  console.log(newItem);
  const {
    title,
    description,
    instructor_name,
    instructor_img,
    thumbnail_img,
    duration,
    lectures,
    quizzes,
    price,
  } = newItem || {};
  return (
    <div className="flex justify-between  gap-10">
      <div className="w-3/4">
        <div className="bg-slate-200 py-2">
          <div className="flex items-center gap-4 ml-4">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={instructor_img} />
              </div>
            </div>
            <div>
              <h3>Instructor:</h3>
              <h2 className="font-semibold"> {instructor_name}</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" mt-3 text-2xl font-semibold">{title}</h1>
          <img src={thumbnail_img} alt="" className="py-3" />
          <p>{description}</p>
        </div>
      </div>
      <div className="w-1/3 bg-slate-200 ">
        <div className="pl-8 pt-8">
          <h1 className="text-center text-2xl font-semibold"> Information</h1>
          <hr className="w-1/2 mx-auto h-1 bg-slate-400 mb-12" />
          <div className="text-lg font-medium space-y-8">
            <p>Duration: {duration}</p>
            <p>Total Lectures: {lectures}</p>
            <p>Total Quiz: {quizzes}</p>
            <p>Price: {price}</p>
            <button className="px-10 py-1 bg-slate-700 text-white mt-6">
              purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
