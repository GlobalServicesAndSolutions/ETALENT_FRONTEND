import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const Projects = ({isEditClick}) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
          <h3 className="card-title mb-2 mb-md-3">Projects</h3>
          </div>
          <div>
          {isEditClick&& <Fab size="small" color="primary"  aria-label="edit">
            <EditIcon />
          </Fab>}
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </div>
        </div>
        <hr />
        <div className="row">
          <h4>Online Admission System</h4>
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
