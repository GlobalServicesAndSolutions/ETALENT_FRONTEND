import React, { Component } from 'react';
import Header from 'components/Header';
import JobListHeader from './jobListHeader';
import JobsGridList from './JobsGridList';
import JobsSearchInput from './jobSearchInput';
import JobsListView from './JobListView';
import JobFilters from './FilterJobsInListView';
import JobMapView from './JobMapView';
import CancelIcon from '@material-ui/icons/Cancel';
import ReactTooltip from 'react-tooltip';

class JobsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toogleSwitchValue: '',
            makeFaveriot: false,
            selectedfilter: '',
            sortByFilter: '',
            datePostedFilter: '',
            eTalentFeatureFilter: '',
            companyFilter: '',
            experienceLevelFilter: '',
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
    onFaveriotClick = () => {
        this.setState({ makeFaveriot: !this.state.makeFaveriot });
    }
    onFilterOptionClick = (event) => {
        this.setState({ selectedfilter: event.target.innerText });
    }
    onCancelFilterClick = () => {
        this.setState({ selectedfilter: '' })
    }
    onChangeSortByFilter = (event) => {
        this.setState({ sortByFilter: event.target.value, datePostedFilter: '', eTalentFeatureFilter: '', companyFilter: '', experienceLevelFilter: '' });
    }
    onChangeDatePostedFilter = (event) => {
        this.setState({ datePostedFilter: event.target.value, sortByFilter: '', eTalentFeatureFilter: '', companyFilter: '', experienceLevelFilter: '' });
    }
    onChangeEtalentFeatureFilter = (event) => {
        this.setState({ eTalentFeatureFilter: event.target.value, sortByFilter: '', datePostedFilter: '', companyFilter: '', experienceLevelFilter: '' });
    }
    onChangeCompanyFilter = (event) => {
        this.setState({ companyFilter: event.target.value, sortByFilter: '', datePostedFilter: '', eTalentFeatureFilter: '', experienceLevelFilter: '' });
    }
    onChangeExperienceLevelFilter = (event) => {
        this.setState({ experienceLevelFilter: event.target.value, sortByFilter: '', datePostedFilter: '', eTalentFeatureFilter: '', companyFilter: '' });
    }
    onCancelFilterClickGrid=()=>{
        this.setState({ experienceLevelFilter:'', sortByFilter: '', datePostedFilter: '', eTalentFeatureFilter: '', companyFilter: '' });
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <div className="app-main-container">
                    <JobListHeader
                    />
                    <div style={{ padding: '3px' }}>
                        <JobsSearchInput
                            onToogleSwitchChange={this.onToogleSwitchChange}
                            toogleSwitchValue={this.state.toogleSwitchValue}
                            onChangeSortByFilter={this.onChangeSortByFilter}
                            sortByFilter={this.state.sortByFilter}
                            onChangeDatePostedFilter={this.onChangeDatePostedFilter}
                            datePostedFilter={this.state.datePostedFilter}
                            onChangeEtalentFeatureFilter={this.onChangeEtalentFeatureFilter}
                            eTalentFeatureFilter={this.state.eTalentFeatureFilter}
                            onChangeCompanyFilter={this.onChangeCompanyFilter}
                            companyFilter={this.state.companyFilter}
                            onChangeExperienceLevelFilter={this.onChangeExperienceLevelFilter}
                            experienceLevelFilter={this.state.experienceLevelFilter}
                        />
                    </div>
                    {this.state.toogleSwitchValue === 'gridView' &&
                        <div>
                            <div style={{ display: 'flex', marginLeft: '15px' }}>
                                <h5 style={{ color: 'gray' }}>{this.state.sortByFilter?this.state.sortByFilter:
                                this.state.datePostedFilter?this.state.datePostedFilter:
                                this.state.eTalentFeatureFilter?this.state.eTalentFeatureFilter:
                                this.state.companyFilter?this.state.companyFilter:
                                this.state.experienceLevelFilter?this.state.experienceLevelFilter:
                                'All Jobs'
                                }</h5>
                                &nbsp;
                                {(this.state.sortByFilter || this.state.datePostedFilter|| this.state.eTalentFeatureFilter ||
                                this.state.companyFilter|| this.state.experienceLevelFilter) &&
                                        <sup>
                                            <CancelIcon data-tip='Cancel Filter' className='cancleJobFilterButton' onClick={this.onCancelFilterClickGrid} />
                                        </sup>
                                    }
                            </div>
                            <JobsGridList
                                makeFaveriot={this.state.makeFaveriot}
                                onFaveriotClick={this.onFaveriotClick}
                            />
                        </div>
                    }
                    {((this.state.toogleSwitchValue === '') || (this.state.toogleSwitchValue === 'listView')) &&
                        <div className='row'>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-12" style={{ marginTop: '50px' }}>
                                <JobFilters
                                    onFilterOptionClick={this.onFilterOptionClick}
                                />
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-9 col-12">
                                <div style={{ display: 'flex', marginLeft: '15px' }}>
                                    <h5 style={{ color: 'gray' }}>{this.state.selectedfilter ? this.state.selectedfilter : 'All Jobs'}</h5>
                                    &nbsp;
                                {this.state.selectedfilter &&
                                        <sup>
                                            <CancelIcon data-tip='Cancel Filter' className='cancleJobFilterButton' onClick={this.onCancelFilterClick} />
                                        </sup>
                                    }
                                </div>
                                <JobsListView
                                    makeFaveriot={this.state.makeFaveriot}
                                    onFaveriotClick={this.onFaveriotClick}
                                />
                            </div>
                        </div>
                    }
                    {this.state.toogleSwitchValue === 'mapView' &&
                        <div>
                            <JobMapView />
                        </div>
                    }
                </div>
                <ReactTooltip
                    effect='solid'
                />
            </div>
        );
    };
}

export default JobsList;