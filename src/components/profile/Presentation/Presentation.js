import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Presentation = ({ openPresentationDialog,
     isEditClick 
    }) => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <div className="cardHeaderAndAddButton">
          <div>
            <h3 className="card-title mb-2 mb-md-3">Presentations</h3>
          </div>
          <div>
            <Fab size="small" color="primary" aria-label="add" onClick={openPresentationDialog} className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
        <hr />
        <div className="row profileSectionEditAndDelete">
        <div className='row'>
            <div>
            <h5>Fiber Networking</h5>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <div className='row'>
            <ThumbUpIcon className='LikeThumbColorUserDefine' />
            <p>2 Likes</p>
            </div>
            </div>
          </div>
          <div>
            {isEditClick &&
              <div>
                <Fab size="small" color="primary" aria-label="delete">
                  <DeleteIcon />
                </Fab>
                <Fab size="small" color="primary" onClick={openPresentationDialog} aria-label="edit">
                  <EditIcon />
                </Fab>
              </div>}
          </div>
        </div>
        <div>
          <ul>
            <li>
              Institute,
              Location
            </li>
          </ul>
        </div>
      </div>


    </Widget>
  )
}


export default Presentation;
