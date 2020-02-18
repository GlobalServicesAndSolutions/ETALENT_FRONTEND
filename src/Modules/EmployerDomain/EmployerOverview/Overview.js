import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const EmployerOverview = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
      <div className="cardHeaderAndAddButton" >
          <div>
          <h3 className="card-title mb-2 mb-md-3">Overview</h3>
          </div>
          <div>
          <Fab  size="small" color="primary" aria-label="add" className='profileAddEditButton'>
            <AddIcon />
          </Fab>
          </div>
        </div>
        <hr/>
      </div>
      <p>Seven Technology Pvt. Ltd is a Software Development Company based in STP-3  I-9/3, Islamabad. 
          It is an offshore strategic partner of the leading UK Incubator and Accelerator, Nova. 
          Nova acts as an innovation partner to startups and established businesses in the UK. 
          They help deliver digital product offerings in a diverse range of sectors, including Finance, Health and Education etc. 
      </p>
      <p>We believe in building digital products by the people for the people. 
          Our main focus is to bring change and innovation into the world of technology by building better products.</p>
       <p> We are Microsoft, Google and Amazon Web Services Partners. 
           We also practice distributed SCRUM between our workplaces in the UK and Islamabad.  
           Along with that, we have many cross-skilled professionals who work within a flat employee hierarchy. 
           Employees are assets for any company but we take pride in giving back to our employees with top notch facilities, 
           In-house training, paid certifications and more. 
           We trust that we have created an organization where ability and diligent work can thrive.
      </p>

    </Widget>
  )
}


export default EmployerOverview;
