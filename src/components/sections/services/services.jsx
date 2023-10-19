import Service from "./service";
import ServicesData from "../../../data/servicesData";

const Services = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <span className="text-red-500 text-lg font-semibold">Features</span>
        <h2 className="text-6xl font-sans font-bold tracking-wide">
          What I Do
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {ServicesData.map((service, index) => {
          return <Service key={index} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;