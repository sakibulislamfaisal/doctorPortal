import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-9 p-4 pr-5 mr-3"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Patients({appointments.length})</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;
