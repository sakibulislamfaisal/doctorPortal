import React, { useEffect, useState } from "react";
// import doctors from "../../../images/doctor-sm.png";
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import DoctorDetail from "../DoctorDetail/DoctorDetail";
// const doctorData = [
//   {
//     img: doctors,
//     name: "Dr. Caudi",
//     icon: faPhoneAlt,
//     phone: "+7943744047",
//   },
//   {
//     img: doctors,
//     name: "Dr. Caudi",
//     icon: faPhoneAlt,
//     phone: "+7943744047",
//   },
//   {
//     img: doctors,
//     name: "Dr. Caudi",
//     icon: faPhoneAlt,
//     phone: "+7943744047",
//   },
// ];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://doctor-portal-server.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="doctors-container mt-5 py-5">
      <h5 className="text-center aqua-color">Our Doctors</h5>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {doctors.map((doctor) => (
            <DoctorDetail doctor={doctor} key={doctor._id}></DoctorDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
