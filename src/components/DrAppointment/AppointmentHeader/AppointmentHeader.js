import React from "react";
import "./AppointmentHeader.css";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      className="row d-flex align-items-center "
      style={{ height: "700px" }}
    >
      <div className="col-md-4 offset-md-1 appointment-left">
        <h3>APPOINTMENT</h3>
        <Calendar value={new Date()} onChange={handleDateChange}></Calendar>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid appointment-image" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
