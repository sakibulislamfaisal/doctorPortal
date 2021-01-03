import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.css";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-4">
      <div className="card mt-3 mr-1">
        <div className="card-body">
          <div className="card-title text-center">
            <h4 className="text-brand">{booking.subject}</h4>
            <h5>{booking.visitingHour}</h5>
            <p>{booking.totalSpace} SPACES AVAILABLE</p>
            <button
              onClick={openModal}
              className="btn btn-brand text-uppercase"
            >
              Book Appointment
            </button>
            <AppointmentForm
              modalIsOpen={modalIsOpen}
              appointmentOn={booking.subject}
              closeModal={closeModal}
              date={date}
            ></AppointmentForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
