import React from "react";
import Widget from "components/Widget";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MoneyIcon from '@material-ui/icons/Money';
import ComputerIcon from '@material-ui/icons/Computer';

const JobFullInfo = () => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
      <h3 className="card-title mb-2 mb-md-3">OverView</h3>
      <hr />
      <p>Customer relationship management systems (preferably Salesforce), and business intelligence systems 
      Experience developing and managing projects using the Microsoft 
      product stack such as: o Classic ASP, ASP.NET, MVC, SQL Server/SSIS/SSAS/SSRS, Visual Studio Experience with web scripting languages and 
      tools such as: o HTML, jQuery, JavaScript, XML, XSLT, CSS, Node Knowledge of business intelligence concepts
       such as data warehousing design, data cubes, predictive modeling, KPIs, and dashboards/scorecards In depth experience architecting,
        integrating, and maintaining enterprise software systems from different vendors Experience developing
         and managing systems in a cloud environment (e.g. AWS/Azure) Experience with agile software development practices Ability to work
          independently with general supervision Excellent communication skills.</p>
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
