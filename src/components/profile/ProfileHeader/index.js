import React from "react";
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dropdown from 'react-bootstrap/Dropdown';
import EditIcon from '@material-ui/icons/Edit';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CreateIcon from '@material-ui/icons/Create';

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
  expansionPanelvalue,
  onParentExpansion,
  downloadPDF,
  shareProfile,
  isEditClick,
  openSoftSkillDialogue,
  isEdit,
  onChangeProfileSwitch,
  switchProfile,
  openProfileLevelDialogue
}) => {
  return (
    <div className="jr-profile-banner">
      <div className="jr-profile-container">
        <div className="jr-profile-banner-top">
          <div className="jr-profile-banner-top-left">
            <div className="jr-profile-banner-avatar">
              <Avatar className="size-90" alt="..." src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
            </div>
            <div className="jr-profile-banner-avatar-info">
              <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black">Salman Haider</h2>
              <p className="mb-0 jr-fs-lg">Islamabad, Pakistan</p>
              <div className='row' style={{justifyContent:'space-between'}}>
              <p>Profile Level</p>
              <CreateIcon onClick={openProfileLevelDialogue} style={{ cursor:'pointer'}}/>
              </div>
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
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                value="checkedB"
                color="primary"
                onChange={onChangeProfileSwitch}
              />
            }
            label={switchProfile?'Click back to basic profile':'Freelance profile'}
          />
        </FormGroup>
        <ExpansionPanel onChange={onParentExpansion} className='candidateProfileSectionPanal'>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography >Add Sections</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className='expansionPanel'>
            {/*********************************************************************/}
            <ExpansionPanel onChange={onExpansionPanelChange('panel1')} expanded={expansionPanelvalue === 'panel1'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >Info</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Basic Info
                        <Fab size="small" aria-label="add" onClick={basicInfoClick}>
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel onChange={onExpansionPanelChange('panel2')} expanded={expansionPanelvalue === 'panel2'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >About</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Overview
                        <Fab size="small" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel onChange={onExpansionPanelChange('panel3')} expanded={expansionPanelvalue === 'panel3'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >Background</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Education And Work Experience
                        <Fab size="small" aria-label="add" onClick={openEducationDialog}>
                    <AddIcon />
                  </Fab>
                </Typography>
                <hr />
                <Typography className='addSection'>
                  Lisence And Certification
                        <Fab size="small" aria-label="add" onClick={openCertificationDialog}>
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel onChange={onExpansionPanelChange('panel4')} expanded={expansionPanelvalue === 'panel4'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >Skills</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Skills
                        <Fab size="small" aria-label="add" onClick={onSkillDialogue}>
                    <AddIcon />
                  </Fab>
                </Typography>
                <hr />
                <Typography className='addSection'>
                  Soft Skills
                        <Fab size="small" aria-label="add" onClick={openSoftSkillDialogue}>
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel onChange={onExpansionPanelChange('panel5')} expanded={expansionPanelvalue === 'panel5'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >Accomplishments</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Projects
                        <Fab size="small" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Typography>
                <hr />
                <Typography className='addSection'>
                  Courses/Trainings
                        <Fab size="small" aria-label="add" onClick={openCourseAndTrainingDialogue}>
                    <AddIcon />
                  </Fab>
                </Typography>
                <hr />
                <Typography className='addSection'>
                  Awards
                        <Fab size="small" aria-label="add" onClick={openAwardDialog}>
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel onChange={onExpansionPanelChange('panel6')} expanded={expansionPanelvalue === 'panel6'}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography >Freelance</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='expansionPanel'>
                <Typography className='addSection'>
                  Portfolio
                        <Fab size="small" aria-label="add" >
                    <AddIcon />
                  </Fab>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {/*************************************************************************************/}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <br />
        <br />
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
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Download/Share Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={downloadPDF}><svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                      &nbsp;&nbsp;&nbsp;
                    Download as PDF
                    </Dropdown.Item>
                    <Dropdown.Item onClick={shareProfile}>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
                      </svg>
                      &nbsp;&nbsp;&nbsp;
                      Share Profile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Fab size="small" color="primary" onClick={isEditClick} aria-label="edit" className={isEdit ? 'profileAddEditButton' : 'profileAddEditButtonDisable'}>
                  <EditIcon />
                </Fab>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader;

