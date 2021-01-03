import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container py-5">
      <div className="container bg-dark w-75">
        <div className="contact-header text-center text-white ">
          <h6 className="aqua-color pt-5 m-1">CONTACT US</h6>
          <h2 className="mt-1 pt-4">Always Connect with us</h2>
        </div>
        <div className="col-md-9 mx-auto mt-5">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject *"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button type="button" className="btn btn-primary mb-4 mt-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
