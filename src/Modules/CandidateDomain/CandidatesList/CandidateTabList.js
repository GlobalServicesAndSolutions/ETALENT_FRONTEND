import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Courses from "components/profile/CourseAndTrainings/CoursesAndTraining";
import Projects from "components/profile/Projects/Projects";
import Awards from "components/profile/Awards/Awards";
import Biography from "components/profile/Biography";
import Education from "components/profile/Education/EducationAndExperience";
import Skills from "components/profile/Skills/Skills";
import SoftSkills from "components/profile/SoftSkills/SoftSkills";
import Certification from "components/profile/LisenceAndCertification/Certification";
import Contact from "components/profile/Contact";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
const CandidateTabList = ({ tabValue, tabHandleChange }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabValue}
                    onChange={tabHandleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Documents" {...a11yProps(1)} />
                    <Tab label="Activity" {...a11yProps(2)} />
                    <Tab label="Interview Schedual" {...a11yProps(3)} />
                    <Tab label="Feedback" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
            <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <Biography />
                        <div id="educationcard">
                            <Education />
                        </div>
                        <div id="skillCard">
                            <Skills />
                        </div>
                        <div id="softskills">
                            <SoftSkills />
                        </div>
                        <div id="certificationCard">
                            <Certification/>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                        <Contact/>
                        <Awards/>
                        <Projects/>
                        <Courses/>
                    </div>
                </div>
      </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <div className='candidate-details'>
                    <h5>Documents Attached</h5>
                    <ul>
                        <li>
                            <p>Document Name</p>
                        </li>
                    </ul>
                </div>
      </TabPanel>
            <TabPanel value={tabValue} index={2}>
            <div className='candidate-details'>
                    <h5>Activities</h5>
                    <ul>
                        <li>
                            <p>Activity Name</p>
                        </li>
                    </ul>
                </div>
      </TabPanel>
            <TabPanel value={tabValue} index={3}>
            <div className='candidate-details'>
                    <h5>Interview Schedual</h5>
                    <ul>
                        <li>
                            <p>Interview detail</p>
                        </li>
                    </ul>
                </div>
      </TabPanel>
            <TabPanel value={tabValue} index={4}>
            <div className='candidate-details'>
                    <h5>Feedback</h5>
                    <ul>
                        <li>
                            <p>Feedback details</p>
                        </li>
                    </ul>
                </div>
      </TabPanel>
        </div>
    );
}

export default CandidateTabList;

