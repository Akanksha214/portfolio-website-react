import React, { useEffect, useState } from "react";
import axios from "axios";
const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/get-service").then((response) => {
      setService(response.data.serviceData);
    });
  }, []);

  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="row">
          {service.map((ele) => {
            return (
              <div className="col-md-6 col-lg-3">
                <div className="media block-6 services d-block bg-white rounded-lg shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-3d-design"></span>
                  </div>
                  <div className="media-body">
                    <h3 className="heading mb-3">{ele?.title}</h3>
                    <p>{ele?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
