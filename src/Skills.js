import React, { useEffect, useState } from "react";
import axios from "axios";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/get-skill").then((response) => {
      setSkill(response.data.skillData);
    });
  }, []);

  return (
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="row progress-circle mb-5">

         { 
         skill.map((ele)=>{
            return <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">{ele?.title}</h2>

              <div className="progress mx-auto" data-value="95">
                <span className="progress-left">
                  <span className="progress-bar border-primary"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary"></span>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">
                    {ele?.totalPercentage}<sup className="small">%</sup>
                  </div>
                </div>
              </div>

              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">{ele?.lastWeekPercentage}%</div>
                  <span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">{ele?.lastMonthPercentage}%</div>
                  <span className="small text-gray">Last month</span>
                </div>
              </div>
            </div>
          </div>

         })
         
         
          
          }

        </div>
      </div>
    </section>
  );
};

export default Skills;
