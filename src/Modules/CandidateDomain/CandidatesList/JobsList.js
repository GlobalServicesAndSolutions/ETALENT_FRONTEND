import React, { Component } from 'react';
import Header from 'components/Header';
import JobListHeader from './jobListHeader';
import JobsGridList from './JobsGridList';

class JobsList extends Component {
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
                <JobListHeader />
                <div>
                <JobsGridList />
                </div>
            </div>
        );
    };
}

export default JobsList;