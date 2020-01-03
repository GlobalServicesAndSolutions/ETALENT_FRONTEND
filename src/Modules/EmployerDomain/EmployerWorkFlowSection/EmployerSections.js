import React, { Component } from 'react';
import Header from 'components/Header';
import Biography from '../../../../src/components/profile/Biography/index';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EmployerSectionOne from '../../../util/Models/EmployerSection_1';
import EmployerSectionTwo from '../../../util/Models/EmployerSection_2';
import EmployerSectionThree from '../../../util/Models/EmployerSection_3';
import EmployerSectionFour from 'util/Models/EmployerSection_4';
import EmployerSectionFive from 'util/Models/EmployerSection_5';
import EmployerSectionSix from 'util/Models/EmployerSection_6';

class EmployerWorkFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expansionPanelvalue: '',
            employerStatus: '',
            openEmployerSection_1: false,
            country: '',
            selectedDate: new Date(),
            changeDateSelected: new Date(),
            openEmployerSection_2: false,
            selectedStartDate: new Date(),
            selectedEndDate: new Date(),
            selectedDeadlineDate: new Date(),
            jobStatusvalue: '',
            jobFunctionvalue: '',
            travelRequiredValue:'',
            openEmployerSection_3: false,
            organizationInformation:
            {
                organizationCountry: ''
            },
            openEmployerSection_4: false,
            contractInformation:
            {
                contractYears:'',
                contractMonth:'',
                contractDays:'',
                visaStatusvalue:'',
                commuteCurrencyValue:'',
                commuteAmountValue:''
            },
            openEmployerSection_5: false,
            fullTimeSalaryAndBenifits:
            {
                budgetedPositionValue:'',
                salaryFrequencyValue:'',
                commissionValue:'',
                motorVehicleValue:'',
                accomodationValue:'',
                relocationPackValue:''
            },
            openEmployerSection_6:false
        }
    }
    onDateChange = (date) => {
        this.setState({ selectedDate: date });
    }
    onJobChangeDateChange = (date) => {
        this.setState({ changeDateSelected: date });
    }
    onChangeEmployerStatus = (event) => {
        this.setState({ employerStatus: event.target.value });
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
    onCountryChange = (event) => {
        this.setState({ country: event.target.value });
    }
    onCloseSection_2 = () => {
        this.setState({ openEmployerSection_2: false });
    }
    onStartDateChange = (date) => {
        this.setState({ selectedStartDate: date });
    }
    onEndDateChange = (date) => {
        this.setState({ selectedEndDate: date });
    }
    onDeadlineDateChange = (date) => {
        this.setState({ selectedDeadlineDate: date });
    }
    onChangeEmployerJobStatus = (event) => {
        this.setState({ jobStatusvalue: event.target.value });
    }
    onChangeEmployerJobFunction = (event) => {
        this.setState({ jobFunctionvalue: event.target.value });
    }
    onSection_2Open = () => {
        this.setState({ openEmployerSection_2: true });
    }
    ontravelRequiredValueChange=(event) =>{
        this.setState({travelRequiredValue:event.target.value});
    }
    onSection_3Open = () => {
        this.setState({ openEmployerSection_3: true });
    }
    onCloseSection_3 = () => {
        this.setState({ openEmployerSection_3: false });
    }
    onOrganizationInformationChange = (event) => {
        let organizationInformation=this.state.organizationInformation;
        let field=event.target.name;
        organizationInformation[field]=event.target.value;
        this.setState({ organizationInformation})
    }
    onSection_4Open = () => {
        this.setState({ openEmployerSection_4: true });
    }
    onCloseSection_4 = () => {
        this.setState({ openEmployerSection_4: false });
    }
    onContractinformationChange=(event)=>{
        let contractInformation=this.state.contractInformation;
        let field=event.target.name;
        contractInformation[field]=event.target.value;
        this.setState({contractInformation});
    }
    onSection_5Open = () => {
        this.setState({ openEmployerSection_5: true });
    }
    onCloseSection_5 = () => {
        this.setState({ openEmployerSection_5: false });
    }
    onChangefullTimeSalaryAndBenifits=(event)=>{
        let fullTimeSalaryAndBenifits=this.state.fullTimeSalaryAndBenifits;
        let field=event.target.name;
        fullTimeSalaryAndBenifits[field]=event.target.value;
        this.setState({fullTimeSalaryAndBenifits});
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
                <ExpansionPanel onChange={this.onParentExpansion} style={{ width: '40%' }}>
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
                        <Biography />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    </div>
                </div>
                {this.state.openEmployerSection_1 &&
                    <EmployerSectionOne
                        open={this.state.openEmployerSection_1}
                        onCloseSection_1={this.onCloseSection_1}
                        onChangeEmployerStatus={this.onChangeEmployerStatus}
                        value={this.state.onChangeEmployerStatus}
                        onCountryChange={this.onCountryChange}
                        country={this.state.country}
                        onDateChange={this.onDateChange}
                        selectedDate={this.state.selectedDate}
                        onJobChangeDateChange={this.onJobChangeDateChange}
                        changeDateSelected={this.state.changeDateSelected}
                    />
                }
                {this.state.openEmployerSection_2
                    &&
                    <EmployerSectionTwo
                        open={this.state.openEmployerSection_2}
                        onCloseSection_2={this.onCloseSection_2}
                        selectedStartDate={this.state.selectedStartDate}
                        onStartDateChange={this.onStartDateChange}
                        selectedEndDate={this.state.selectedEndDate}
                        onEndDateChange={this.onEndDateChange}
                        selectedDeadlineDate={this.state.selectedDeadlineDate}
                        onDeadlineDateChange={this.onDeadlineDateChange}
                        jobStatusvalue={this.state.jobStatusvalue}
                        onChangeEmployerJobStatus={this.onChangeEmployerJobStatus}
                        jobFunctionvalue={this.state.jobFunctionvalue}
                        onChangeEmployerJobFunction={this.onChangeEmployerJobFunction}
                        travelRequiredValue={this.state.travelRequiredValue}
                        ontravelRequiredValueChange={this.ontravelRequiredValueChange}
                    />
                }
                {this.state.openEmployerSection_3 &&
                    <EmployerSectionThree
                        open={this.state.openEmployerSection_3}
                        onCloseSection_3={this.onCloseSection_3}
                        organizationCountry={this.state.organizationInformation.organizationCountry}
                        onOrganizationInformationChange={this.onOrganizationInformationChange}
                    />
                }
                {this.state.openEmployerSection_4 &&
                    <EmployerSectionFour
                    open={this.state.openEmployerSection_4}
                    onCloseSection_4={this.onCloseSection_4}
                    contractYears={this.state.contractInformation.contractYears}
                    contractMonth={this.state.contractInformation.contractMonth}
                    contractDays={this.state.contractInformation.contractDays}
                    visaStatusvalue={this.state.contractInformation.visaStatusvalue}
                    commuteCurrencyValue={this.state.commuteCurrencyValue}
                    commuteAmountValue={this.state.contractInformation.commuteAmountValue}
                    onContractinformationChange={this.onContractinformationChange}
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
export default EmployerWorkFlow;