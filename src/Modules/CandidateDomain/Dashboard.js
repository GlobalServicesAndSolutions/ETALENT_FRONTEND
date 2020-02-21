import React,{Component} from 'react';
import ProfileCard from '../../components/ProfileCard/index'
import PicturePost from './PostingCards/PicturePost';
import JobPost from './PostingCards/JobPost';
import JobAlerts from './PostingCards/JobAlerts';
import Events from './PostingCards/Events';
import QuickProfile from './CandidatesList/CandidateDashboardSidePanel/ProfileLinkCard';
import QuickFreeLanceProfile from './CandidatesList/CandidateDashboardSidePanel/FreeLanceProfileLink';
import QuickEvents from './CandidatesList/CandidateDashboardSidePanel/EventsDetailLink';
import QuickSettingsAndEvents from './CandidatesList/CandidateDashboardSidePanel/QuickSettings';

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
          <div className='col-xl-2 col-lg-2 col-md-3' style={{marginLeft:'25px'}}>
            <QuickProfile/>
            <QuickFreeLanceProfile/>
            <QuickEvents/>
            <QuickSettingsAndEvents/>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-4 col-12">
          <PicturePost />
          <PicturePost />
          <PicturePost />
          <PicturePost />
          </div>
        <div className="col-xl-5 col-lg-5 col-md-6 col-12" style={{marginLeft:'-35px'}}>
        <JobPost />
        <Events />
        <JobAlerts />
           </div>
        </div>
        </div>
      
    );
  }
}

export default CandidateHome;