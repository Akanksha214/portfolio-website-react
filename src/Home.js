import React from "react";
import NavBar from "./Navbar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import ContectMe from "./ContectMe";
import ProjectsSection from "./ProjectsSection";
import TestMonials from "./TestMonials";
import ContactUs from "./ContactUs";
import Blogs from "./Blogs";

const Home = () => {
  
  return (
    <html lang="en">
      {/* Header section start here */}

      <Header />

      
      
      <body
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="300"
      >
        <NavBar />
        {/* section for slider */}
        <br />
        <br />
        <br />

        {/*  About me section start here */}

        <AboutMe />

        {/* Skills section start here */}

        <Skills />

        {/* services section start here */}
       

        <Services />

        {/* contact me section starts here */}
       

        <ContectMe />

        {/* projects section start here */}
       
        <ProjectsSection />

        {/* testimonials section start here */}

       

        <TestMonials />

        {/* Blogs section start here */}

       

         <Blogs />
        {/* contacts us section start here */}

       
        <ContactUs />

        <Footer />

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
      </body>
    </html>
  );
};

export default Home;
