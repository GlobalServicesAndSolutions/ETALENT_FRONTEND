import React from "react";
import Widget from "components/Widget";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import SearchField from "react-search-field";
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import { Link } from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    iconButton: {
        padding: 10,
    },
}));

const EmployerDashboardView = ({ onClickFilterOptions, isFilterOptionClick }) => {
    const classes = useStyles();
    return (
        <Widget styleName="jr-card-profile cardScrolling" >
            <div className="mb-3">
                <div className='row'>
                <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search By jobs Title"
                            inputProps={{ 'aria-label': 'Search-jobs' }}
                        />
                    </Paper>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <FormControl style={{ width: '30%' }}>
                        <InputLabel htmlFor="age-native-simple">Filter Job Requisition</InputLabel>
                        <Select
                            native
                            inputProps={{
                                name: 'workCountry',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" />
                            <option value={'All'}>All</option>
                            <option value={'Open'}>Open</option>
                            <option value={'Closed'}>Closed</option>
                        </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='row employerProfilefilterOptionsAlign'>

                        <p className='employerProfilefilterOptionsTextAlign'>Filter Options</p>

                        <PageviewRoundedIcon style={{cursor:'pointer'}} onClick={onClickFilterOptions} color='inherit' fontSize='large' />
                        
                    </div>
                    
                    {isFilterOptionClick && 
                    <div>
                        <br/>
                        <SearchField
                            placeholder="Search by hiring manager"
                            classNames="test-class"
                        />
                        &nbsp;&nbsp;
                        <SearchField
                            placeholder="Search by Recriuter (R)"
                            classNames="test-class"
                        />
                        &nbsp;&nbsp;
                        <SearchField
                            placeholder="Search by HR Administrator"
                            classNames="test-class"
                        />
                        &nbsp;&nbsp;
                        <SearchField
                            placeholder="Recruiter Collaborator"
                            classNames="test-class"
                        />
                        &nbsp;&nbsp;
                        <SearchField
                            placeholder="Requisition Administrator"
                            classNames="test-class"
                        />
                        &nbsp;&nbsp;
                        <SearchField
                            placeholder="Search by Recriutment Coordinator"
                            classNames="test-class"
                        />
                    </div>}
                </div>
                <hr />
                <table border='2' className='customers' style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>Req. ID</th>
                            <th >Job Title</th>
                            <th >Hiring Manager</th>
                            <th >Division</th>
                            <th >Department</th>
                            <th>Location</th>
                            <th >End Date</th>
                            <th >Days Left</th>
                            <th >Job Status</th>
                            <th>Candidates </th>
                        </tr>
                        <tr>
                            <td>
                                1
                        </td>
                            <td>
                                <Link to='/jobDetails'>Operational Manager</Link>
                            </td>
                            <td>
                                Arsalan Khan
                        </td>
                            <td>
                                www.seven.pk
                            </td>
                            <td>
                                IT
                        </td>
                            <td>
                                I-9/3 Islamabad,Pakistan
                            </td>
                            <td>
                                1/13/2020
                        </td>
                            <td>
                                0
                        </td>
                            <td>
                            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                <div>
                                    Closed
                                </div>
                                <div>
                                    <CreateIcon fontSize='small' className='stages'  />
                                </div>
                                </div>
                        </td>
                            <td>
                                <Link to='/candidates'> 4</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                        </td>
                            <td>
                                <Link to='#'> Software Developer</Link>
                            </td>
                            <td>
                                Rehmat Ali
                        </td>
                            <td>
                                www.seven.pk
                            </td>
                            <td>
                                IT
                        </td>
                            <td>
                            I-9/3 Islamabad
                        </td>
                            <td>
                                1/13/2020
                        </td>
                            <td>
                                0
                        </td>
                            <td>
                            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                <div>
                                    Closed
                                </div>
                                <div>
                                    <CreateIcon fontSize='small' className='stages'  />
                                </div>
                                </div>
                        </td>
                            <td>
                                <Link to='#'> 5</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerDashboardView;
