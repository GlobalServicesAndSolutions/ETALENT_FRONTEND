import React from "react";
import Widget from "components/Widget";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const CandidatesTable = () => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <FormControl style={{ width: '20%', paddingLeft: '1%' }}>
                        <InputLabel style={{ paddingLeft: '5%' }}>Filter Jobs</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            <MenuItem value='all'>All</MenuItem>
                            <MenuItem value='active'>Active</MenuItem>
                            <MenuItem value='rejected'>Rejected</MenuItem>
                            <MenuItem value='hired'>Hired</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <hr />
                <table border='2' className='customers' style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>Select</th>
                            <th >Name</th>
                            <th >Phone No.</th>
                            <th >Recruiter</th>
                            <th >Job Status</th>
                            <th >Applied Date</th>
                        </tr>
                        <tr>
                            <td>
                                1
                        </td>
                            <td>
                                Salman haider
                        </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                Seven tech
                            </td>
                            <td>
                                Active
                        </td>
                            <td>
                                1/10/2020
                        </td>
                        </tr>
                        <tr>
                            <td>
                                1
                        </td>
                            <td>
                                Salman haider
                        </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                Seven tech
                            </td>
                            <td>
                                Active
                        </td>
                            <td>
                                1/10/2020
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default CandidatesTable;
