import React from "react";
import Widget from "components/Widget";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const EmployerInfo = ({onOpenEployerInfo}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div className="cardHeaderAndAddButton" >
                    <div>
                        <h3 className="card-title mb-2 mb-md-3">Info</h3>
                    </div>
                    <div>
                        <Fab size="small" color="primary" aria-label="add" onClick={onOpenEployerInfo} className='profileAddEditButton'>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <hr />
                <table>
                    <tr>
                        <td><th>Web Site</th></td>
                        <td></td>
                        <td><a href="http://www.seven.pk" target="_blank" rel="noopener noreferrer">www.seven.pk</a></td>
                    </tr>
                    <tr>
                        <td><th>Industry</th></td>
                        <td></td>
                        <td>Software</td>
                    </tr>
                    <tr>
                        <td><th>Company Size</th></td>
                        <td></td>
                        <td>51-200</td>
                    </tr>
                    <tr>
                        <td><th>Type</th></td>
                        <td></td>
                        <td> Private </td>
                    </tr>
                    <tr>
                        <td><th>Founded</th></td>
                        <td></td>
                        <td>2008</td>
                    </tr>
                    <tr>
                        <td><th>Specialties</th></td>
                        <td></td>
                        <td>Creative Design for mobile and web, Mobility Strategy,
                            Bespoke mobility software development across multiple devices,
                            platforms, and operating systems, .NET, iOS, Android, Blackberry, Windows Mobile, Amazon Web Services,
                Digital Innovation, Digital Marketing, Extjs, and React.</td>
                    </tr>

                </table>
            </div>
        </Widget>
    )
}


export default EmployerInfo;
