import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EmployerSectionOneReview from '../../EmployerDomain/EmployerSectionsCards/SectionOneCard';
import EmployerSectionTwoReview from '../../EmployerDomain/EmployerSectionsCards/SectionTwoCard';
import EmployerSectionThreeReview from '../../EmployerDomain/EmployerSectionsCards/SectionThreeCard';
import EmployerSectionFourReview from '../../EmployerDomain/EmployerSectionsCards/SectionFourCard';
import EmployerSectionFiveReview from '../../EmployerDomain/EmployerSectionsCards/SectionFiveCard';
import EmployerSectionSixReview from '../../EmployerDomain/EmployerSectionsCards/SectionSixCard';
import ActiveVendorsTable from 'Modules/VendorDomain/ActiveVendorsTable';


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
const JobTabList = ({ tabValue, tabHandleChange, sectionOneData,
    sectionTwoData,
    sectionThreeData,
    sectionFourData,
    sectionFiveData,
    sectionSixData,
    isEdit,
    onEditClick,
    onActivityClick,
    onNavigateClick
}) => {
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
                    <Tab label="Job Details" {...a11yProps(0)} />
                    <Tab label="Team and vendors" {...a11yProps(1)} />
                    <Tab label="Test Form" {...a11yProps(2)} />
                    <Tab label="Interview Form" {...a11yProps(3)} />
                    <Tab label="Feedback Form" {...a11yProps(4)} />
                    <div style={{width:'60%'}} align='right'>
                    <p>Days Ago</p>
                    </div>
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        {sectionOneData &&
                            <EmployerSectionOneReview
                                data={sectionOneData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}
                            />
                        }
                        {sectionTwoData &&
                            <EmployerSectionTwoReview
                                data={sectionTwoData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}
                            />
                        }
                        {sectionThreeData &&
                            <EmployerSectionThreeReview
                                data={sectionThreeData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}
                            />
                        }
                        {sectionFourData &&
                            <EmployerSectionFourReview
                                data={sectionFourData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}

                            />
                        }
                        {sectionFiveData &&
                            <EmployerSectionFiveReview
                                data={sectionFiveData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}
                            />
                        }
                        {sectionSixData &&
                            <EmployerSectionSixReview
                                data={sectionSixData}
                                isEdit={isEdit}
                                onEditClick={onEditClick}
                            />
                        }
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <h5>Team and Vendors</h5>
                <ActiveVendorsTable />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <div className='candidate-details'>
                    <h5>Test Form</h5>
                    <ul>
                        <li>
                            <p>Test Form</p>
                        </li>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <div className='candidate-details'>
                    <h5>Feedback Form</h5>
                    <ul>
                        <li>
                            <p>Feedback Form</p>
                        </li>
                    </ul>
                </div>
            </TabPanel>
        </div>
    );
}

export default JobTabList;

