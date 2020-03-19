import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
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
import{onAdminSignUp} from 'actions/LoginActions/LoginActions';
class AdminSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        companyName:''
      },
      value: 'one'
    };
  }
  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.isAdmin ) {
      this.props.history.push('/employerHome');
    }
  }
  onClickAdminRegister=()=>{
    this.props.onAdminSignUp();
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
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
    } = this.state.user;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/GssLogo.png")} alt="Gss" title="Global Services and Solutions"/>
            </Link>
          </div>

          <div className="app-login-content">
                <div className="app-login-header">
                  <h3 style={{color:'gray'}}>Admin Sign Up</h3>
                </div>
                <div className="app-login-form">
                  <form method="post" action="/">
                    <div className="row">
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
                      type="text"
                      name="phoneNumber"
                      onChange={this.updateUserState}
                      label="Phone Number"
                      value={phoneNumber}
                      placeholder='xxxx-xxx-xxxx'
                      fullWidth
                      margin="normal"
                      className="mt-0 mb-4"
                    />
                    <br></br>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <Button variant="contained" onClick={this.onClickAdminRegister} >
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

const mapStateToProps = ({ auth,loginReducer }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  const { isAdmin } = loginReducer;
  return { loader, alertMessage, showMessage, authUser,isAdmin }
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn,
  onAdminSignUp,
})(AdminSignUp);
