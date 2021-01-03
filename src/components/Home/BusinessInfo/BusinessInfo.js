import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from "../InfoCard/InfoCard";

const businessInfoData = [
       {
          title: 'Opening Hours',
          description: 'We are open 7 days',
          icon : faClock,
          backgroundColor: 'primary'
       },
       {
        title: 'Visit our location',
        description: 'Brooklyn 10003 , United States',
        icon :faMapMarker ,
        backgroundColor: 'dark'
     },
     {
      title: 'Call us Now',
      description: '+123456324',
      icon : faPhone,
      backgroundColor: 'primary'
   } 
];

const BusinessInfo = () => {
  
  return (
    <section className="d-flex justify-content-center">
        <div className="row w-75">
         {
             businessInfoData.map(info => <InfoCard info={info}></InfoCard>)
         }
        </div>
    </section>
  );
};

export default BusinessInfo;