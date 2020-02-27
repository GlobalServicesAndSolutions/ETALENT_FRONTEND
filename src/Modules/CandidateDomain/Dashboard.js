import React, { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/index'
import PicturePost from './PostingCards/PicturePost';
import JobPost from './PostingCards/JobPost';
import JobAlerts from './PostingCards/JobAlerts';
import Events from './PostingCards/Events';
import QuickProfile from './CandidatesList/CandidateDashboardSidePanel/ProfileLinkCard';
import QuickFreeLanceProfile from './CandidatesList/CandidateDashboardSidePanel/FreeLanceProfileLink';
import QuickEvents from './CandidatesList/CandidateDashboardSidePanel/EventsDetailLink';
import QuickSettingsAndEvents from './CandidatesList/CandidateDashboardSidePanel/QuickSettings';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

class CandidateHome extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      availabilitySwitch:false,
      availabilityDate:new Date().toLocaleDateString(),
      showAvailabilityCalender:false,
    }
  }
  onChangeAvailabilityDate=(event, date)=>{
    this.setState({availabilityDate:date,showAvailabilityCalender:false});
  }
  onChangeAvailabilitySwitch=()=>{
    this.setState({availabilitySwitch:!this.state.availabilitySwitch})
  }
  render() {
    return (
      <div>
        <div >
          <ProfileCard 
          onChangeAvailabilitySwitch={this.onChangeAvailabilitySwitch}
          availabilitySwitch={this.state.availabilitySwitch}
          onChangeAvailabilityDate={this.onChangeAvailabilityDate}
          availabilityDate={this.state.availabilityDate}
          showAvailabilityCalender={this.state.showAvailabilityCalender}
          />
        </div>
        <br/>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Chip
        label="Favorite Jobs"
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Events"
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        label="Job Alterts"
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
        </div>
        <br/>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 col-md-2 col-12' style={{ marginLeft: '70px' , marginRight:'-62px'}}>
            <QuickProfile />
            <QuickFreeLanceProfile />
            <QuickEvents />
            <QuickSettingsAndEvents />
          </div>
          <div className="col-xl-5 col-lg-5 col-md-4 col-12">
            <PicturePost />
            <PicturePost />
            <PicturePost />
            <PicturePost />
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-12" style={{ marginLeft: '-35px' }}>
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