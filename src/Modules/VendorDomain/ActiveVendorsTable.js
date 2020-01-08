import React from "react";
import Widget from "components/Widget";
import Switch from '@material-ui/core/Switch';

const ActiveVendorsTable = () => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Active Vendors</h3>
                </div>
                <hr />
                <table border='2' className='customers' >
                    <tr>
                        <th width='15%'>Name</th>
                        <th width='15%'>Industry</th>
                        <th width='15%'>Phone</th>
                        <th width='15%'>Email</th>
                        <th width='15%'>Web Site Link</th>
                        <th width='15%'>Address</th>
                        <th width='15%'>Statsu (Active/Inactive)</th>
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
                           <a a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            <Switch
                                value="checkedB"
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
                           <a a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            <Switch
                                value="checkedB"
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </td>
                    </tr>

                </table>
            </div>
        </Widget>
    )
}


export default ActiveVendorsTable;
