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
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';

const ProfileCard = ({ onChangeAvailabilitySwitch,
  availabilitySwitch,
  availabilityDate,
  onChangeAvailabilityDate,
  showAvailabilityCalender
}) => {
  return (
    <Widget styleName="jr-card-profile dashboardHeaderPadding">
      <div >
        <div className="jr-profile-container">
          <div className="jr-Dashboardprofile-banner-top">
            <div className="jr-profile-banner-top-left">
              <div className="jr-profile-banner-avatar-info">
                <Avatar className="size-120" alt="..." src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />

                <div className='row'>
                  <div>
                    <Tooltip title={availabilitySwitch ? 'Profile is unlocked' : 'Profile is locked'} placement="down" arrow>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Switch
                              value='Checked'
                              color="primary"
                              onChange={onChangeAvailabilitySwitch}
                            />
                          }
                          label={availabilitySwitch ? "Available : " : "UnAvailable"}
                        />
                      </FormGroup>
                    </Tooltip>
                  </div>
                  <div style={{ marginTop: '-20px' }}>
                    {availabilitySwitch &&
                      <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <Grid container className='datePickerWidth'>
                          <KeyboardDatePicker
                            className="profileInfoTextField"
                            margin="normal"
                            id='jobCreateDate'
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
                </div>
              </div>
              <div className={!availabilitySwitch ? 'jr-profile-banner-avatar-info dashboardProfileheaderAfterSwitch' : 'jr-profile-banner-avatar-info dashboardProfileheader'}  >
                <div>
                  <div className='row'>
                    <div>
                      <h3 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black"><Link to='/profile' className='dashboardEmployeeNameColourLink'>Salman Haider</Link>
                      &nbsp;
                        <sup>
                          <span className='dot dotGreen'></span>
                        </sup>
                      </h3>
                      </div>
                      <div>
                      <Rating
                        name="simple-controlled"
                        value='{ratingValue}'
                        onChange='{onRatingChange}'
                      />
                    </div>
                  </div>
                  <p className="mb-0 ">Web Developer</p>
                  <div className='row'>
                    <p className="mb-0 jr-fs-lg">Islamabad, Pakistan</p>
                    <i className={`flag flag-24 flag-pk`} />
                  </div>
                </div>
                <div>
                  <p >Hello I am salman...</p>
                </div>
              </div>
            </div>
            <div className="jr-profile-banner-top-right EtalentIdAlign">
              <p className="jr-fs-sm" align='right' style={{ color: "red" }}><strong>E-Talent Id: 123</strong></p>
              <ul className="jr-follower-list">
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">847</span>
                  <span className="jr-fs-sm">Recommendation</span></li>
                <li>
                  <span className="jr-follower-title jr-fs-lg jr-font-weight-medium">327</span>
                  <span className="jr-fs-sm">Connections</span>
                </li>
              </ul>
            </div>
          </div>
          <fieldset>
            <div className="app-social-block" style={{ float: 'right' }} >
              <ul className="social-link" >
                <li>
                  <IconButton className="icon">
                    <i className="zmdi zmdi-facebook" />
                  </IconButton>
                </li>

                <li>
                  <IconButton className="icon">
                    <i className="zmdi zmdi-twitter" />
                  </IconButton>
                </li>

                <li>
                  <IconButton className="icon">
                    <i className="zmdi zmdi-google-plus" />
                  </IconButton>
                </li>

                <li>
                  <IconButton className="icon">
                    <i className="zmdi zmdi-github" />
                  </IconButton>
                </li>
              </ul>
            </div>
          </fieldset>
        </div>
      </div>
    </Widget>
  )
}

export default ProfileCard;

