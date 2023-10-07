import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const [newItem, setNewItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  useEffect(() => {
    const uniqueData = service.find((item) => item.id == id);
    setNewItem(uniqueData);
  }, [id, service, setNewItem]);

  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div>
        <ServiceDetailsCard newItem={newItem}></ServiceDetailsCard>
      </div>
    </div>
  );
};

export default ServiceDetails;
