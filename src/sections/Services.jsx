import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  // imgURL, label, subtext
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((srv) => (
        <ServiceCard key={srv.label} {...srv} />
      ))}
    </section>
  );
};

export default Services;
