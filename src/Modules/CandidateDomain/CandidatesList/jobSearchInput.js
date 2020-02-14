import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Widget from "components/Widget";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AppsIcon from '@material-ui/icons/Apps';
import ViewListIcon from '@material-ui/icons/ViewList';
import RoomIcon from '@material-ui/icons/Room';
import Tooltip from '@material-ui/core/Tooltip';

const toogleOptions = [
    <Tooltip title='Grid View' arrow>
        <ToggleButton key={1} value="gridView">
            <AppsIcon id='gridView' />
        </ToggleButton>
    </Tooltip>,
    <Tooltip title='List View' arrow>
        <ToggleButton key={2} value="listView">
            <ViewListIcon id='listView' />
        </ToggleButton>
    </Tooltip>,
    <Tooltip title='Map View' arrow>
        <ToggleButton key={3} value="mapView">
            <RoomIcon id='mapView' />
        </ToggleButton>
    </Tooltip>,
];

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));
const JobsSearchInput = ({ onToogleSwitchChange,
    toogleSwitchValue,
}) => {
    const classes = useStyles();
    return (
        <Widget styleName="jr-card-profile jobsearchHeader">
            <div className="mb-3" >
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search jobs"
                            inputProps={{ 'aria-label': 'Search-jobs' }}
                        />
                    </Paper>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="location">
                            <LocationOnOutlinedIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Location"
                            inputProps={{ 'aria-label': 'Search-Location' }}
                        />
                    </Paper>
                    &nbsp;&nbsp;&nbsp;
                <Button variant="outlined" color="primary">Search</Button>
                </div>
                <hr />
                {toogleSwitchValue === 'gridView' &&
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <FormControl style={{ width: '10%' }}>
                                <InputLabel>Jobs</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='All'>All</MenuItem>
                                    <MenuItem value='People'>People</MenuItem>
                                    <MenuItem value='Content'>Content</MenuItem>
                                    <MenuItem value='Companies'>Companies</MenuItem>
                                    <MenuItem value='Group'>Group</MenuItem>
                                    <MenuItem value='School'>School</MenuItem>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Divider style={{ height: '45px', margin: '4px' }}  variant="outlined"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '10%' }}  variant="outlined">
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='Most relevent'>Most relevent</MenuItem>
                                    <MenuItem value='Most Recent'>Most Recent</MenuItem>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <FormControl style={{ width: '10%' }} variant="outlined" >
                                <InputLabel>Date Posted</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='Past 24 Hours'>Past 24 Hours</MenuItem>
                                    <MenuItem value='Past Week'>Past Week</MenuItem>
                                    <MenuItem value='Past Month'>Past Month</MenuItem>
                                    <MenuItem value='All Time'>All Time</MenuItem>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '15%' }}  variant="outlined">
                                <InputLabel>E-Talent Features</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='Apply Easy'>Apply Easy</MenuItem>
                                    <MenuItem value='In Networks'>In Networks</MenuItem>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '10%' }} variant="outlined">
                                <InputLabel>Company</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='Seven Technology'>Seven Technology</MenuItem>
                                    <MenuItem value='VisionX'>VisionX</MenuItem>
                                    <MenuItem value='Careem'>Careem</MenuItem>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl style={{ width: '15%' }}  variant="outlined">
                                <InputLabel>Experience Level</InputLabel>
                                <Select
                                    name='jobs'
                                >
                                    <MenuItem value='InternShip'>InternShip</MenuItem>
                                    <MenuItem value='Mid Level'>Mid Level</MenuItem>
                                    <MenuItem value='Senior Level'>Senior Level</MenuItem>
                                    <MenuItem value='Director'>Director</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <hr />
                    </div>
                }
                <div style={{ float: 'right', marginTop:(toogleSwitchValue==='listView' || toogleSwitchValue==='') ? '88px' :'' }}>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item>
                            <ToggleButtonGroup size="small" value={toogleSwitchValue} exclusive onChange={onToogleSwitchChange}>
                                {toogleOptions}
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </div>
            </div>


        </Widget>
    )
}

export default JobsSearchInput;

