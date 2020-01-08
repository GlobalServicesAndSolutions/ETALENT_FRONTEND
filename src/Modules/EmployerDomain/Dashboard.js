import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerDomain/EmployerprofileCard/EmployerProfileCard';
import PicturePost from '../CandidateDomain/PostingCards/PicturePost';
import JobPost from '../CandidateDomain/PostingCards/JobPost';
import { Link } from 'react-router-dom';
class EmployerDashboard extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop:"-3%"}}>
          <EmployerProfileCard />
        </div>
        <div style={{float:'right'}}>
          <Link to='/employerWorkflow'>Create Job</Link>
          <br/>
          <Link to='/activeVendors'>Active Vendors</Link>
        </div>
        <div  className="app-wrapper">
        <div style={{display:"flex"}}>
          <div>
          <PicturePost />
          <JobPost />
          <PicturePost />
          <PicturePost />
          <PicturePost />
          </div>
        <div style={{marginRight:"28%"}}> </div>
        </div>
        </div>
        </div>
      
    );
  }
}

export default EmployerDashboard;