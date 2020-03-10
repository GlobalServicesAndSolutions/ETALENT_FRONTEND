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
import DeleteIcon from '@material-ui/icons/Delete';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Chart from 'components/dashboard/default/Chart'

const SoftSkills = ({ ratingValue,
     onRatingChange,
      openSoftSkillDialogue,
       isEditClick,
       onChangeSoftSkillsSwitch,
       softSkillsSwitch
     }) => {
         let lableList=['communication', 'Humanidity','Code','Style'];
    return (

        <Widget styleName="jr-card-profile">
            <div >
                <div className="cardHeaderAndAddButton">
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Soft Skills</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="add" onClick={openSoftSkillDialogue} className='profileAddEditButton'>
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
                                onChange={onChangeSoftSkillsSwitch}
                            />
                        }
                        label={softSkillsSwitch ? 'List View' : 'Graph View'}
                    />
                </FormGroup>
                {!softSkillsSwitch &&
                <Chart
                  borderColor="white"
                  pointBorderColor='white'
                  pointBackgroundColor='white'
                  height={200}
                  pointHoverBorderColor='blue'
                  borderWidth={0}
                  chartdata={[40, 25,20,30]}
                  shadowColor='black'
                  labels={lableList}
                />}
                 {softSkillsSwitch &&
                     <List style={{ width: "100%" }}>
                    <div className="row profileSectionEditAndDelete">
                        <div>
                            <ListItem divider alignItems="center">
                                <div className='row'>
                                    <div>
                                        <ListItemText
                                            primary="Communication"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                        <ThumbUpIcon className='LikeThumbColorUserDefine' />
                                        </div>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingValue}
                                            onChange={onRatingChange}
                                        />
                                    
                                
                            </ListItem>
                        </div>
                        {isEditClick &&
                            <div>
                                <Fab size="small" color="primary" aria-label="delete">
                                    <DeleteIcon />
                                </Fab>
                                <Fab size="small" color="primary" onClick={openSoftSkillDialogue} aria-label="edit">
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


export default SoftSkills;
