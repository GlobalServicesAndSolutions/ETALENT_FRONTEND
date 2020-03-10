import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Education = ({ openEducationDialog, isEditClick }) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
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
        <hr />
        <br />
        <div className="row profileSectionEditAndDelete">
            <h5>Abasyn University Islamabad</h5>
          {isEditClick &&
            <div>
              <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="delete">
                <DeleteIcon />
              </Fab>
              <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="edit">
                <EditIcon />
              </Fab>
            </div>}

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
