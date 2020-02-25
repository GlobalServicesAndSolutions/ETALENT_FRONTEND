import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Widget from "components/Widget";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from "react-router-dom";

const ProfileCard = ({ onChangeAvailabilitySwitch,
  availabilitySwitch,
  availabilityDate,
  onChangeAvailabilityDate
}) => {
  return (
    <Widget styleName="jr-card-profile">
      <div >
        <div className="jr-profile-container">
          <div className="jr-Dashboardprofile-banner-top">
            <div className="jr-profile-banner-top-left">
              <div className="jr-profile-banner-avatar-info">
                <Avatar className="size-120" alt="..." src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />

                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        value='Checked'
                        color="primary"
                        onChange={onChangeAvailabilitySwitch}
                      />
                    }
                    label={availabilitySwitch ? "Available : " + availabilityDate : "UnAvailable"}
                  />
                </FormGroup>
                {availabilitySwitch &&
                  <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Grid container className='datePickerWidth'>
                      <KeyboardDatePicker
                        className="profileInfoTextField"
                        margin="normal"
                        id='jobCreateDate'
                        label="Availablity Date"
                        format="MM/dd/yyyy"
                        name='avalibilityDate'
                        value={availabilityDate}
                        onChange={onChangeAvailabilityDate}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        required
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>}
              </div>
              <div className={!availabilitySwitch ? 'jr-profile-banner-avatar-info dashboardProfileheaderAfterSwitch' : 'jr-profile-banner-avatar-info dashboardProfileheader'}  >
                <div>
                  <div className='row'>
                    <div>
                      <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black"><Link to='/profile' className='dashboardEmployeeNameColourLink'>Salman Haider</Link>
                        <sup>
                          <span className='dot dotGreen'></span>
                        </sup>
                      </h2>
                    </div>
                    <div>
                      <i className={`flag flag-24 flag-pk`} />
                    </div>
                  </div>
                  <p className="mb-0 jr-fs-lg">Web Developer</p>
                  <p className="mb-0 jr-fs-lg">Location, City</p>
                </div>
                <div>
                  <p >Hello I am salman...</p>
                </div>
              </div>
            </div>
            <div className="jr-profile-banner-top-right">
              <ul className="jr-follower-list">
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">2k+</span>
                  <span className="jr-fs-sm">Followers</span></li>
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">847</span>
                  <span className="jr-fs-sm">Following</span></li>
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">327</span>
                  <span className="jr-fs-sm">Connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default ProfileCard;

