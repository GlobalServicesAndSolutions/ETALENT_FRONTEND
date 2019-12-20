import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Awards = ({openAwardDialog}) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <h3 className="card-title mb-2 mb-md-3">Awards</h3>
          <Fab size="small" color="primary" aria-label="add"onClick={openAwardDialog}>
            <AddIcon />
          </Fab>
        </div>
        <hr />
        <div className="row">
          <h2>Emlpoyee of the month</h2>
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
