import React from "react";
import Widget from "components/Widget";
import HorizontalBarChart from "components/dashboard/default/HorizontalBarChart";
import PieChart from 'components/dashboard/default/PieChart';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        marginTop: '-30px',
        marginLeft: '-30px',
        marginRight: '-29px',
        backgroundColor: theme.palette.background.paper,
    },
}));
const a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}
const EmployerGraphDetail = ({ tabHandleChange, value }) => {
    let lableList = ['communication', 'Humanidity', 'Code', 'Style'];
    let experienceData=['Salman','Haris','Arsalan','Maaz']
    const classes = useStyles();
    return (
        <Widget styleName="jr-card-profile employerDashboardGraphCardMargin">
            <div className={classes.root}>
                <AppBar color="default" position="static" className='alignCenter'>
                    <Tabs
                        value={value}
                        onChange={tabHandleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example" >
                        <Tab className='emloyerDashboardTabsMinHeight' value="one" label="Skills" {...a11yProps('one')} />
                        <Tab className='emloyerDashboardTabsMinHeight' value="two" label="Experience" {...a11yProps('two')} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index="one">
                    <h3 style={{ color: 'gray' }}>Operational Manager</h3>
                    <div>
                        <HorizontalBarChart
                            borderColor="white"
                            pointBorderColor='white'
                            pointBackgroundColor='white'
                            height={250}
                            pointHoverBorderColor='blue'
                            borderWidth={0}
                            chartdata={[99, 25, 20, 30]}
                            shadowColor='black'
                            labels={lableList}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index="two">
                    <h3 style={{ color: 'gray' }}>Operational Manager</h3>
                    <div>
                        <PieChart
                            height={250}
                            chartdata={[5, 9, 3, 10]}
                            shadowColor='gray'
                            labels={experienceData}
                        />
                    </div>
                </TabPanel>
            </div>
        </Widget>
    )
}


export default EmployerGraphDetail;
