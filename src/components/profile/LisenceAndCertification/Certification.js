import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const Certification = ({ openCertificationDialog,isEditClick }) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
          <h3 className="card-title mb-2 mb-md-3">Certification</h3>
          </div>
          <div>
          {isEditClick&& <Fab size="small" color="primary" onClick={openCertificationDialog} aria-label="edit">
            <EditIcon />
          </Fab>}
          <Fab size="small" color="primary" aria-label="add" onClick={openCertificationDialog}>
            <AddIcon />
          </Fab>
          </div>
        </div>
        <hr />
        <h4>PMP (Project Management)</h4>
        <div>
          <ul>
            <li>
              Certification Date : 08/2018<br />
              Expiry Date : 08/2019<br />
              Authority : PMI
            </li>
          </ul>
        </div>
        <h4> PMP Certification</h4>
        <div>
          <ul>
            <li>
              Certification Date : 08/2018<br />
              Expiry Date : 08/2019<br />
              Authority : Project management institute
            </li>
          </ul>
        </div>
      </div>


    </Widget>
  )
}


export default Certification;
