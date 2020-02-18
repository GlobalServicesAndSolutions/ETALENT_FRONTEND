import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const Education = ({ openEducationDialog,isEditClick }) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <div className="cardHeaderAndAddButton" >
          <div>
          <h3 className="card-title mb-2 mb-md-3">Experience</h3>
          </div>
          <div>
          <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="add" className='profileAddEditButton'>
            <AddIcon />
          </Fab>
          </div>
        </div>
        <hr />
        <br />
        <div className="row profileSectionEditAndDelete">
          <div className="row">
          <img aria-hidden alt="image" src="example.com" />
          <h5>Seven software development ltd.</h5>
          </div>
          <div>
         { isEditClick && <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="edit" className='profileAddEditButton'>
            <EditIcon />
          </Fab>}
          </div>
        </div>
        <div>
          <ul>
            <li>
              Software Engineer or title<br />
              time period<br />
              Pakistan
            </li>
            <li>
              Test Ui Automation<br />
              time period<br />
              Pakistan
            </li>
          </ul>
        </div>
        <hr />
        <div className="cardHeaderAndAddButton" >
          <div>
          <h3 className="card-title mb-2 mb-md-3">Education</h3>
          </div>
          <div>
          <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="add" className='profileAddEditButton'>
            <AddIcon />
          </Fab>
          </div>
        </div>
        <br />
        <div className="row profileSectionEditAndDelete">
          <div className="row">
          <img aria-hidden alt="image" src="example.com" />
          <h5>Abasyn University Islamabad</h5>
          </div>
          <div>
         { isEditClick && <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="edit" className='profileAddEditButton'>
            <EditIcon />
          </Fab>}
          </div>
        </div>
        <ul>
          <li>
            Bs, Software Enginering<br />
            2012 - 2017
            </li>

        </ul>
      </div>


    </Widget>
  )
}


export default Education;
