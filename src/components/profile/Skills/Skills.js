import React from "react";
import Widget from "components/Widget";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PieChart from "components/dashboard/default/PieChart";

const Skills = ({ ratingValue,
     onRatingChange,
      onSkillDialogue,
       isEditClick,
       skillsSwitch,
       onChangeSkillsSwitch
     }) => {
        let lableList=['.Net', 'Java Script','React'];
    return (

        <Widget styleName="jr-card-profile">
            <div >
                <div className="cardHeaderAndAddButton">
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Skills</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="add" onClick={onSkillDialogue} className='profileAddEditButton'>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <hr />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedB"
                                color="primary"
                                onChange={onChangeSkillsSwitch}
                            />
                        }
                        label={skillsSwitch ? 'List View' : 'Graph View'}
                    />
                </FormGroup>
                {!skillsSwitch &&
                <PieChart
                  height={200}
                  chartdata={[57, 85,90]}
                  shadowColor='black'
                  labels={lableList}
                />}
                {skillsSwitch &&
                    <List style={{ width: "100%" }}>
                    <div className="row profileSectionEditAndDelete">
                        <div>
                            <ListItem divider alignItems="center">
                                <div >
                                    <div>
                                        <ListItemText
                                            primary="Java Script"
                                        />
                                    </div>
                                    <div>
                                        <ThumbUpIcon color="primary" style={{ cursor: "pointer" }}>Likes</ThumbUpIcon>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingValue}
                                            onChange={onRatingChange}
                                        />
                                    </div>
                                </div>
                            </ListItem>
                        </div>
                        {isEditClick &&
                            <div>
                                <Fab size="small" color="primary"  aria-label="delete">
                                    <DeleteIcon />
                                </Fab>
                                <Fab size="small" color="primary" onClick={onSkillDialogue} aria-label="edit">
                                    <EditIcon />
                                </Fab>
                            </div>
                        }
                    </div>

                </List>}
            </div>
        </Widget>
    )
}


export default Skills;
