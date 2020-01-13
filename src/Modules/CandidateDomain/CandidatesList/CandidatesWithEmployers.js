import React, { Component } from 'react';
import Header from 'components/Header';
import CandidateListHeader from './CandidateListHeader';
import CandidatesTable from './CandidatesList';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="app-main-container">
                <div className="app-header ">
                    <Header />
                </div>
                <CandidateListHeader />
                <div style={{width:'100%'}} >
                    <CandidatesTable/>
                </div>
            </div>
        );
    };
}
export default Candidates;