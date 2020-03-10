import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Publications = ({ isEditClick,
    openPublicationtDialog }) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
            <h3 className="card-title mb-2 mb-md-3">Publications</h3>
          </div>
          <div>
            <Fab size="small" onClick={openPublicationtDialog} color="primary" aria-label="add" className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <hr />
        <div className="row profileSectionEditAndDelete">
          <div>
            <h4>Quality Assurance Research Paper</h4>
          </div>
          <div>
            {isEditClick &&
              <div>
                <Fab size="small" color="primary" aria-label="delete" >
                  <DeleteIcon />
                </Fab>
                <Fab size="small" color="primary" aria-label="edit" onClick={openPublicationtDialog}>
                  <EditIcon />
                </Fab>
              </div>}

          </div>
          </div>
          <div>
            <ul>
              <li>
                IEEE<br />
                2017<br />
              </li>
            </ul>
          </div>
</div>

    </Widget>
      )
    }
    
    
    export default Publications;
