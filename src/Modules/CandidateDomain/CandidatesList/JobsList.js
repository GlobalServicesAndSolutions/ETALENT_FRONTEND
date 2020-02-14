import React, { Component } from 'react';
import Header from 'components/Header';
import JobListHeader from './jobListHeader';
import JobsGridList from './JobsGridList';
import JobsSearchInput from './jobSearchInput';
import JobsListView from './JobListView';
import JobFilters from './FilterJobsInListView';
import JobMapView from './JobMapView';


class JobsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toogleSwitchValue: ''
        }
    }
    onToogleSwitchChange = (event, newValue) => {
        if (newValue) {
            this.setState({ toogleSwitchValue: newValue });
        }
        if (newValue === null) {
            this.setState({ toogleSwitchValue: event.target.id });
        }

    }
    onFilterOptionClick = (event, text) => {
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <div className="app-main-content">
                    <JobListHeader
                    />
                    <div style={{padding:'3px'}}>
                        <JobsSearchInput
                            onToogleSwitchChange={this.onToogleSwitchChange}
                            toogleSwitchValue={this.state.toogleSwitchValue}
                        />
                    </div>
                    {this.state.toogleSwitchValue === 'gridView' &&
                        <div>
                            <JobsGridList />
                        </div>
                    }
                    {((this.state.toogleSwitchValue === '') || (this.state.toogleSwitchValue === 'listView')) &&
                        <div className='row'>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-12" style={{ marginTop: '15px' }}>
                                <h5>Filter Jobs</h5>
                                <JobFilters
                                    onFilterOptionClick={this.onFilterOptionClick} />
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-10 col-12">
                                <JobsListView />
                            </div>
                        </div>
                    }
                    {this.state.toogleSwitchValue === 'mapView' &&
                        <div>
                            <JobMapView />
                        </div>
                    }
                </div>
            </div>
        );
    };
}

export default JobsList;