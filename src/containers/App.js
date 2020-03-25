import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import "assets/vendors/style";
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';
import MainApp from 'app/index';
import SignIn from '../Modules/LoginDomain/Login/SignIn';
import SignUp from '../Modules/LoginDomain/SignUp/SignUp';
import {setInitUrl} from '../actions/Auth';
import RTL from 'util/RTL';
import ForgetPassword from '../Modules/LoginDomain/ForgetPassword/ForgetPassword';
import asyncComponent from 'util/asyncComponent';
import Profile from '../Modules/CandidateDomain/Profile';
import EmployerWorkFlow from '../Modules/EmployerDomain/EmployerWorkFlowSection/EmployerSections';
import ActiveVendors from 'Modules/VendorDomain/ActiveVendors';
import CandidateDetails from 'Modules/CandidateDomain/CandidatesList/CandidateDetail';
import JobDetails from 'Modules/CandidateDomain/CandidatesList/JobDetails';
import JobsList from 'Modules/CandidateDomain/CandidatesList/JobsList';
import JobsSearchedList from 'Modules/CandidateDomain/CandidatesList/SearchedJobList';
import JobDescription from 'Modules/CandidateDomain/CandidatesList/JobDescription';
import Events from 'Modules/CandidateDomain/CandidatesList/NewEvents';
import FavoriteJobsAndAlerts from 'Modules/CandidateDomain/CandidatesList/SaveJobsAndAlertView';
import AdminSignUp from 'Modules/LoginDomain/SignUp/AdminSignUp';
import CandidateHome from 'Modules/CandidateDomain/Dashboard';

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



  render() {
    const {location, locale, authUser, initURL, isDirectionRTL} = this.props;
    if (location.pathname === '/') {
      if (authUser === null) {
        return ( <Redirect to={'/signin'}/> );
      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        return ( <Redirect to={'/dashboard'}/> );
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
                  <RestrictedRoute path="/dashboard" authUser={authUser}
                                   component={CandidateHome}/>
                  <Route path="/forgetPassword"  component={ForgetPassword}/>
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route path='/adminSignUp' component={AdminSignUp}/>
                  {/* <Route path='/profile' component={Profile} /> */}
                  <RestrictedRoute path='/profile' authUser={authUser} component={Profile} />
                  <RestrictedRoute path='/employerHome' authUser={authUser} component={MainApp} />
                  <RestrictedRoute path='/employerProfile' authUser={authUser} component={MainApp} />
                  <RestrictedRoute path='/employerWorkflow' authUser={authUser} component={EmployerWorkFlow} />
                  <RestrictedRoute path='/activeVendors' authUser={authUser} component={ActiveVendors} />
                  <RestrictedRoute path='/candidateDetails' authUser={authUser} component={CandidateDetails}/>
                  <RestrictedRoute path='/jobDetails' authUser={authUser} component={JobDetails} />
                  <RestrictedRoute path='/jobs' authUser={authUser} component={JobsList}/>
                  <RestrictedRoute path='/jobsearch' authUser={authUser} component={JobsSearchedList}/>  
                  <RestrictedRoute path='/jobDescription' authUser={authUser} component={JobDescription} />   
                  <RestrictedRoute path='/Events' authUser={authUser} component={Events}/>  
                  <RestrictedRoute path='/savejobsandalterts' authUser={authUser} component={FavoriteJobsAndAlerts} /> 
                  <RestrictedRoute path='/userManagement' authUser={authUser} component={MainApp} />  
                  <RestrictedRoute path='/eTalentPool' authUser={authUser} component={MainApp} />       
                  <Route component={asyncComponent(() => import('components/Error404'))}/>
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

