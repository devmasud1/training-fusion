import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);
  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <div className="text-center">
        <h1 className="text-5xl font-semibold">The services we provide</h1>
        <p className="my-3 text-lg">
          eStore UI Kit comes with all essential features, <br />
          sections and elements you need to design and develop web UI
          efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {service?.map((item) => (
          <ServicesCard key={item.id} item={item}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
