import React from "react";
import Widget from "components/Widget";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SearchField from "react-search-field";
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import { Link } from "react-router-dom";

const EmployerDashboardView = ({ onClickFilterOptions, isFilterOptionClick }) => {
    return (
        <Widget styleName="jr-card-profile cardScrolling" >
            <div className="mb-3">
                <div className='row'>
                        <FormControl style={{ width: '20%'}}>
                            <InputLabel style={{ paddingLeft:'5%'}}>Filter Job Requisition</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value='all'>All</MenuItem>
                                <MenuItem value='openJobs'>Open</MenuItem>
                                <MenuItem value='closedJobs'>Closed</MenuItem>
                            </Select>
                        </FormControl>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='row'>

                        <p>Filter Options</p>

                        <PageviewRoundedIcon onClick={onClickFilterOptions} color='inherit' fontSize='large' />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {isFilterOptionClick && <div>
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
                <table border='2' className='customers' style={{ width: '115%' }}>
                    <tbody>
                        <tr>
                            <th>Recriuter ID</th>
                            <th >Job Title</th>
                            <th >Hiring Manager</th>
                            <th >Division</th>
                            <th >Department</th>
                            <th >Job Status</th>
                            <th >Create Date</th>
                            <th >End Date</th>
                            <th >Days Left</th>
                            <th>Location</th>
                            <th>Candidates </th>
                        </tr>
                        <tr>
                            <td>
                                1
                        </td>
                            <td>
                                <Link to='#'>Operational Manager</Link>
                            </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                www.seven.pk
                            </td>
                            <td>
                                IT
                        </td>
                            <td>
                                Closed
                        </td>
                            <td>
                                1/09/2020
                        </td>
                            <td>
                                1/13/2020
                        </td>
                            <td>
                                0
                        </td>
                            <td>
                                I-9/3 Islamabad
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
                                03111234567
                        </td>
                            <td>
                                www.seven.pk
                            </td>
                            <td>
                                IT
                        </td>
                            <td>
                                Closed
                        </td>

                            <td>
                                1/09/2020
                        </td>
                            <td>
                                1/13/2020
                        </td>
                            <td>
                                0
                        </td>
                            <td>
                                I-9/3 Islamabad
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
