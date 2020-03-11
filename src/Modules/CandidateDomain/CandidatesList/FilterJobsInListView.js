import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const JobFilters = ({ onFilterOptionClick }) => {
    return (
        <div>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Posted Date</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Today</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Last 7 days</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Last 15 days</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Last 30 days</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Employment Type</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Contract</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Permanent</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Part Time</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Salary Range</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <TextField style={{ width: "40%" }}
                        margin="dense"
                        name="range"
                        label="From Range"
                        type="number"
                        placeholder="Ex: 000000"
                        variant='outlined'
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField style={{ width: "40%" }}
                        margin="dense"
                        name="range2"
                        label="To Range"
                        type="number"
                        placeholder="Ex: 0000000"
                        variant='outlined'
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Employer Type</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Recruiter</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Direct Hire</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Sort By</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Most Relevent</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Most Recent</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Company</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Seven Technology</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>VisionX</Typography>
                    <hr />
                    <Typography style={{ cursor: 'pointer' }} onClick={onFilterOptionClick}>Careem</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Commute</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Yes"
                    />
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >Easy Apply</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                    <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Yes"
                    />
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default JobFilters;

