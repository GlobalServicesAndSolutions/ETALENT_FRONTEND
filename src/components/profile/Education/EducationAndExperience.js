import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Education = ({openEducationDialog}) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <div className="cardHeaderAndAddButton" >
          <h3 className="card-title mb-2 mb-md-3">Education And Experience</h3>
          <Fab onClick={openEducationDialog} size="small" color="primary" aria-label="add" >
            <AddIcon />
          </Fab>
        </div>
        <hr />
        <p className="text-grey jr-fs-sm mb-0">Experience</p>
        <br />
        <div className="row">
          <img alt="image" src="example.com" ></img>
          <h2>Seven software development ltd.</h2>
        </div>
        <div>
          <ul>
            <li>
              Software Engineer or title<br />
              time period<br />
              Pakistan
            </li>
            <li>
              Test Ui Automation<br />
              time period<br />
              Pakistan
            </li>
          </ul>
        </div>
        <hr />
        <p className="text-grey jr-fs-sm mb-0">Education</p>
        <br />
        <div className="row">
          <img alt="image" src="example.com" ></img>
          <h2>Abasyn University Islamabad</h2><br />
        </div>
        <ul>
          <li>
            Bs, Software Enginering<br />
            2012 - 2017
            </li>

        </ul>
      </div>


    </Widget>
  )
}


export default Education;
