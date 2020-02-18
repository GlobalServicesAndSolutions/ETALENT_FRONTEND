import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const JobFilters = ({onFilterOptionClick}) => {
    return (
        <div>
        <ExpansionPanel  >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography >Jobs</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='expansionPanel'>
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>All</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>People</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Content</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Companies</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Group</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>School</Typography>
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
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Most Relevent</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Most Recent</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography >Date Posted</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='expansionPanel'>
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Last 24 Hours</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Past Week</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Past Month</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>All Time</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography >E-Talent Features</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='expansionPanel'>
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Easy To Apply</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>In Networks</Typography>
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
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Seven Technology</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>VisionX</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Careem</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography >Experience Level</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className='expansionPanel'>
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>InternShip</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Mid Level</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Senior Level</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Executive</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}} onClick={onFilterOptionClick}>Director</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
  )
}

export default JobFilters;

