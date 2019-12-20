import React from "react";
import Widget from "components/Widget";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Rating from '@material-ui/lab/Rating';
const Skills = ({ratingValue, onRatingChange,onSkillDialogue}) => {
    return (
        
        <Widget styleName="jr-card-profile">
            <div >
                <div className="cardHeaderAndAddButton">
                    <h3 className="card-title mb-2 mb-md-3">Skills</h3>
                    <Fab size="small" color="primary" aria-label="add" onClick={onSkillDialogue}>
                        <AddIcon />
                    </Fab>
                </div>
                <hr/>
                <List style={{ width: "100%" }}>
                    <ListItem divider alignItems="center">
                        <ListItemText
                            primary="Java Script"
                        />
                        <ThumbUpIcon color="primary" style={{cursor:"pointer"}}>Likes</ThumbUpIcon>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={onRatingChange}
                        />
                    </ListItem>
                    <ListItem divider alignItems="flex-start">
                        <ListItemText
                            primary="React Js"
                        />
                        <ThumbUpIcon color="primary" style={{cursor:"pointer"}}>123</ThumbUpIcon>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={onRatingChange}
                        />
                    </ListItem>

                </List>
            </div>
        </Widget>
    )
}


export default Skills;
