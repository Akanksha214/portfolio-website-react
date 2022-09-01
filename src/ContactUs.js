import React, { useEffect, useState } from "react";
import axios from "axios";
const ContactUs = () => {
  const [contact, setContact] = useState([]);

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    setPayload({
      ...payload,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmt=()=>{

  console.log("paylod..",payload)
  axios.post("http://localhost:4000/create-sends",payload).then((response)=>{
     if(response){

      console.log("record insert")
      setPayload({ name: "",
      email: "",
      message: "",
      subject: "",  

      })
     }
     else{
     console.log("record insert")
     }
  })


  }

  // ussefect===>contactinp iap history

  useEffect(() => {
    axios.get("http://localhost:4000/get-contact").then((response) => {
      setContact(response.data.contactData);
    });
  }, []);

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        {
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Contact us</span>
              <h2 className="mb-4">Have a Project?</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        }

        <div className="row block-9">
          <div className="col-md-8">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      id="name" onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      id="email" onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      id="subject" onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name=""
                    
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                      id="message" onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="button"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                      onClick={handleSubmt}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Address:</span>
                    {contact[0]?.address}
                  </p>
                </div>
              </div>

              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">{contact[0]?.phone}</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">{contact[0]?.email}</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Website</span> <a href="#">{contact[0]?.website}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
