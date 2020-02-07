import React, { Component } from 'react';
import Header from 'components/Header';
import JobDetailHeader from './JboDetailsHeader';
import JobTabList from './JobTabList';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class JobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0
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
                <JobDetailHeader />
                <JobTabList
                    tabHandleChange={this.tabHandleChange}
                    tabValue={this.state.tabValue}
                    sectionOneData={this.props.sectionOneData}
                    sectionTwoData={this.props.sectionTwoData}
                    sectionThreeData={this.props.sectionThreeData}
                    sectionFourData={this.props.sectionFourData}
                    sectionFiveData={this.props.sectionFiveData}
                    sectionSixData={this.props.sectionSixData}
                    isEdit={true}
                        />
            </div>
        );
    };
}
const mapStateToProps = ({
    employerSection,
}) => {
    const { sectionOneData, sectionTwoData, sectionThreeData, sectionFourData, sectionFiveData, sectionSixData } = employerSection;
    return {
        sectionOneData,
        sectionTwoData,
        sectionThreeData,
        sectionFourData,
        sectionFiveData,
        sectionSixData
    };
}

JobDetails.propTypes = {
    sectionOneData: PropTypes.object,
    sectionTwoData: PropTypes.object,
    sectionThreeData: PropTypes.object,
    sectionFourData: PropTypes.object,
    sectionFiveData: PropTypes.object,
    sectionSixData: PropTypes.object
};

export default connect(mapStateToProps)(JobDetails);