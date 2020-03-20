import React from "react";
import Widget from "components/Widget";
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';

const ActiveVendorsTable = ({ onChangeVendorActiveInactive, vendorActiveInactiveSwitch,onClickAddVendor }) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div className='DisplayAndSpaceBetween'>
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Active Vendors</h3>
                    </div>
                    <div>
                        <Tooltip title='Add Vendor' placement='top'>
                            <Fab onClick={onClickAddVendor} size="small" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Tooltip>
                    </div>
                </div>
                <hr />
                <table border='2' className='customers' style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th width='15%'>Name</th>
                            <th width='15%'>Industry</th>
                            <th width='15%'>Phone</th>
                            <th width='15%'>Email</th>
                            <th width='15%'>Web Site Link</th>
                            <th width='15%'>Address</th>
                            <th width='15%'>Status </th>
                        </tr>
                        <tr>
                            <td>
                                Salman haider
                        </td>
                            <td>
                                Software House
                        </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                Abc@gmail.com
                        </td>
                            <td>
                                <a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                            </td>
                            <td>
                                I-9/3 Islamabad
                        </td>
                            <td>
                                <Switch
                                    value={vendorActiveInactiveSwitch}
                                    onChange={onChangeVendorActiveInactive}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Salman haider
                        </td>
                            <td>
                                Software House
                        </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                Abc@gmail.com
                        </td>
                            <td>
                                <a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                            </td>
                            <td>
                                I-9/3 Islamabad
                        </td>
                            <td>
                                <Switch
                                    checked
                                    name='vendorActiveInactive'
                                    value={vendorActiveInactiveSwitch}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    onChange={onChangeVendorActiveInactive}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Salman haider
                        </td>
                            <td>
                                Software House
                        </td>
                            <td>
                                03111234567
                        </td>
                            <td>
                                Abc@gmail.com
                        </td>
                            <td>
                                <a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                            </td>
                            <td>
                                I-9/3 Islamabad
                        </td>
                            <td>
                                <Switch
                                    name='vendorActiveInactive'
                                    value={vendorActiveInactiveSwitch}
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    onChange={onChangeVendorActiveInactive}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default ActiveVendorsTable;
