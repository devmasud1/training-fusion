const Schedule = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-12">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/vV4nx08/instructor.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">9.30 - 10.30 AM</h1>
            <p className="py-6">Christopher</p>
            <h1>Conferences and Seminars</h1>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 my-8">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/Np6sTG0/man4.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">10.30 - 11.30</h1>
            <p className="py-6">James Killer</p>
            <h1>Workshops and Training Sessions</h1>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/ZHCkhrF/man3.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">11.30 - 12.30 AM</h1>
            <p className="py-6">James Killer</p>
            <h1>Career Fairs and College Expos</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
