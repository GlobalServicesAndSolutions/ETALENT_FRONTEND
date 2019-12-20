import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { appBodyContainer } from "./styles/commonStyle";
import { ValidatorForm } from "react-material-ui-form-validator";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/Actions/LoginActions";
import * as GenericAction from "./redux/Actions/GenericAction";
import Radium from "radium";
import { RouteNames } from "./utilities";

import {

  Dashboard,
} from './Routes';


class BrowserRouter extends Component {


  render() {
    this.scrollToTop();
    const {
      isAuthenticate,
      unAuthorize,
      //currrentUser,
      isRegistered,
    
    } = this.props;
    return (
      <Router>
        <div>
          {unAuthorize && isNotNewUser && <Redirect to={RouteNames.Login.route} />}
          <div style={appBodyContainer} id="mainAppContainer">
            <Route
              exact
              path={RouteNames.Dashboard.route}
              render={() =>
                isAuthenticate || isRegistered ? (
                  <Dashboard />
                ) : (
                    <Redirect to={RouteNames.Organisations.route} />
                  )}
            />

           

            {/* End of Auth Routes */}
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({
  login,
}) => {
  const { isAuthenticate, unAuthorize, currrentUser } = login;

  return {
    isAuthenticate,
  
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    genericAction: bindActionCreators(GenericAction, dispatch)
  };
}

BrowserRouter.propTypes = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Radium(BrowserRouter)
);
