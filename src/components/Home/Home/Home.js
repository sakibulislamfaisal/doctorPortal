import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import DentalTerm from "../DentalTerm/DentalTerm";
import Doctors from "../Doctors/Doctors";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  document.title = "Doctors Portal (Home Page)";
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <DentalTerm></DentalTerm>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctors></Doctors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
