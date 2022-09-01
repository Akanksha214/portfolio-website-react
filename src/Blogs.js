import React,{useEffect,useState}from "react";
import axios from "axios";
const Blogs=()=>{
      const [blog,setBlog]=useState([]);

  useEffect(()=>{

     axios.get("http://localhost:4000/get-blogs").then((response)=>{

      setBlog(response.data.blogData)

     });



  },[])
  
    return(
        <section className="ftco-section bg-light" id="blog-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Blog</span>
                <h2 className="mb-4">Our Blog</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row d-flex">

             { 
             
              blog.map((ele)=>{
                  return <div className="col-md-4 d-flex">
                  <div className="blog-entry justify-content-end">
                    <a
                      href="single.html"
                      className="block-20"
                      style={{
                        backgroundImage: "url('./assets/images/image_1.jpg')",
                      }}
                    ></a>
                    <div className="text mt-3 float-right d-block">
                      <div className="d-flex align-items-center mb-3 meta">
                        <p className="mb-0">
                          <span className="mr-2">{ele?.date}</span>
                          
                        </p>
                      </div>
                      <h3 className="heading">
                        <a href="single.html">
                          {ele?.title}
                        </a>
                      </h3>
                      <p>
                        {ele?.description}
                      </p>
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

export default Blogs;