import React from "react";
import Widget from "components/Widget";
import ProgressBar from 'react-bootstrap/ProgressBar'

const EmployerDashboardView = () => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Active Vendors</h3>
                </div>
                <hr />
                <table border='2' className='customers' style={{width:'100%',overflowX:'scroll'}}>
                    <tbody>
                    <tr>
                        <th >Job Title</th>
                        <th >Hiring Manager</th>
                        <th >Recruiter(R)</th>
                        <th >Division</th>
                        <th >HR Manager</th>
                        <th >Department</th>
                        <th>Location</th>
                        <th>Active Candidates </th>
                        <th>Progress and Status</th>
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
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            4
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={60} />
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
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={20} />
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
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            9
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={10} />
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
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={90} />
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
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            11
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={70} />
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
                            Abc@gmail.com
                        </td>
                        <td>
                            03111234567
                        </td>
                        <td>
                            Abc@gmail.com
                        </td>
                        <td>
                           <a  href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a>
                        </td>
                        <td>
                            I-9/3 Islamabad
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                        <ProgressBar striped variant="success" now={100} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerDashboardView;
