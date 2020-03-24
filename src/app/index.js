import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import { isIOS, isMobile } from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';

class App extends React.Component {

  render() {
    const { drawerType, navigationStyle, horizontalNavPosition} = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add('ios-mobile-view-height')
    }
    else if (document.body.classList.contains('ios-mobile-view-height')) {
      document.body.classList.remove('ios-mobile-view-height')
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        <Sidebar />
        <div className="app-main-container">
          <div
            className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}`}>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
              <TopNav styleName="app-top-header" />}
            <Header />
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
              <TopNav />}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route path="/employerHome"
                  component={asyncComponent(() => import('../Modules/EmployerDomain/EmployerDashboardDomain/Dashboard'))} />
                <Route path="/employerProfile"
                  component={asyncComponent(() => import('../Modules/EmployerDomain/EmployerProfile'))} />
                  <Route path='/userManagement'
                  component={asyncComponent(() => import('../Modules/UserDomain/UserDashboard'))} />
                <Route component={asyncComponent(() => import('components/Error404'))} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ settings,loginReducer }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  const { isAdmin } = loginReducer;
  return { drawerType, navigationStyle, horizontalNavPosition,isAdmin }
};
export default withRouter(connect(mapStateToProps)(App));