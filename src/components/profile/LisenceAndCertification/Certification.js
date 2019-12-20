import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Certification = ({openCertificationDialog}) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <h3 className="card-title mb-2 mb-md-3">Certification</h3>
          <Fab size="small" color="primary" aria-label="add"onClick={openCertificationDialog}>
            <AddIcon />
          </Fab>
        </div>
        <hr />
          <h2>PMP (Project Management)</h2>
        <div>
          <ul>
            <li>
              Certification Date : 08/2018<br />
              Expiry Date : 08/2019<br />
              Authority : PMI
            </li>
          </ul>
        </div>
        <h2> PMP Certification</h2>
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
