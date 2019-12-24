import React from "react";
import Widget from "components/Widget";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

const JobPost = () => {
  return (
      <div style={{width: "250%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3">Jobs</h3>
          <br/>
          <div className="row">
          <img alt="image" src="example.com" ></img>
          <h2>Senior Software Engineer</h2>
        </div>
        <div>
          <ul>
            <li>
              Seven Software Development ltd.<br />
              Lahore, Pakistan
            </li>
          </ul>
          </div>
          <hr/>
          <div className="row">
          <img alt="image" src="example.com" ></img>
          <h2>Front End Developer</h2>
        </div>
        <div>
          <ul>
            <li>
              Global Services and Solutions<br />
              Islamabad, Pakistan
            </li>
          </ul>
          </div>
        </div>
        
        <hr/>
        <div>
        <ThumbUpIcon color="black" style={{cursor:"pointer"}} />&nbsp;Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ReplyAllIcon style={{cursor:"pointer"}}/>&nbsp; Share
        </div>
    </Widget>
    </div>
  )
}


export default JobPost;
