import React from "react";
import Widget from "components/Widget";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MoneyIcon from '@material-ui/icons/Money';
import ComputerIcon from '@material-ui/icons/Computer';
import FavoriteIcon from '@material-ui/icons/Favorite';

const JobFullInfo = ({onFaveriotClick, makeFaveriot}) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <div style={{justifyContent:'space-between', display:'flex'}}>
      <h3 className="card-title mb-2 mb-md-3">OverView</h3>
      <FavoriteIcon onClick={onFaveriotClick} style={{ fill: makeFaveriot ? 'lightgreen' : '', cursor: 'pointer' }}/>
      </div>
      <hr />
      <p>Customer relationship management systems (preferably Salesforce), and business intelligence systems 
      Experience developing and managing projects using the Microsoft 
      product stack such as: o Classic ASP, ASP.NET, MVC, SQL Server/SSIS/SSAS/SSRS, Visual Studio Experience with web scripting languages and 
      </p>
          <br/>
          <br/>
          <table >
              <tr>
                  <td><WorkOutlineIcon/></td>
                  <td>Full time / Part time</td>
              </tr>
              <tr>
                  <td><MoneyIcon/></td>
                  <td>Salary range</td>
              </tr>
              <tr>
                  <td><ComputerIcon/></td>
                  <td>work from not allowed</td>
              </tr>
          </table>
        </div>
    </Widget>
  )
}


export default JobFullInfo;
