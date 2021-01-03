import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
// import { UserContext } from '../../../App';

const containerStyle = {
  backgroundColor: "#F4FDFB",
  border: "1px solid aqua",
};

const Dashboard = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  useEffect(() => {
    fetch("https://doctor-portal-server.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 col-sm-12 col-12 mt-5 py-3 h-75 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5 col-sm-12 col-12">
          <AppointmentByDate appointments={appointments}></AppointmentByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
