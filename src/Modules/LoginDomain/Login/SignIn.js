import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  userSignIn,
  userTwitterSignIn
} from 'actions/Auth';

class SignIn extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      user: {
        email: 'demo@example.com',
      password: 'demo#123'
      },
      showPassword: false
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }
  updateUserState=(event)=> {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user });
  }
  onLoginClick = (user) => {
  }

  render() {
    const {
      email,
      password
    } = this.state.user;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">

          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <h3>E-Talent Logo</h3>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1>Login</h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    name="email"
                    fullWidth
                    onChange={this.updateUserState}
                    value={this.state.user.email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  
                  />
                  <FormControl style={{width:"100%"}}>
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
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="checkedB"
                        color="primary"
                      />
                    }
                    label="Keep me signed in on this device"
                  />
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button onClick={() => {
                      this.props.showAuthLoader();
                      this.props.userSignIn({ email, password })
                    }} variant="contained" >
                      <IntlMessages id="appModule.signIn" />
                    </Button>

                    <Link to="/signup">
                      <IntlMessages id="signIn.signUp" />
                    </Link>

                  </div>
                  <div>
                    <Link to="/forgetPassword">
                      Forget Password
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

                </fieldset>
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
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignIn);
