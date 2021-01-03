import React from 'react';
import term from "../../../images/term.png";
const DentalTerm = () => {
  return (
    <section className="dentalTerm-container d-flex justify-content-center mt-5" style={{height:'500px'}}> 
          <div className="row w-75">
             <div className=" col-xs-12 col-sm-12 col-md-6">
                <img style={{height:'400px',width:'450px'}} src={term} className="img-fluid" alt=""/> 
             </div>
             <div className="col-xs-12 col-sm-12 col-md-6 mt-5 ">
                 <div className="terms">
                 <h2 style={{color:'#3A4256'}} className="mb-4">Exceptional Dental Care , on your Terms</h2>
                  <p className="text-muted mb-2">It is a long established fact that a leader will distracted by the readable content of a page when looking at its layout.The point of lorem ipsums that it has a more or less normal distribution of a letter of apposed to use content here ,content here it look like readable English. Many desktop publishing packages and web page applications.</p><br/>
                  <button className='btn btn-brand '>Learn More</button>
                  </div>

             </div>
          </div>
    </section>
  );
};

export default DentalTerm;