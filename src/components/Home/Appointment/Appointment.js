import React from "react";
import doctors from "../../../images/doctors.png";
import "../Responsive/Responsive.css";
import "./Appointment.css";
const Appointment = () => {
  return (
    <section className=" d-flex justify-content-center">
      <div className="row w-75 appointment-container">
        <div className="col-xs-12 col-sm-12 col-md-5 offset-md-1 app-img">
          <img
            style={{ height: "510px" }}
            src={doctors}
            className="img-fluid appointment-image"
            alt=""
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mt-5">
          <h6 className="aqua-color mt-3 mb-4">Appointment</h6>
          <h2 className="text-white  mb-4">
            Make an appointment <br /> Today{" "}
          </h2>
          <p className="text-white  mb-4">
            It is a long established fact that a leader will distracted by the
            readable content of a page when looking at its
          </p>
          <button className="btn btn-brand  mb-4">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
