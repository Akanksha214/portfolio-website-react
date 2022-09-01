import React, { useEffect } from "react";
import axios from "axios";

const AboutMe = () => {
  const [about, setAbout] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/get-about-me").then((response) => {
      setAbout(response.data.AboutData);
    });
  }, []);

  return (
    <section
      className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        {about?.map((e) => {
          return (
            <div className="row d-flex no-gutters">
              <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay"></div>
                  <div
                    className="img d-flex align-self-stretch align-items-center"
                    style={{
                      backgroundImage:
                        `url(http://localhost:4000/public/${e?.image})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                <div className="py-md-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12">
                      <span className="subheading">My Intro</span>
                      <h2
                        className="mb-4"
                        style={{
                          fontSize: "34px",
                          textTransform: "capitalize",
                        }}
                      >
                        About Me
                      </h2>
                      <p>{e?.description}</p>

                      <ul className="about-info mt-4 px-md-0 px-2">
                        <li className="d-flex">
                          <span>Name:</span> <span>{e?.name}</span>
                        </li>
                        <li className="d-flex">
                          <span>Date of birth:</span>{" "}
                          <span>{e?.dateOfBirth}</span>
                        </li>
                        <li className="d-flex">
                          <span>Address:</span> <span>{e?.address}</span>
                        </li>
                        <li className="d-flex">
                          <span>Zip code:</span> <span>{e?.zipCode}</span>
                        </li>
                        <li className="d-flex">
                          <span>Email:</span> <span>{e?.emailId}</span>
                        </li>
                        <li className="d-flex">
                          <span>Phone: </span> <span>{e?.phone}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12">
                      <div className="my-interest d-lg-flex w-100">
                        {e?.tags.map((tagName) => {
                          return (
                            <div className="interest-wrap d-flex align-items-center">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-listening"></span>
                              </div>
                              <div className="text">{tagName}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutMe;
