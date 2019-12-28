import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Courses = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <h3 className="card-title mb-2 mb-md-3">Courses And Trainings</h3>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <hr />
          <h2>Web Development Workshop</h2>
        <div>
          <ul>
            <li>
              Abasyn University Islamabad<br />
              2017<br />
            </li>
          </ul>
        </div>
        <h2>Requirement Engineering</h2>
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
