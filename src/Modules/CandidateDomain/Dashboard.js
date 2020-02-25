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
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class CandidateHome extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      availabilitySwitch:false,
      availabilityDate:new Date().toLocaleDateString()
    }
  }
  onChangeAvailabilityDate=(event, date)=>{
    this.setState({availabilityDate:date, availabilitySwitch:false});
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
          />
        </div>
        <br/>
        <div style={{display:'flex',justifyContent:'center'}}>
          <Paper component="form" style={{width:'400px',alignItems:'center',padding:'2px 4px'}}>
            <IconButton  aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search jobs And Events"
              inputProps={{ 'aria-label': 'Search-jobs' }}
            />
          </Paper>
        </div>
        <br/>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 col-md-2' style={{ marginLeft: '25px' }}>
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