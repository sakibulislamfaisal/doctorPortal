import React from 'react';

const ServiceDetail = ({service}) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 text-center">
         <div className="mt-5 pt-3">
              <img  style={{height:'50px'}} src={service.img} alt=""/>
              <h5 className="mt-3 mb-3">{service.name}</h5> 
              <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, accusamus.</p>
         </div>
    </div>
  );
};

export default ServiceDetail;