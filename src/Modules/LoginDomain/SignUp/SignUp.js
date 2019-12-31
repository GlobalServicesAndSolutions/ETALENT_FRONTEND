import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from 'actions/Auth';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: 0,
        companyName:''
      },
      value: 'one'
    };
  }
  updateUserState = (event) => {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user });
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }
  tabHandleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  a11yProps = (index) => {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      companyName
    } = this.state.user;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <h3>E-talent Logo</h3>
          </div>

          <div className="app-login-content">
            <div className="signupfields">
              <AppBar color="default" position="static" className="tabListalign">
                <Tabs initialSelectedIndex={this.state.value} value={this.state.value} onChange={this.tabHandleChange} >
                  <Tab value="one" label="Candidate" {...this.a11yProps('one')} />
                  <Tab value="two" label="Employer" {...this.a11yProps('two')} />
                </Tabs>
              </AppBar>
              <TabPanel value={this.state.value} index="one">
                <div className="app-login-header">
                  <h1>Candidate Sign Up</h1>
                </div>
                <div className="app-login-form">
                  <form method="post" action="/">
                    <div className="row firstAndLastName">
                      <TextField
                        type="text"
                        name="firstName"
                        label="First Name"
                        onChange={this.updateUserState}
                        value={firstName}
                        margin="normal"
                        className="mt-0 mb-2 firstName"
                      />
                      &nbsp;
                <TextField
                        type="text"
                        name="lastName"
                        label="Last Name"
                        onChange={this.updateUserState}
                        value={lastName}
                        margin="normal"
                        className="mt-0 mb-2 lastName"
                      />
                    </div>
                    <TextField
                      type="email"
                      name="email"
                      onChange={this.updateUserState}
                      label={<IntlMessages id="appModule.email" />}
                      fullWidth
                      value={email}
                      margin="normal"
                      className="mt-0 mb-2"
                    />

                    <FormControl style={{ width: "100%" }}>
                      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        name="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.user.password}
                        onChange={this.updateUserState}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                            >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <TextField
                      type="number"
                      name="phoneNumber"
                      onChange={this.updateUserState}
                      label="Phone Number"
                      fullWidth
                      value={phoneNumber}
                      margin="normal"
                      className="mt-0 mb-4"
                    />
                    <br></br>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <Button variant="contained" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userSignUp({ email, password });
                      }} >
                        <IntlMessages
                          id="appModule.regsiter" />
                      </Button>

                      <Link to="/signin">
                        <IntlMessages id="signUp.alreadyMember" />
                      </Link>
                    </div>
                    <div className="app-social-block my-1 my-sm-3">
                      <IntlMessages
                        id="signIn.connectWith" />
                      <ul className="social-link">
                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userFacebookSignIn();
                            }}>
                            <i className="zmdi zmdi-facebook" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userTwitterSignIn();
                            }}>
                            <i className="zmdi zmdi-twitter" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userGoogleSignIn();

                            }}>
                            <i className="zmdi zmdi-google-plus" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userGithubSignIn();
                            }}>
                            <i className="zmdi zmdi-github" />
                          </IconButton>
                        </li>
                      </ul>
                    </div>

                  </form>
                </div>
              </TabPanel>
              <TabPanel value={this.state.value} index="two">
              <div className="app-login-header">
                  <h1>Employer Sign Up</h1>
                </div>
                <div className="app-login-form">
                  <form method="post" action="/">
                    <div className="row firstAndLastName">
                      <TextField
                        type="text"
                        name="firstName"
                        label="First Name"
                        onChange={this.updateUserState}
                        value={firstName}
                        margin="normal"
                        className="mt-0 mb-2 firstName"
                      />
                      &nbsp;
                <TextField
                        type="text"
                        name="lastName"
                        label="Last Name"
                        onChange={this.updateUserState}
                        value={this.state.user.lastName}
                        margin="normal"
                        className="mt-0 mb-2 lastName"
                      />
                    </div>
                    <TextField
                      type="email"
                      name="email"
                      onChange={this.updateUserState}
                      label={<IntlMessages id="appModule.email" />}
                      fullWidth
                      value={email}
                      margin="normal"
                      className="mt-0 mb-2"
                    />
                    <TextField
                      type="text"
                      name="companyName"
                      onChange={this.updateUserState}
                      label="Company Name"
                      fullWidth
                      value={companyName}
                      margin="normal"
                      className="mt-0 mb-2"
                    />
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        name="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.user.password}
                        onChange={this.updateUserState}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                            >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <br></br>
                    <br></br>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <Button variant="contained" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userSignUp({ email, password });
                      }} color="primary">
                        <IntlMessages
                          id="appModule.regsiter" />
                      </Button>

                      <Link to="/signin">
                        <IntlMessages id="signUp.alreadyMember" />
                      </Link>
                    </div>
                    <div className="app-social-block my-1 my-sm-3">
                      <IntlMessages
                        id="signIn.connectWith" />
                      <ul className="social-link">
                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userFacebookSignIn();
                            }}>
                            <i className="zmdi zmdi-facebook" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userTwitterSignIn();
                            }}>
                            <i className="zmdi zmdi-twitter" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userGoogleSignIn();

                            }}>
                            <i className="zmdi zmdi-google-plus" />
                          </IconButton>
                        </li>

                        <li>
                          <IconButton className="icon"
                            onClick={() => {
                              this.props.showAuthLoader();
                              this.props.userGithubSignIn();
                            }}>
                            <i className="zmdi zmdi-github" />
                          </IconButton>
                        </li>
                      </ul>
                    </div>

                  </form>
                </div>
            </TabPanel>
            </div>

          </div>

        </div>

        {
          loader &&
          <div className="loader-view">
            <CircularProgress />
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignUp);
