import React, { Component } from 'react';
import Header from 'components/Header';
import SaveJobsList from './SaveJobsAndAlertsList';
import Widget from "components/Widget";

class FavoriteJobsAndAlerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <Widget styleName="jr-card-profile" >
                <h4 align='center'>Favorite Jobs and Alerts</h4>
                </Widget>
                <hr/>
                <SaveJobsList />
            </div>
        );
    };
}

export default FavoriteJobsAndAlerts;