import React, { Component } from 'react';
import ProfileCard from '../../components/ProfileCard/index'
import PicturePost from './PostingCards/PicturePost';
import JobPost from './PostingCards/JobPost';
import AppliedJobs from './PostingCards/JobAlerts';
import Events from './PostingCards/Events';
import QuickProfile from './CandidatesList/CandidateDashboardSidePanel/ProfileLinkCard';
import QuickEvents from './CandidatesList/CandidateDashboardSidePanel/EventsDetailLink';
import QuickSettingsAndEvents from './CandidatesList/CandidateDashboardSidePanel/QuickSettings';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Header from 'components/Header';
import JobPostImage from './PostingCards/JobPostImage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

class CandidateHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabilitySwitch: false,
      availabilityDate: new Date().toLocaleDateString(),
      showAvailabilityCalender: false,
    }
  }
  onChangeAvailabilityDate = (event, date) => {
    this.setState({ availabilityDate: date, showAvailabilityCalender: false });
  }
  onChangeAvailabilitySwitch = () => {
    this.setState({ availabilitySwitch: !this.state.availabilitySwitch })
  }
  render() {
    return (
      <div className="app-main-content-wrapper">
        <div className="app-header ">
          <Header />
        </div>
        <div >
          <ProfileCard
            onChangeAvailabilitySwitch={this.onChangeAvailabilitySwitch}
            availabilitySwitch={this.state.availabilitySwitch}
            onChangeAvailabilityDate={this.onChangeAvailabilityDate}
            availabilityDate={this.state.availabilityDate}
            showAvailabilityCalender={this.state.showAvailabilityCalender}
          />
        </div>
        <div className='row'>
          <div className='col-xl-2 col-lg-2 col-md-2 col-12 dashboardQuickLinksDiv'>
            <QuickProfile />
            <QuickEvents />
            <QuickSettingsAndEvents />
            <div>
              <p style={{color:'gray'}}><strong>Recent Searched Jobs</strong></p>
            </div>
            <div className=' employeeDashboardRecentJobs'>
            <List>
              <ListItem divider alignItems="center">
                <Link to='#'><ListItemText
                  primary="Sr. Software Engineer"
                /></Link>
              </ListItem>
              <ListItem divider alignItems="center">
              <Link to='#'> <ListItemText
                  primary="Sr. Front End Developer"
                /></Link>
              </ListItem>
            </List>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-4 col-12 dashboardPostsDiv">
            <div className='dashboardFilterChipsAlign' >
              <Chip
                className='dashboardFilterChipsStyle'
                label="New Profiles"
                clickable
                color="primary"
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Chip
                className='dashboardFilterChipsStyle'
                label="Posted Jobs"
                clickable
                color="primary"
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
              <Chip
                className='dashboardFilterChipsStyle'
                label="New Events"
                clickable
                color="primary"
                deleteIcon={<DoneIcon />}
                variant="outlined"
              />
            </div>
            <PicturePost />
            <JobPostImage />
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-12 dashboardAltertsAndEventsDiv" >
            <div>
            </div>
            <AppliedJobs />
            <Events />
            <JobPost />
          </div>
        </div>
      </div>

    );
  }
}

export default CandidateHome;