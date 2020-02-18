import React,{Component} from 'react';
import ProfileCard from '../../components/ProfileCard/index'
import PicturePost from './PostingCards/PicturePost';
import JobPost from './PostingCards/JobPost';
import JobAlerts from './PostingCards/JobAlerts';
import Events from './PostingCards/Events';

class CandidateHome extends Component {
listClick=()=>{
  alert('Hello click')
}
  render() {
    return (
      <div>
        <div style={{marginTop:"-3%"}}>
          <ProfileCard />
        </div>
        <div className='row'>
          <div className="col-xl-7 col-lg-7 col-md-6 col-12">
          <PicturePost />
          <PicturePost />
          <PicturePost />
          <PicturePost />
          </div>
        <div className="col-xl-5 col-lg-5 col-md-6 col-12">
        <JobPost />
        <JobAlerts />
        <Events />
           </div>
        </div>
        </div>
      
    );
  }
}

export default CandidateHome;