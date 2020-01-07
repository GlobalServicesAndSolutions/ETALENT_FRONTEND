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
import * as employerAction from '../../../actions/EmployerActions/EmployerSectionOne';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class EmployerWorkFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employerSections: {
                //******************** Section 1 Values *********************** */
                jobStatus: '',
                country: '',
                jobCreatedDate: new Date(),
                changeDateSelected: new Date(),
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
                jobCode:'',
                selectedStartDate: new Date(),
                selectedEndDate: new Date(),
                selectedDeadlineDate: new Date(),
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
                billRateCurrency:'',
                billRate:'',
                commuteCurrencyValue:'',
                commuteAmountValue: '',
                //******************** Section 5 Values *********************** */
                budgetedPositionValue: '',
                salaryFrequencyValue: '',
                commissionValue: '',
                motorVehicleValue: '',
                accomodationValue: '',
                relocationPackValue: '',
            },
            expansionPanelvalue: '',
            openEmployerSection_1: false,
            openEmployerSection_2: false,
            openEmployerSection_3: false,
            openEmployerSection_4: false,
            openEmployerSection_5: false,
            openEmployerSection_6: false,
            isSectionOneDone: false,
            isSectionTwoDone: false,
            isSectionThreeDone: false,
            isSectionFourDone: false,
            isSectionFiveDone: false,
            isSectionSixDone: false
        }
    }
    onSectionValuesChange = (event, date, name) => {
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
        this.setState({ isSectionOneDone: true, openEmployerSection_1: false });
    }
    onSaveSectionTwo=()=>{
        this.setState({ isSectionTwoDone: true, openEmployerSection_2: false });
    }
    onSaveSectionThree=()=>{
        this.setState({ isSectionThreeDone: true, openEmployerSection_3: false });
    }
    onSaveSectionFour=()=>{
        this.setState({ isSectionFourDone: true, openEmployerSection_4: false });
    }
    onExpansionPanelChange = panel => (event, expandedPanel) => {
        this.setState({ expansionPanelvalue: expandedPanel ? panel : 'notExpanded' })
    }
    onParentExpansion = (e, parentPanel) => {
        if (parentPanel === false) {
            this.setState({ expansionPanelvalue: '' });
        }
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
    render() {
        return (
            <div className="app-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <ExpansionPanel onChange={this.onParentExpansion} style={{ width: '40%' }} >
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
                            <Fab size="small" aria-label="add" >
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
                            />
                        }
                        {this.state.isSectionTwoDone &&
                        <EmployerSectionTwoReview 
                        data={this.state.employerSections}
                        />
                        }
                        {this.state.isSectionThreeDone &&
                        <EmployerSectionThreeReview 
                        data={this.state.employerSections}
                        />
                        }
                        {this.state.isSectionFourDone &&
                        <EmployerSectionFourReview
                        data={this.state.employerSections}
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
                        data={this.state.employerSections}
                    />
                }
                {this.state.openEmployerSection_2
                    &&
                    <EmployerSectionTwo
                    open={this.state.openEmployerSection_2}
                    onCloseSection_2={this.onCloseSection_2}
                    data={this.state.employerSections}
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
                        data={this.state.employerSections}
                    />
                }
                {this.state.openEmployerSection_4 &&
                    <EmployerSectionFour
                        open={this.state.openEmployerSection_4}
                        onCloseSection_4={this.onCloseSection_4}
                        onSectionValuesChange={this.onSectionValuesChange}
                        data={this.state.employerSections}
                        onSaveSectionFour={this.onSaveSectionFour}
                    />
                }
                {this.state.openEmployerSection_5 &&
                    <EmployerSectionFive
                        open={this.state.openEmployerSection_5}
                        onCloseSection_5={this.onCloseSection_5}
                        budgetedPositionValue={this.state.fullTimeSalaryAndBenifits.budgetedPositionValue}
                        salaryFrequencyValue={this.state.fullTimeSalaryAndBenifits.salaryFrequencyValue}
                        commissionValue={this.state.fullTimeSalaryAndBenifits.commissionValue}
                        motorVehicleValue={this.state.fullTimeSalaryAndBenifits.motorVehicleValue}
                        accomodationValue={this.state.fullTimeSalaryAndBenifits.accomodationValue}
                        relocationPackValue={this.state.fullTimeSalaryAndBenifits.relocationPackValue}
                        onChangefullTimeSalaryAndBenifits={this.onChangefullTimeSalaryAndBenifits}
                    />
                }
                {this.state.openEmployerSection_6 &&
                    <EmployerSectionSix
                        open={this.state.openEmployerSection_6}
                        onCloseSection_6={this.onCloseSection_6}
                    />
                }
            </div>
        );
    };
}
const mapStateToProps = ({
    employerSection,
  }) => {
    const { sectionOneData } = employerSection;
    return {
        sectionOneData,
    };
  }
function mapDispatchToProps(dispatch) {
    return {
      employerActions: bindActionCreators(employerAction, dispatch)
    };
  }
  
  EmployerWorkFlow.propTypes = {
    sectionOneData: PropTypes.object
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EmployerWorkFlow);