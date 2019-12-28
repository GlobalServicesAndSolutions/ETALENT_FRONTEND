import React from "react";
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const ProfileHeader = ({ onEducationView,
   onSkillView,
    onCertificationView,
    openEducationDialog,
    onSkillDialogue,
    openCertificationDialog,
    openAwardDialog,
    basicInfoClick,
    openCourseAndTrainingDialogue,
    onExpansionPanelChange,
    expansionPanelvalue
   }) => {
  return (
    <div className="jr-profile-banner">
      <div className="jr-profile-container">
        <div className="jr-profile-banner-top">
          <div className="jr-profile-banner-top-left">
            <div className="jr-profile-banner-avatar">
              <Avatar className="size-90" alt="..." src="" />
            </div>
            <div className="jr-profile-banner-avatar-info">
              <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black">Salman Haider</h2>
              <p className="mb-0 jr-fs-lg">Islamabad, Pakistan</p>
            </div>
          </div>
          <div className="jr-profile-banner-top-right">
            <ul className="jr-follower-list">
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">2k+</span>
                <span className="jr-fs-sm">Followers</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">847</span>
                <span className="jr-fs-sm">Following</span></li>
              <li>
                <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">327</span>
                <span className="jr-fs-sm">Friends</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="jr-profile-banner-bottom">
          <div className="jr-tab-list">
            <ul className="jr-navbar-nav">
              <li>
                <span className="jr-link">About</span>
              </li>
              <li>
                <span className="jr-link" onClick={onEducationView}>Education And Experience</span>
              </li>
              <li>
                <span className="jr-link" onClick={onSkillView}>Skills </span>
              </li>
              <li>
                <span className="jr-link">Awards</span>
              </li>
              <li>
                <span className="jr-link" onClick={onCertificationView}>Certification</span>
              </li>
              <li>
                <span className="jr-link">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ExpansionPanel style={{width: '50%'}} >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >Add Sections</Typography>
                  </ExpansionPanelSummary>
                <ExpansionPanelDetails className='expansionPanel'>
                  {/*********************************************************************/}
                  <ExpansionPanel onChange={onExpansionPanelChange('panel1')} expanded={expansionPanelvalue==='panel1'}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >Info</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className='expansionPanel'>
                  <Typography>
                      <div className='addSection'>
                        Basic Info
                        <Fab size="small" aria-label="add" onClick={basicInfoClick}>
                        <AddIcon />
                        </Fab>
                      </div>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel onChange={onExpansionPanelChange('panel2')} expanded={expansionPanelvalue==='panel2'}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >About</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className='expansionPanel'>
                  <Typography>
                      <div className='addSection'>
                        About
                        <Fab size="small" aria-label="add">
                        <AddIcon />
                        </Fab>
                      </div>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel onChange={onExpansionPanelChange('panel3')} expanded={expansionPanelvalue==='panel3'}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >Background</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className='expansionPanel'>
                    <Typography>
                      <div className='addSection'>
                        Education And Work Experience
                        <Fab size="small" aria-label="add" onClick={openEducationDialog}>
                        <AddIcon />
                        </Fab>
                      </div>
                    </Typography>
                    <hr/>
                    <Typography>
                      <div className='addSection'>
                        Lisence And Certification
                        <Fab size="small" aria-label="add" onClick={openCertificationDialog}> 
                        <AddIcon />
                        </Fab>
                      </div>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel onChange={onExpansionPanelChange('panel4')} expanded={expansionPanelvalue==='panel4'}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >Skills</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className='expansionPanel'>
                    <Typography>
                    <div className='addSection'>
                        Skills
                        <Fab size="small" aria-label="add" onClick={onSkillDialogue}>
                        <AddIcon />
                        </Fab>
                      </div>
                  </Typography>
                  <hr/>
                  <Typography>
                    <div className='addSection'>
                        Soft Skills
                        <Fab size="small" aria-label="add">
                        <AddIcon />
                        </Fab>
                      </div>
                  </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel onChange={onExpansionPanelChange('panel5')} expanded={expansionPanelvalue==='panel5'}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography >Accomplishments</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className='expansionPanel'>
                    <Typography>
                    <div className='addSection'>
                        Projects
                        <Fab size="small" aria-label="add">
                        <AddIcon />
                        </Fab>
                      </div>
                  </Typography>
                  <hr/>
                  <Typography>
                    <div className='addSection'>
                        Courses/Trainings
                        <Fab size="small" aria-label="add" onClick={openCourseAndTrainingDialogue}>
                        <AddIcon />
                        </Fab>
                      </div>
                  </Typography>
                  <hr/>
                  <Typography>
                    <div className='addSection'>
                        Awards
                        <Fab size="small" aria-label="add" onClick={openAwardDialog}>
                        <AddIcon />
                        </Fab>
                      </div>
                  </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                {/*************************************************************************************/}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
    </div>
  )
}

export default ProfileHeader;

