import React,{useEffect,useState} from "react";
import axios from "axios";


const ProjectsSection=()=>{

  

  const [project,setProject]=useState([]);
  const imagePath="http://localhost:4000/public/";
  




  useEffect(()=>{

    axios.get("http://localhost:4000/get-project").then((response)=>{

      setProject(response.data.projectData)



    });



  },[]);
  
    return(
        <section className="ftco-section ftco-project" id="projects-section">
          <div className="container-fluid px-md-4">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center">
                <span className="subheading">Accomplishments</span>
                <h2 className="mb-4">Our Projects</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row">

             {
               project.map((ele)=>{
                return  <div className="col-md-3">
                <div
                  className="project img shadow d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: "url(" + imagePath + ele?.image+")"}}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href={ele?.link} target="_blank">{ele?.title}</a>
                    </h3>
                    <span>{ele?.description}</span>
                  </div>
                </div>
              </div>



               })
             
             
            }


             
             
              
              
              
             
              
            </div>
          </div>
        </section>
       


    )



}

export default ProjectsSection;