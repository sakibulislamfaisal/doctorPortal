import React from "react";
import winson1 from "../../../images/winson1.png";
import winson2 from "../../../images/winson2.png";
import winson3 from "../../../images/winson3.png";
import TestimonialDetail from "../TestimonialDetail/TestimonialDetail";
import "./Testimonial.css";
const testimonialData = [
  {
    description:
      "It is a long established fact that a leader will distracted by the readable content of a page when looking at its layout.The point of lorem ipsums that it has a more or less normal distribution of a letter of apposed to use content here ,content",
    img: winson1,
    name: "Winson Herry",
    region: "California",
  },
  {
    description:
      "It is a long established fact that a leader will distracted by the readable content of a page when looking at its layout.The point of lorem ipsums that it has a more or less normal distribution of a letter of apposed to use content here ,content",
    img: winson2,
    name: "Winson Herry",
    region: "California",
  },
  {
    description:
      "It is a long established fact that a leader will distracted by the readable content of a page when looking at its layout.The point of lorem ipsums that it has a more or less normal distribution of a letter of apposed to use content here ,content",
    img: winson3,
    name: "Winson Herry",
    region: "California",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div
        className="top-testimonial mt-5 pt-5"
        style={{ marginLeft: "185px" }}
      >
        <h5 className="aqua-color">TESTIMONIAL</h5>
        <h2>
          What's Our Patient <br /> Says
        </h2>
      </div>
      <div className="card-testimonial d-flex justify-content-center">
        <div className="row w-75">
          {testimonialData.map((testimonial) => (
            <TestimonialDetail testimonial={testimonial}></TestimonialDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
