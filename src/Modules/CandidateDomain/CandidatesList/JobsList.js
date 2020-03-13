import React, { Component } from 'react';
import Header from 'components/Header';
import JobsGridList from './JobsGridList';
import JobsSearchInput from './jobSearchInput';
import JobsListView from './JobListView';
import JobFilters from './FilterJobsInListView';
import CancelIcon from '@material-ui/icons/Cancel';
import ReactTooltip from 'react-tooltip';
import MapView from './JobMapView';
import * as jobActions from '../../../actions/JobActions/JobActions';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class JobsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toogleSwitchValue: '',
            makeFaveriot: false,
            filterGridListDropdown: {
                datePostedFilter: '',
                employmentTypeFilter: '',
                employerTypeFilter: '',
                companyFilter: '',
                commuteFilter: '',
                easyApplyFilter:''
            },
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
        let filterObj = {
            id: event.target.id,
            name: event.target.innerText,
        }
        this.props.jobActions.onClickFilterOptions(filterObj);
    }
    onCancelFilterClick = (filter) => {
        this.props.jobActions.onCancelFilter(filter);
    }
    onSelectGridListFilter=(event)=>{
        let filterObj={
            name:event.target.value,
        };
        let filterdata= this.state.filterGridListDropdown;
        let field=event.target.name;
        filterdata[field]=event.target.value;
        this.setState({filterdata});
        this.props.jobActions.onClickFilterOptions(filterObj);
    }
    onCancelFilterClickGrid = (filter) => {
        this.props.jobActions.onCancelFilter(filter);
    }
    render() {
        const { filterArray } = this.props;
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <div className="app-main-container">
                    <div style={{ padding: '3px' }}>
                        <JobsSearchInput
                            onToogleSwitchChange={this.onToogleSwitchChange}
                            toogleSwitchValue={this.state.toogleSwitchValue}
                            onSelectGridListFilter={this.onSelectGridListFilter}
                            data={this.state.filterGridListDropdown}
                        />
                    </div>
                    {this.state.toogleSwitchValue === 'gridView' &&
                        <div>
                            <div className='row'>
                           {filterArray.length>0 ? filterArray.map((filter)=>{
                               return (
                            <div style={{ display: 'flex', marginLeft: '50px' }}>
                            <span style={{ color: 'gray' }}>{filter.name}</span>
                            &nbsp;
                                <sup>
                                    <CancelIcon data-tip='Cancel Filter' className='cancleJobFilterButton' onClick={()=>this.onCancelFilterClickGrid(filter)} />
                                </sup>
                        </div>
                        );
                           }):
                           <span style={{ color: 'gray', marginLeft: '50px' }}>All Jobs</span>
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
                            <div className="col-xl-3 col-lg-3 col-md-4 col-12" style={{ marginTop: '40px' }}>
                                <JobFilters
                                    onFilterOptionClick={this.onFilterOptionClick}
                                />
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-9 col-12">
                                <div className='row'>
                                    {filterArray.length > 0 ? filterArray.map((filter) => {
                                        return (
                                            <div style={{ display: 'flex', marginLeft: '15px' }}>
                                                <span style={{ color: 'gray' }}>{filter.name}</span>
                                        &nbsp;
                                                <sup>
                                                    <CancelIcon data-tip='Cancel Filter' className='cancleJobFilterButton' onClick={() => this.onCancelFilterClick(filter)} />
                                                </sup>
                                            </div>
                                        );
                                    }) :
                                        <span style={{ color: 'gray', marginLeft: '15px' }}>All Jobs</span>
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
                            <MapView />
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

const mapStateToProps = ({
    jobReducer,
}) => {
    const { filterArray } = jobReducer;
    return {
        filterArray,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        jobActions: bindActionCreators(jobActions, dispatch)
    };
}

JobsList.propTypes = {
    filterArray: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);