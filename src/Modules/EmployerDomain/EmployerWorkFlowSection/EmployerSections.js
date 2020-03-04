import React, { Component } from 'react';
import Header from 'components/Header';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EmployerSectionOneReview from 'Modules/EmployerDomain/EmployerSectionsCards/SectionOneCard';
import EmployerSectionOne from '../../../util/Models/EmployerSection_1';
import EmployerSectionTwo from '../../../util/Models/EmployerSection_2';
import EmployerSectionThree from '../../../util/Models/EmployerSection_3';
import EmployerSectionFour from 'util/Models/EmployerSection_4';
import EmployerSectionFive from 'util/Models/EmployerSection_5';
import EmployerSectionSix from 'util/Models/EmployerSection_6';
import EmployerSectionTwoReview from '../EmployerSectionsCards/SectionTwoCard';
import EmployerSectionThreeReview from '../EmployerSectionsCards/SectionThreeCard';
import EmployerSectionFourReview from '../EmployerSectionsCards/SectionFourCard';
import * as employerAction from '../../../actions/EmployerActions/EmployerSection';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EmployerSectionFiveReview from '../EmployerSectionsCards/SectionFiveCard';
import EmployerSectionSixReview from '../EmployerSectionsCards/SectionSixCard';
import EmployerSectionEight from 'util/Models/EmployerSection_8';

class EmployerWorkFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employerSections: {
                //******************** Section 1 Values *********************** */
                jobStatus: '',
                country: '',
                jobCreatedDate: new Date().toLocaleDateString(),
                changeDateSelected: new Date().toLocaleDateString(),
                externalJobTitle: '',
                internalJobTitle: '',
                numberOfOpenings: 0,
                jobSummary: '',
                houseNo: '',
                street: '',
                skill1: '',
                skill2: '',
                skill3: '',
                skill4: '',
                skill5: '',
                softSkill1: '',
                softSkill2: '',
                softSkill3: '',
                softSkill4: '',
                softSkill5: '',
                city: '',
                province: '',
                zipCode: '',
                targetCountry: '',
                createdBy: '',
                changeBy: '',
                //******************** Section 2 Values *********************** */
                jobCode: '',
                selectedStartDate: new Date().toLocaleDateString(),
                selectedEndDate: new Date().toLocaleDateString(),
                selectedDeadlineDate: new Date().toLocaleDateString(),
                jobStatusvalue: '',
                jobFunctionvalue: '',
                travelRequiredValue: '',
                jobRole: '',
                jobLevel: '',
                requiredEducation: '',
                requiredExperience: '',
                //******************** Section 3 Values *********************** */
                organizationCountry: '',
                legalEntity: '',
                industry: '',
                depatment: '',
                division: '',
                organizationHouseNo: '',
                organizationCity: '',
                organizationProvince: '',
                organizationZipCode: '',
                jobJustification: '',
                positionNumber: '',
                costCenterId: '',
                reasonForVacancy: '',
                replacementForWhom: '',
                requirementJustification: '',
                //******************** Section 4 Values *********************** */
                contractYears: '',
                contractMonth: '',
                contractDays: '',
                visaStatusvalue: '',
                billRateCurrency: '',
                billRate: '',
                commuteCurrencyValue: '',
                commuteAmountValue: '',
                //******************** Section 5 Values *********************** */
                budgetedPositionValue: '',
                salaryFrequencyValue: '',
                commissionValue: '',
                motorVehicleValue: '',
                accomodationValue: '',
                relocationPackValue: '',
                currency: '',
                baseSalary: '',
                employmentType: '',
                jobPayGrade: '',
                payType: '',
                targetBonusAmount: '',
                stokePakage: '',
                comments: '',
                //******************** Section 6 Values *********************** */
                hiringManager: '',
                recruiter: '',
                targetRecruiters: '',
                recruitementCoordinator: '',
                humanResourceAdministrator: ''
            },
            expansionPanelvalue: '',
            openEmployerSection_1: false,
            openEmployerSection_2: false,
            openEmployerSection_3: false,
            openEmployerSection_4: false,
            openEmployerSection_5: false,
            openEmployerSection_6: false,
            openEmployerSection_8: false,
            isValueChanges: false,
            isAddQuestion: false,
            questionTypeValue:''
        }
    }
    onSectionValuesChange = (event, date, name) => {
        this.setState({ isValueChanges: true })
        let sectionInformation = this.state.employerSections;
        if (name) {
            sectionInformation[name] = date;
            this.setState({ sectionInformation });
        }
        else {
            let field = event.target.name;
            sectionInformation[field] = event.target.value;
            this.setState({ sectionInformation });
        }
    }
    onSaveSectionOne = () => {
        this.props.employerActions.onSaveSectionOnedata(this.state.employerSections);
        this.setState({ openEmployerSection_1: false });

    }
    onDeleteSectionOne = () => {
        this.props.employerActions.onDeleteSectionOnedata();
    }
    onSaveSectionTwo = () => {
        this.props.employerActions.onSaveSectionTwodata(this.state.employerSections);
        this.setState({ openEmployerSection_2: false, expansionPanelvalue: '' });
    }
    onDeleteSectionTwo = () => {
        this.props.employerActions.onDeleteSectionTwodata();
    }
    onSaveSectionThree = () => {
        this.props.employerActions.onSaveSectionThreedata(this.state.employerSections);
        this.setState({ openEmployerSection_3: false });
    }
    onDeleteSectionThree = () => {
        this.props.employerActions.onDeleteSectionThreedata();
    }
    onSaveSectionFour = () => {
        this.props.employerActions.onSaveSectionFourdata(this.state.employerSections);
        this.setState({ openEmployerSection_4: false });
    }
    onDeleteSectionFour = () => {
        this.props.employerActions.onDeleteSectionFourdata();
    }
    onSaveSectionFive = () => {
        this.props.employerActions.onSaveSectionFivedata(this.state.employerSections);
        this.setState({ openEmployerSection_5: false });
    }
    onDeleteSectionFive = () => {
        this.props.employerActions.onDeleteSectionFivedata();
    }
    onSaveSectionSix = () => {
        this.props.employerActions.onSaveSectionSixdata(this.state.employerSections);
        this.setState({ openEmployerSection_6: false });
    }
    onDeleteSectionSix = () => {
        this.props.employerActions.onDeleteSectionSixdata();
    }
    onSection_1Open = () => {
        this.setState({ openEmployerSection_1: true });
    }
    onCloseSection_1 = () => {
        this.setState({ openEmployerSection_1: false });
    }
    onCloseSection_2 = () => {
        this.setState({ openEmployerSection_2: false });
    }
    onSection_2Open = () => {
        this.setState({ openEmployerSection_2: true });
    }
    onSection_3Open = () => {
        this.setState({ openEmployerSection_3: true });
    }
    onCloseSection_3 = () => {
        this.setState({ openEmployerSection_3: false });
    }
    onSection_4Open = () => {
        this.setState({ openEmployerSection_4: true });
    }
    onCloseSection_4 = () => {
        this.setState({ openEmployerSection_4: false });
    }
    onSection_5Open = () => {
        this.setState({ openEmployerSection_5: true });
    }
    onCloseSection_5 = () => {
        this.setState({ openEmployerSection_5: false });
    }
    onSection_6Open = () => {
        this.setState({ openEmployerSection_6: true });
    }
    onCloseSection_6 = () => {
        this.setState({ openEmployerSection_6: false });
    }
    onSection_8Open = () => {
        this.setState({ openEmployerSection_8: true });
    }
    onCloseSection_8 = () => {
        this.setState({ openEmployerSection_8: false });
    }
    onClickAddQuestion = () => {
        this.setState({ isAddQuestion: true });
    }
    onChangeQuestionType=(event)=>{
        this.setState({questionTypeValue:event.target.value});
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <ExpansionPanel className='workFlowSectionPanal' >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography >Add Work Flow sections</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className='expansionPanel'>
                        {/*********************************************************************/}
                        <div className='addSection'>
                            <Typography>Section 1</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_1Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Job Details (Section 2)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_2Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Organizational Information (Section 3)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_3Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Contract information (Section 4)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_4Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Full Time Salary and Benefits Information (Section 5)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_5Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Requisition Team (Section 6)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_6Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Attachments (Section 7)</Typography>
                            <Fab size="small" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Requisition Comments BOX (Section 8)</Typography>
                            <Fab size="small" aria-label="add" onClick={this.onSection_8Open}>
                                <AddIcon />
                            </Fab>
                        </div>
                        {/*************************************************************************************/}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        {this.props.sectionOneData &&
                            <EmployerSectionOneReview
                                data={this.props.sectionOneData}
                                onEditSectionOne={this.onSection_1Open}
                                onDeleteSectionOne={this.onDeleteSectionOne}
                            />
                        }
                        {this.props.sectionTwoData &&
                            <EmployerSectionTwoReview
                                data={this.props.sectionTwoData}
                                onEditSectionTwo={this.onSection_2Open}
                                onDeleteSectionTwo={this.onDeleteSectionTwo}
                            />
                        }
                        {this.props.sectionThreeData &&
                            <EmployerSectionThreeReview
                                data={this.props.sectionThreeData}
                                onEditSectionThree={this.onSection_3Open}
                                onDeleteSectionThree={this.onDeleteSectionThree}
                            />
                        }
                        {this.props.sectionFourData &&
                            <EmployerSectionFourReview
                                data={this.props.sectionFourData}
                                onEditSectionFour={this.onSection_4Open}
                                onDeleteSectionFour={this.onDeleteSectionFour}

                            />
                        }
                        {this.props.sectionFiveData &&
                            <EmployerSectionFiveReview
                                data={this.props.sectionFiveData}
                                onEditSectionFive={this.onSection_5Open}
                                onDeleteSectionFive={this.onDeleteSectionFive}
                            />
                        }
                        {this.props.sectionSixData &&
                            <EmployerSectionSixReview
                                data={this.props.sectionSixData}
                                onEditSectionSix={this.onSection_6Open}
                                onDeleteSectionSix={this.onDeleteSectionSix}
                            />
                        }
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    </div>
                </div>
                {this.state.openEmployerSection_1 &&
                    <EmployerSectionOne
                        open={this.state.openEmployerSection_1}
                        onCloseSection_1={this.onCloseSection_1}
                        onSectionValuesChange={this.onSectionValuesChange}
                        onSaveSectionOne={this.onSaveSectionOne}
                        data={this.props.sectionOneData && !this.state.isValueChanges ? this.props.sectionOneData : this.state.employerSections}
                    />
                }
                {this.state.openEmployerSection_2
                    &&
                    <EmployerSectionTwo
                        open={this.state.openEmployerSection_2}
                        onCloseSection_2={this.onCloseSection_2}
                        data={this.props.sectionTwoData && !this.state.isValueChanges ? this.props.sectionTwoData : this.state.employerSections}
                        onSectionValuesChange={this.onSectionValuesChange}
                        onSaveSectionTwo={this.onSaveSectionTwo}
                    />
                }
                {this.state.openEmployerSection_3 &&
                    <EmployerSectionThree
                        open={this.state.openEmployerSection_3}
                        onCloseSection_3={this.onCloseSection_3}
                        onSectionValuesChange={this.onSectionValuesChange}
                        onSaveSectionThree={this.onSaveSectionThree}
                        data={this.props.sectionThreeData && !this.state.isValueChanges ? this.props.sectionThreeData : this.state.employerSections}
                    />
                }
                {this.state.openEmployerSection_4 &&
                    <EmployerSectionFour
                        open={this.state.openEmployerSection_4}
                        onCloseSection_4={this.onCloseSection_4}
                        data={this.props.sectionFourData && !this.state.isValueChanges ? this.props.sectionFourData : this.state.employerSections}
                        onSaveSectionFour={this.onSaveSectionFour}
                        onSectionValuesChange={this.onSectionValuesChange}
                    />
                }
                {this.state.openEmployerSection_5 &&
                    <EmployerSectionFive
                        open={this.state.openEmployerSection_5}
                        onCloseSection_5={this.onCloseSection_5}
                        data={this.props.sectionFiveData && !this.state.isValueChanges ? this.props.sectionFiveData : this.state.employerSections}
                        onSectionValuesChange={this.onSectionValuesChange}
                        onSaveSectionFive={this.onSaveSectionFive}
                    />
                }
                {this.state.openEmployerSection_6 &&
                    <EmployerSectionSix
                        open={this.state.openEmployerSection_6}
                        onCloseSection_6={this.onCloseSection_6}
                        onSectionValuesChange={this.onSectionValuesChange}
                        onSaveSectionSix={this.onSaveSectionSix}
                        data={this.props.sectionSixData && !this.state.isValueChanges ? this.props.sectionSixData : this.state.employerSections}
                    />
                }
                {this.state.openEmployerSection_8 &&
                    <EmployerSectionEight
                        open={this.state.openEmployerSection_8}
                        onCloseSection_8={this.onCloseSection_8}
                        onClickAddQuestion={this.onClickAddQuestion}
                        isAddQuestion={this.state.isAddQuestion}
                        onChangeQuestionType={this.onChangeQuestionType}
                        questionTypeValue={this.state.questionTypeValue}
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
function mapDispatchToProps(dispatch) {
    return {
        employerActions: bindActionCreators(employerAction, dispatch)
    };
}

EmployerWorkFlow.propTypes = {
    sectionOneData: PropTypes.object,
    sectionTwoData: PropTypes.object,
    sectionThreeData: PropTypes.object,
    sectionFourData: PropTypes.object,
    sectionFiveData: PropTypes.object,
    sectionSixData: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerWorkFlow);