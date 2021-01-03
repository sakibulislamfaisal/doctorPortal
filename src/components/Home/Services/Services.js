import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
  {
     name : 'Fluoride Treatment', 
     img : fluoride
  },
  {
    name : 'Cavity Filling', 
    img :cavity 
 },
 {
  name : 'Teath Whitening', 
  img : whitening
}
];

const Services = () => {
  return (
      <section className="service-container mt-5">
          <div className="text-center">
                <h5 style={{color: '#1CC7C1',fontWeight:'bold'}}>OUR SERVICES</h5>
                <h3>Services we provide</h3>
          </div>
          <div className="d-flex justify-content-center">
              <div className="row w-75">
                   {
                      serviceData.map(service =><ServiceDetail service={service}></ServiceDetail>)
                   }
              </div>
          </div>
      </section>
  );
};

export default Services;