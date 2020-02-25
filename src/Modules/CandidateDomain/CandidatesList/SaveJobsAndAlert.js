import React, { Component } from 'react';
import Header from 'components/Header';

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
                <h4>Favorite Jobs and Alerts</h4>
            </div>
        );
    };
}

export default FavoriteJobsAndAlerts;