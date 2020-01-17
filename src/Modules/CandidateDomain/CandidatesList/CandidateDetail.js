import React, { Component } from 'react';
import Header from 'components/Header';

class CandidateDetails extends Component {
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
                <h5>Candidate Detail</h5>
            </div>
        );
    };
}
export default CandidateDetails;