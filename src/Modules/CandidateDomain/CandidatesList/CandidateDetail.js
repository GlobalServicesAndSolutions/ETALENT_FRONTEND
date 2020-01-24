import React, { Component } from 'react';
import Header from 'components/Header';
import CandidateDetailHeader from './CandidateDetailHeader';
import CandidateTabList from './CandidateTabList';

class CandidateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue:0
        }
    }
    
    tabHandleChange = (event, newValue) => {
        this.setState({ tabValue: newValue });
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <CandidateDetailHeader />
                <CandidateTabList 
                tabHandleChange={this.tabHandleChange}
                tabValue={this.state.tabValue}
                />
            </div>
        );
    };
}
export default CandidateDetails;