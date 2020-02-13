import React, { Component } from 'react';
import Header from 'components/Header';
import JobsSearchFilters from './SearchedJobListFilters';

class JobsSearchedList extends Component {
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
                <div className="app-main-content">
                    <JobsSearchFilters />
                    <div className='row'>
                        <div className="col-sm-12 col-md-6">
                            <h4>Jobs</h4>
                            <p>Hello</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h4>Details</h4>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
}

export default JobsSearchedList;