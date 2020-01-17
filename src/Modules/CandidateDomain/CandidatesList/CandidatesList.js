import React from "react";
import Widget from "components/Widget";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from "react-router-dom";

const CandidatesTable = ({data,onCandidateEditClick}) => {
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
                            <th>Id</th>
                            <th >Name</th>
                            <th >Phone No.</th>
                            <th >Recruiter</th>
                            <th >Stage</th>
                            <th >Applied Date</th>
                        </tr>
                        {
                            data.map((candidates, index)=>{
                            return (
                        <tr onClick={()=>onCandidateEditClick(candidates)}>
                            <td>
                                1
                            </td>
                            <td>
                                {index}
                            </td>
                            <td>
                               <Link to='/candidateDetails'> {candidates.name}</Link>
                        </td>
                            <td>
                                {candidates.phoneNo}
                        </td>
                            <td>
                                {candidates.recruiter}
                            </td>
                            <td>
                                <div style={{justifyContent:'space-between', display:'flex'}}>
                               {candidates.stage}
                               <CreateIcon fontSize='small' className='stages' onClick={()=>onCandidateEditClick(candidates)}/>
                               </div>
                            </td>
                            <td>
                                {candidates.appliedDate}
                            </td>
                        </tr>
                                );
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default CandidatesTable;
