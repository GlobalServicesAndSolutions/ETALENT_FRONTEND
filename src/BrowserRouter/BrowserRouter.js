import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../Redux/Actions/LoginActions/LoginAction";
import { RouteNames } from "../util/Routes/Routes";
import SignUp from '../Modules/LoginDomain/SignUp/SignUp';
import CandidateHome from '../Modules/CandidateDomain/Dashboard';
import Profile from '../Modules/CandidateDomain/Profile';
import SignIn from '../Modules/LoginDomain/Login/SignIn';



class BrowserRouter extends Component {

  scrollToTop=()=> {
    window.scroll(0, 0);
  }
  render() {
    this.scrollToTop();
    const{isAuthenticate} = this.props;
    return (
      <Router>
        <div>
          <Redirect to={RouteNames.Login.route} />
          <div >
          <Route
              exact
              path={RouteNames.Registeration.route}
              render={props => <SignUp {...props} />}
            />
            <Route
              exact
              path={RouteNames.Login.route}
              render={props =>
                isAuthenticate  ?(
                  <Redirect to={RouteNames.Dashboard.route} />
                ) : (
                  <SignIn {...props} />
                )}
            />
            <Route
              exact
              path={RouteNames.Dashboard.route}
              render={props => <CandidateHome {...props} />}
            />
            <Route
              exact
              path={RouteNames.UserProfile.route}
              render={props => <Profile {...props} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({
  login,
}) => {
  const { isAuthenticate } = login;

  return {
    isAuthenticate,
  
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

BrowserRouter.propTypes = {
  isAuthenticate: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowserRouter);
