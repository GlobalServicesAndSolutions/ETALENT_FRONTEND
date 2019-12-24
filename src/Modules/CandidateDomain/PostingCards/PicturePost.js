import React from "react";
import Widget from "components/Widget";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

const PicturePost = () => {
  return (
      <div style={{width: "95%"}} >
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
          <div style={{display:"flex"}}>
          <Avatar src="" />
          <p >Name of poster</p>
          </div>
          <br/>
        <p className="text-grey jr-fs-sm mb-0">Description of the PicturePost</p>
      </div>
       <img alt="Picture" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
        <hr/>
        <div>
        <ThumbUpIcon color="black" style={{cursor:"pointer"}} />&nbsp;Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ReplyAllIcon style={{cursor:"pointer"}}/>&nbsp; Share
        </div>
    </Widget>
    </div>
  )
}


export default PicturePost;
