import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import { Link } from 'react-router-dom';
import EmployerDashboardView from './EmployerDashboardData';

class EmployerDashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isFilterOptionClick:false
    }
  }
  onClickFilterOptions=()=>{
    this.setState({isFilterOptionClick:!this.state.isFilterOptionClick});
  }
  render() {
    return (
      <div>
        <div style={{marginTop:"-3%"}}>
          <EmployerProfileCard />
        </div>
        <div  className="app-wrapper">
          <EmployerDashboardView 
          onClickFilterOptions={this.onClickFilterOptions}
          isFilterOptionClick={this.state.isFilterOptionClick}
          />
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