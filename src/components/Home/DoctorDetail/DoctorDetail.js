import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoctorDetail = ({ doctor }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-5">
      <div className="text-center">
        {doctor.image ? (
          <img
            alt=""
            style={{ height: "150px", borderRadius: "5px" }}
            src={`data:image/png;base64,${doctor.image.img}`}
          />
        ) : (
          <img
            style={{ height: "150px", borderRadius: "5px" }}
            className="img-fluid mb-3"
            src={`http://localhost:5000/${doctor.img}`}
            alt=""
          />
        )}

        <h6 className="mt-1">{doctor.name}</h6>
      </div>
      <div className="text-center">
        <FontAwesomeIcon
          style={{ fontSize: "12px" }}
          icon={doctor.icon}
          className="mr-1"
        ></FontAwesomeIcon>
        <small className="text-muted">{doctor.phone}</small>
      </div>
    </div>
  );
};

export default DoctorDetail;
