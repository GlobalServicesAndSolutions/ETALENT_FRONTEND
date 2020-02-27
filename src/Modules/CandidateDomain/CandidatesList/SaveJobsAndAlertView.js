import React, { Component } from 'react';
import Header from 'components/Header';
import SaveJobsList from './SaveJobsAndAlertsList';
import Widget from "components/Widget";
import JobsAlertListView from './JobAlertList';
import { Button } from '@material-ui/core';
import JobAlertCreateModel from 'util/Models/JobAlertModel';

class FavoriteJobsAndAlerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreateAlertClick:false,
            alertJobTypeValue:''
        }
    }
    onClickCreateAlert=()=>{
        this.setState({isCreateAlertClick:true});
    }
    onCloseCreateAlertDialog=()=>{
        this.setState({isCreateAlertClick:false, alertJobTypeValue:''});
    }
    onchangeAlertJobType=(event)=>{
        this.setState({alertJobTypeValue:event.target.value});
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <Widget styleName="jr-card-profile AlertAndFavoriteJobheaders" >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 align='center'>Alerts</h4>
                        <Button color='primary' onClick={this.onClickCreateAlert}>Create Alert</Button>
                    </div>
                </Widget>
                <hr />
                <JobsAlertListView />
                <hr />
                <Widget styleName="jr-card-profile AlertAndFavoriteJobheaders" >
                    <h4 >Favourite Jobs</h4>
                </Widget>
                <hr />
                <SaveJobsList />

                {this.state.isCreateAlertClick &&
                <JobAlertCreateModel 
                open={this.state.isCreateAlertClick}
                handleClose={this.onCloseCreateAlertDialog}
                onchangeAlertJobType={this.onchangeAlertJobType}
                alertJobTypeValue={this.state.alertJobTypeValue}
                />
                }
            </div>
        );
    };
}

export default FavoriteJobsAndAlerts;