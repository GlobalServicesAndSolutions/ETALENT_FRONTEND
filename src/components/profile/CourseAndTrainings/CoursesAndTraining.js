import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Courses = ({ openCourseAndTrainingDialogue, isEditClick }) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
            <h3 className="card-title mb-2 mb-md-3">Courses And Trainings</h3>
          </div>
          <div>
            <Fab size="small" color="primary" aria-label="cross" onClick={openCourseAndTrainingDialogue} className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <hr />
        <div className="row profileSectionEditAndDelete">
          <div>
            <h4>Web Development Workshop</h4>
          </div>

          {isEditClick &&
            <div>
              <Fab size="small" color="primary" aria-label="delete">
                <DeleteIcon />
              </Fab>
              <Fab size="small" color="primary" aria-label="edit" onClick={openCourseAndTrainingDialogue}>
                <EditIcon />
              </Fab>
            </div>}

        </div>
        <div>
          <ul>
            <li>
              Abasyn University Islamabad<br />
              2017<br />
            </li>
          </ul>
        </div>
      </div>


    </Widget>
  )
}


export default Courses;
