import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const Awards = ({openAwardDialog,isEditClick}) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
          <h3 className="card-title mb-2 mb-md-3">Awards</h3>
          </div>
          <div>
          {isEditClick&& <Fab size="small" color="primary" onClick={openAwardDialog} aria-label="edit">
            <EditIcon />
          </Fab>}
          <Fab size="small" color="primary" aria-label="add"onClick={openAwardDialog}>
            <AddIcon />
          </Fab>
          </div>
        </div>
        <hr />
        <div className="row">
          <h4>Emlpoyee of the month</h4>
        </div>
        <div>
          <ul>
            <li>
              2017<br />
              Annual Dinner<br />
              Seven Software Development
            </li>
          </ul>
        </div>
      </div>


    </Widget>
  )
}


export default Awards;
