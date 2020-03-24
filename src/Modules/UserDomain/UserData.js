import React from "react";
import Widget from "components/Widget";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';

const UsersTable = ({onClickAddNewUser,usersData,onClickEditUser}) => {
    return (
        <Widget styleName="jr-card-profile overFlow">
            <div className="mb-3">
                <div className='DisplayAndSpaceBetween'>
                <h3 className="card-title mb-2 mb-md-3">User List</h3>
                <div>
                <Tooltip title='Add New User' placement='top'>
                            <Fab onClick={onClickAddNewUser} size="small"  aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                </div>
                </div>
                <hr/>
                <table border='2' className='customers' style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th >First Name</th>
                            <th >Last Name</th>
                            <th >Phone No.</th>
                            <th >Email</th>
                            <th >Designation</th>
                            <th >Department</th>
                            <th >E-Talent Id</th>
                            <th >Action</th>
                        </tr>
                        {usersData.map((user)=>{
                            return(
                                <tr>
                            <td>
                                {user.firstName}  
                            </td>
                            <td>
                                {user.lastName}  
                            </td>
                            <td>
                                {user.phoneNo}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.designation}
                            </td>
                            <td>
                                {user.department}
                            </td>
                            <td>
                                {user.eTalentId}
                            </td>
                            <td>
                            <div className='row'>
                            <CreateIcon fontSize='small' className='stages' onClick={()=>onClickEditUser(user)} />
                            &nbsp;&nbsp;&nbsp;
                            <DeleteIcon fontSize='small' className='stages' />
                            </div>
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


export default UsersTable;
