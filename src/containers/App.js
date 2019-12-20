import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import "assets/vendors/style"
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import SignIn from '../Modules/LoginDomain/Login/SignIn';
import SignUp from '../Modules/LoginDomain/SignUp/SignUp';
import {setInitUrl} from '../actions/Auth';
import RTL from 'util/RTL';
import ForgetPassword from '../Modules/LoginDomain/ForgetPassword/ForgetPassword';
import asyncComponent from 'util/asyncComponent';
import CandidateHome from '../Modules/CandidateDomain/Dashboard';
import Profile from '../Modules/CandidateDomain/Profile';
import { ValidatorForm } from "react-material-ui-form-validator";

const RestrictedRoute = ({component: Component, authUser, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: props.location}
          }}
        />}
  />;

class App extends Component {

  componentWillMount() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === '') {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
    ValidatorForm.addValidationRule("isValidEmail", value => {
      let pattern =
        "^([A-zÀ-úA-zÀ-ÿ0-9]+)([\\-+.\\'][A-zÀ-úA-zÀ-ÿ0-9]+)*@(([a-zA-Z0-9]+)([\\-][a-zA-Z0-9]+)*\\.){1,5}([A-Za-z]){2,6}$";
      let regex = new RegExp(pattern);
      return regex.test(value);
    });
  }

  render() {
    const {match, location, locale, authUser, initURL, isDirectionRTL} = this.props;
    if (location.pathname === '/') {
      if (authUser === null) {
        return ( <Redirect to={'/app/sample-page'}/> );
      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        return ( <Redirect to={'/app/sample-page'}/> );
      } else {
        return ( <Redirect to={initURL}/> );
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    if (isDirectionRTL) {
      applyTheme.direction = 'rtl';
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl');
      applyTheme.direction = 'ltr';
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}>
            <RTL>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute path={`${match.url}app`} authUser={authUser}
                                   component={MainApp}/>
                  <Route path="/forgetPassword" authUser={authUser} component={ForgetPassword}/>
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/candidatehone' component={CandidateHome}/>
                  <Route path='/profile' component={Profile} />
                  <Route
                    component={asyncComponent(() => import('components/Error404'))}/>
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({settings, auth}) => {
  const {sideNavColor, locale, isDirectionRTL} = settings;
  const {authUser, initURL} = auth;
  return {sideNavColor, locale, isDirectionRTL, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);
