import NavBar from "./Shared/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-[1440px] mx-auto h-[80vh] flex justify-center items-center">
        <h1 className="text-xl font-semibold">Not found!</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
