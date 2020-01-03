import React from "react";
import Widget from "components/Widget";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Rating from '@material-ui/lab/Rating';
import EditIcon from '@material-ui/icons/Edit'; 

const SoftSkills = ({ ratingValue, onRatingChange, onSkillDialogue,isEditClick }) => {
    return (

        <Widget styleName="jr-card-profile">
            <div >
                <div className="cardHeaderAndAddButton">
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Soft Skills</h3>
                    </div>
                    <div>
                    {isEditClick&& <Fab size="small" color="primary" aria-label="add" onClick={onSkillDialogue}>
                            <EditIcon />
                        </Fab>}
                        <Fab size="small" color="primary" aria-label="edit" onClick={onSkillDialogue}>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <hr />
                <List style={{ width: "100%" }}>
                    <ListItem divider alignItems="center">
                        <ListItemText
                            primary="Communication"
                        />
                        <ThumbUpIcon color="primary" style={{ cursor: "pointer" }}>Likes</ThumbUpIcon>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={onRatingChange}
                        />
                    </ListItem>
                    <ListItem divider alignItems="flex-start">
                        <ListItemText
                            primary="Team Work"
                        />
                        <ThumbUpIcon color="primary" style={{ cursor: "pointer" }}>Likes</ThumbUpIcon>
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


export default SoftSkills;
