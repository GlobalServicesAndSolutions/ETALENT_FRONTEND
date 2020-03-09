import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Widget from "components/Widget";
import Switch from '@material-ui/core/Switch';
import { Button } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import TodayIcon from '@material-ui/icons/Today';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const JobsAlertListView = () => {
    return (
        <div>
            <Widget styleName="jr-card-profile jobAlertList" >
                <List>
                    <ListItem  >
                        <div className="mb-3 jobList" >
                            <div>
                            <div className='row profileSectionEditAndDelete'>
                                    <h3 className='allfontCapital' >Sr.Software Engineer</h3>
                                    <div>
                                            <DeleteIcon className='AlertEditDeleteColor'/>
                                            &nbsp;
                                            <CreateIcon className='AlertEditDeleteColor' />
                                    </div>
                                </div>
                                <hr />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <h6 className='JobAlertFont'> Job type</h6>
                                        <h6 className='JobAlertFont'>Location, City</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Switch
                                                value="checkedB"
                                                color="primary"
                                                checked={true}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </div>
                                        <div className='row' >
                                            <div className='alertListDaily'>
                                                <ScheduleIcon className='JobAlertCalenderStyle' />
                                                <Button color='primary'>Daily</Button>
                                            </div>
                                            <div className='alertListMonthly'>
                                                <TodayIcon className='JobAlertCalenderStyle' />
                                                <Button color='primary'>Weekly</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListItem>
                    <ListItem  >
                        <div className="mb-3 jobList" >
                            <div>
                                <div className='row profileSectionEditAndDelete'>
                                    <h3 className='allfontCapital' >Sr.Software </h3>
                                    <div>
                                            <DeleteIcon className='AlertEditDeleteColor'/>
                                            &nbsp;
                                            <CreateIcon className='AlertEditDeleteColor' />
                                    </div>
                                </div>
                                <hr />
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <h6 className='JobAlertFont'> Job type</h6>
                                        <h6 className='JobAlertFont'>Location, City</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Switch
                                                value="checkedB"
                                                color="primary"
                                                checked={true}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </div>
                                        <div className='row' >
                                            <div className='alertListDaily'>
                                                <ScheduleIcon className='JobAlertCalenderStyle' />
                                                <Button color='primary'>Daily</Button>
                                            </div>
                                            <div className='alertListMonthly'>
                                                <TodayIcon className='JobAlertCalenderStyle' />
                                                <Button color='primary'>Weekly</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListItem>
                </List>
            </Widget>
        </div>
    )
}

export default JobsAlertListView;

