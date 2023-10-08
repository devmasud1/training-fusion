import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto my-8 lg:my-20 ">
      <div
        className="text-center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in"
        data-aos-delay="1000"
        data-aos-offset="0"
      >
        <h3 className="text-2xl lg:text-3xl font-semibold">Services</h3>
        <h4 className="w-[50px] md:w-[70px] lg:w-[90px] bg-red-500 h-1 mx-auto mb-2"></h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          What we will Arrange
        </h1>
        <p className="my-3 text-base md:text-lg lg:w-1/2 mx-5 lg:mx-auto">
          Our Educational Event Management Services are tailored to meet the
          unique needs of educators, institutions, and organizations looking to
          create memorable and impactful events within the realm of education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 md:my-10 lg:my-16  mx-5 lg:mx-0">
        {service?.map((item) => (
          <ServicesCard key={item.id} item={item}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
