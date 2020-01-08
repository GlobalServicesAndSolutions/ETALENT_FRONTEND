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
                <table border='3' className='customers'>
                    <tr>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Web Site Link</th>
                        <th>Address</th>
                        <th>Statsu (Active/Inactive)</th>
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
                            www.seven.pk
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
