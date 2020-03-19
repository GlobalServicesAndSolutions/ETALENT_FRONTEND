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
    </Tooltip>
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
    onSelectGridListFilter,
    data
}) => {
    const classes = useStyles();
    return (
        <Widget styleName="jr-card-profile jobsearchHeader">
            <div className="mb-3" >
                <h3 className="card-title mb-2 mb-md-3">Latest Jobs</h3>
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
                <Button color="primary">Search</Button>
                </div>
                <br />
                {toogleSwitchValue === 'gridView' &&
                    <div>
                        <div>
                        <FormControl className='gridListFilterwidth'>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    native
                                    value={data.sortByFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'sortByFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Most Relevent'>Most Relevent</option>
                                    <option value='Most Recent'>Most Recent</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl className='gridListFilterwidth'>
                                <InputLabel>Date Posted</InputLabel>
                                <Select
                                    native
                                     value={data.datePostedFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'datePostedFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Today'>Today</option>
                                    <option value='Last 7 Days'>Last 7 Days</option>
                                    <option value='Last 15 Days'>Last 15 Days</option>
                                    <option value='Last 30 Days'>Last 30 Days</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl className='gridListFilterwidth'>
                                <InputLabel>Employment Type</InputLabel>
                                <Select
                                    native
                                    value={data.employmentTypeFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'employmentTypeFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Contract'>Contract</option>
                                    <option value='Full Time'>Full Time</option>
                                    <option value='Part Time'>Part Time</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl className='gridListFilterwidth'>
                                <InputLabel>Employer Type</InputLabel>
                                <Select
                                    native
                                    value={data.employerTypeFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'employerTypeFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Recruiter'>Recruiter</option>
                                    <option value='Direct Hire'>Direct Hire</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl className='gridListFilterwidth'>
                                <InputLabel>Company</InputLabel>
                                <Select
                                    native
                                   value={data.companyFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'companyFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Seven Technology'>Seven Technology</option>
                                    <option value='VisionX'>VisionX</option>
                                    <option value='Careem'>Careem</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl className='gridListFilterwidth'>
                                <InputLabel>Commmute</InputLabel>
                                <Select
                                    native
                                   value={data.commuteFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'commuteFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </Select>
                            </FormControl>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FormControl className='gridListFilterwidth'>
                                <InputLabel>Easy Apply</InputLabel>
                                <Select
                                    native
                                   value={data.easyApplyFilter}
                                    onChange={onSelectGridListFilter}
                                    inputProps={{
                                        name: 'easyApplyFilter',
                                    }}
                                >
                                    <option value="" />
                                    <option value='Yes'>Yes</option>
                                    <option value='No'>No</option>
                                </Select>
                            </FormControl>
                        </div>
                        <br />
                        <br />
                    </div>
                }

                <div style={{ float: 'right', marginTop: (toogleSwitchValue === 'listView' || toogleSwitchValue === ''||toogleSwitchValue === 'mapView') ? '95px' : '' }}>

                    <div className='gridViewAlign'>
                        <Grid container spacing={2} direction="column" alignItems="center">
                            <Grid item>
                                <ToggleButtonGroup size="small" value={toogleSwitchValue} exclusive onChange={onToogleSwitchChange}>
                                    {toogleOptions}
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>


        </Widget>
    )
}

export default JobsSearchInput;

