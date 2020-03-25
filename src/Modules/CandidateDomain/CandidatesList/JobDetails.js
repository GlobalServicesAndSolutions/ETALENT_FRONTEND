import React, { Component } from 'react';
import Header from 'components/Header';
import JobDetailHeader from './JboDetailsHeader';
import JobTabList from './JobTabList';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import CandidatesPopUpInfo from './CandidatePopUp';
import AddNewUserByEtalentIdDialog from 'util/Models/AddNewUserByEtalentIdDialog';

class JobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
            candidateStage: '',
            candidatesData: [],
            candidateStatus: '',
            isCandidatePopUpOpen: false,
            candidateStagefilter: '',
            selecteCandidate: {},
            addNewUserByEtalentId: false,
        }
    }
    componentWillMount() {
        const data = [
            {
                id: 1,
                name: 'Salman',
                currentJob: 'Reactjs Developer',
                employer: 'Global Services And Solutions',
                experience: '2 Years',
                phoneNo: '03110200751',
                recruiter: 'Seven',
                stage: 'Hired',
                appliedDate: '1/17/2020'
            },
            {
                id: 2,
                name: 'Haider',
                currentJob: 'Reactjs Developer',
                employer: 'Global Services And Solutions',
                experience: '5 Years',
                phoneNo: '03110200751',
                recruiter: 'Zigron',
                stage: 'New Application',
                appliedDate: '1/17/2020'
            }
        ];
        this.setState({ candidatesData: data });
    }
    tabHandleChange = (event, newValue) => {
        this.setState({ tabValue: newValue });
    }
    onClickStage=(event)=>{
        let str=event.target.innerText;
        let res=str.slice(0, str.length-2);
        alert(res +' is Clicked');
        this.setState({candidateStagefilter:res});
    }
    onCandidateEditClick = (data) => {
        this.setState({ isCandidatePopUpOpen: true, selecteCandidate: data });
    }
    onSaveCandidateEdit = (item) => {
        this.setState({ isCandidatePopUpOpen: false });
    }
    onChangeCandidateStatus = (event) => {
        this.setState({ candidateStatus: event.target.value });
    }
    onClickAddNewUserById = () => {
        this.setState({ addNewUserByEtalentId: true });
    }
    onCloseAddNewUserById = () => {
        this.setState({ addNewUserByEtalentId: false });
    }
    onCloseCandidateEdit = () => {
        this.setState({ isCandidatePopUpOpen: false });
    }
    onCandidateStageChange = (event) => {
        this.setState({ candidateStage: event.target.value });
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
                    ///////////////////// Candidates Table Data ///////////////////
                    data={this.state.candidatesData}
                    onCandidateEditClick={this.onCandidateEditClick}
                    onChangeCandidateStatus={this.onChangeCandidateStatus}
                    candidateStatus={this.state.candidateStatus}
                    candidateStagefilter={this.state.candidateStagefilter}
                    onClickAddNewUserById={this.onClickAddNewUserById}
                    //////////////////////Candidates Header Data /////////////////
                    onClickStage={this.onClickStage}
                    jobStatus={this.state.candidateStatus ? this.state.candidateStatus : 'All'}
                />
                {this.state.isCandidatePopUpOpen ?
                    <CandidatesPopUpInfo
                        open={this.state.isCandidatePopUpOpen}
                        onCandidateStageChange={this.onCandidateStageChange}
                        onCloseCandidateEdit={this.onCloseCandidateEdit}
                        candidateStage={this.state.candidateStage}
                        selecteCandidate={this.state.selecteCandidate}
                        onSaveCandidateEdit={this.onSaveCandidateEdit}
                    />
                    :
                    <span></span>
                }
                {this.state.addNewUserByEtalentId &&
                    <AddNewUserByEtalentIdDialog
                        open={this.state.addNewUserByEtalentId}
                        handleClose={this.onCloseAddNewUserById}
                    />
                }
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