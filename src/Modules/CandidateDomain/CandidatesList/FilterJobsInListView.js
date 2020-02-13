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
                <Typography onClick={onFilterOptionClick} style={{cursor:'pointer'}} >All</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>People</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Content</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Companies</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Group</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>School</Typography>
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
                <Typography style={{cursor:'pointer'}}>Most Relevent</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Most Recent</Typography>
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
                <Typography style={{cursor:'pointer'}}>Last 24 Hours</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Past Week</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Past Month</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>All Time</Typography>
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
                <Typography style={{cursor:'pointer'}}>Easy To Apply</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>In Networks</Typography>
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
                <Typography style={{cursor:'pointer'}}>Seven Technology</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>VisionX</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Careem</Typography>
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
                <Typography style={{cursor:'pointer'}}>InternShip</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Mid Level</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Senior Level</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Executive</Typography>
                <hr />
                <Typography style={{cursor:'pointer'}}>Director</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
  )
}

export default JobFilters;

