import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import { Link } from 'react-router-dom';
import EmployerDashboardView from './EmployerDashboardData';

class EmployerDashboard extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop:"-3%"}}>
          <EmployerProfileCard />
        </div>
        <div  className="app-wrapper">
          <EmployerDashboardView />
        </div>
        <div style={{float:'right'}}>
          <Link to='/employerWorkflow'>Create Job</Link>
          <br/>
          <Link to='/activeVendors'>Active Vendors</Link>
        </div>
        </div>
      
    );
  }
}

export default EmployerDashboard;