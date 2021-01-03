import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import chair from "../../../images/chair.png";
const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center" style={{ height: "600px" }}>
      <div className="col-md-4 offset-md-1">
        <h1>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci
          obcaecati ea, neque culpa nostrum.
        </p>
        <NavLink to="/appointment">
          {" "}
          <Button className="btn btn-brand" size="md">
            GET APPOINTMENT
          </Button>
        </NavLink>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
