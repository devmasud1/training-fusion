const Instructor = () => {
  return (
    <div className="max-w-[1440px] mx-auto mb-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-1">Meet our Team</h1>
        <h4 className="w-[120px] bg-red-500 h-1 mx-auto mb-10"></h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="border-2">
          <img src="https://i.ibb.co/vV4nx08/instructor.jpg" alt="" />
          <h3 className="text-lg font-medium my-5 px-4"> James</h3>
        </div>
        <div className="border-2">
          <img src="https://i.ibb.co/SR9QRHQ/man.jpg" alt="" />
          <h3 className="text-lg font-medium my-5 px-4"> David</h3>
        </div>
        <div className="border-2">
          <img src="https://i.ibb.co/ZHCkhrF/man3.jpg" alt="" />
          <h3 className="text-lg font-medium my-5 px-4"> Christopher</h3>
        </div>
        <div className="border-2">
          <img src="https://i.ibb.co/Np6sTG0/man4.jpg" alt="" />
          <h3 className="text-lg font-medium my-5 px-4"> Benjamin</h3>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
