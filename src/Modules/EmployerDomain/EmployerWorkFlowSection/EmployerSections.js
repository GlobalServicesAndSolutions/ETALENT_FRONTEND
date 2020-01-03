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
            openEmployerSection_2:false,
            selectedStartDate: new Date(),
            selectedEndDate: new Date(),
            selectedDeadlineDate: new Date(),
            jobStatusvalue:'',
            jobFunctionvalue:''
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
    onCloseSection_2=()=>{
        this.setState({ openEmployerSection_2: false });
    }
    onStartDateChange=(date)=>{
        this.setState({selectedStartDate:date});
    }
    onEndDateChange=(date)=>{
        this.setState({selectedEndDate:date});
    }
    onDeadlineDateChange=(date)=>{
        this.setState({selectedDeadlineDate:date});
    }
    onChangeEmployerJobStatus=(event)=>{
        this.setState({jobStatusvalue:event.target.value});
    }
    onChangeEmployerJobFunction=(event)=>{
        this.setState({jobFunctionvalue:event.target.value});
    }
    onSection_2Open = () => {
        this.setState({ openEmployerSection_2: true });
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
                            <Fab size="small" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Contract information (Section 4)</Typography>
                            <Fab size="small" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Full Time Salary and Benefits Information (Section 5)</Typography>
                            <Fab size="small" aria-label="add" >
                                <AddIcon />
                            </Fab>
                        </div>
                        <hr />
                        <div className='addSection'>
                            <Typography>Requisition Team (Section 6)</Typography>
                            <Fab size="small" aria-label="add" >
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
                    />
                }
            </div>
        );
    };
}
export default EmployerWorkFlow;