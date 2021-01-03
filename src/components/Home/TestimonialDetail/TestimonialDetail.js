import React from "react";

const TestimonialDetail = ({ testimonial }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-5">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <p className="text-muted mb-4">{testimonial.description}</p>
            <div className="d-flex align-items-center">
              <img
                src={testimonial.img}
                className="img-fluid mx-3"
                style={{ height: "60px" }}
                alt=""
              />
              <div className="p-2 mt-3">
                <h6 style={{ color: "#1cc7c1" }}>{testimonial.name}</h6>
                <p className="text-secondary">{testimonial.region}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
