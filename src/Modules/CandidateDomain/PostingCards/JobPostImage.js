import React from "react";
import Widget from "components/Widget";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

const JobPostImage = () => {
  return (
      <div style={{width: "100%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
          <div style={{display:"flex"}}>
          <Avatar src="" />
          <p >Name of poster</p>
          </div>
          <br/>
        <p className="text-grey jr-fs-sm mb-0">Description of the PicturePost</p>
      </div>
       <img aria-hidden alt="image" style={{width:'100%', height:'30rem'}} src={require("assets/images/job.jpeg")} />
        <hr/>
        <div>
        <ThumbUpIcon color="action" style={{cursor:"pointer"}} />&nbsp;Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ReplyAllIcon color="action" style={{cursor:"pointer"}}/>&nbsp; Share
        </div>
    </Widget>
    </div>
  )
}


export default JobPostImage;
