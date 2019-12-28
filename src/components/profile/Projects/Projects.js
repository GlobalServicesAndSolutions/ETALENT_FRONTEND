import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Projects = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <h3 className="card-title mb-2 mb-md-3">Projects</h3>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <hr />
        <div className="row">
          <h2>Online Admission System</h2>
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


export default Projects;
