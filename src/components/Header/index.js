import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsIcon from '@material-ui/icons/Settings';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import AppNotification from '../AppNotification/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import IconButton from '@material-ui/core/IconButton';
import {
  BELOW_THE_HEADER,
  HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import SearchBox from 'components/SearchBox';
import { switchLanguage, toggleCollapsedNav } from 'actions/Setting';
import IntlMessages from 'util/IntlMessages';

class Header extends React.Component {

  onAppNotificationSelect = () => {
    this.setState({
      appNotification: !this.state.appNotification
    })
  };
  onMailNotificationSelect = () => {
    this.setState({
      mailNotification: !this.state.mailNotification
    })
  };
  onLangSwitcherSelect = (event) => {
    this.setState({
      langSwitcher: !this.state.langSwitcher, anchorEl: event.currentTarget
    })
  };
  onSearchBoxSelect = () => {
    this.setState({
      searchBox: !this.state.searchBox
    })
  };
  onAppsSelect = () => {
    this.setState({
      apps: !this.state.apps
    })
  };
  onUserInfoSelect = () => {
    this.setState({
      userInfo: !this.state.userInfo
    })
  };
  handleRequestClose = () => {
    this.setState({
      langSwitcher: false,
      userInfo: false,
      mailNotification: false,
      appNotification: false,
      searchBox: false,
      apps: false
    });
  };
  onToggleCollapsedNav = (e) => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      searchBox: false,
      searchText: '',
      mailNotification: false,
      userInfo: false,
      langSwitcher: false,
      appNotification: false,
    }
  }

  updateSearchText(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  Apps = () => {
    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/calendar/basic">
            <i className="zmdi zmdi-calendar zmdi-hc-fw" />
            <span className="jr-list-text"><IntlMessages id="sidebar.calendar.basic" /></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/to-do">
            <i className="zmdi zmdi-check-square zmdi-hc-fw" />
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.toDo" /></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/mail">
            <i className="zmdi zmdi-email zmdi-hc-fw" />
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.mail" /></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/chat">
            <i className="zmdi zmdi-comment zmdi-hc-fw" />
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.chat" /></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/contact">
            <i className="zmdi zmdi-account-box zmdi-hc-fw" />
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.contact" /></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/">
            <i className="zmdi zmdi-plus-circle-o zmdi-hc-fw" />
            <span className="jr-list-text">Add New</span>
          </Link>
        </li>
      </ul>)
  };

  render() {
    const { navigationStyle, horizontalNavPosition } = this.props;
    return (
      <AppBar
        className={`app-main-header ${(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) ? 'app-main-header-top' : ''}`}>
        <Toolbar className="app-toolbar" disableGutters={false}>

          <div className="d-block d-md-none pointer mr-3" onClick={this.onToggleCollapsedNav}>
            <span className="jr-menu-icon">
              <span className="menu-icon" />
            </span>
          </div>
          <p>E-Talent</p>
          <SearchBox styleName="d-none d-lg-block" placeholder=""
            onChange={this.updateSearchText.bind(this)}
            value={this.state.searchText} />

          <ul className="header-notifications list-inline ml-auto">
            <Link to="/dashboard">
              <li className="list-inline-item headerLinks">
                <span className="fontLabelColor" >Home</span>
              </li>
            </Link>
            <Link to='/jobs'>
              <li className="list-inline-item headerLinks">
                <span className='fontLabelColor' >Jobs</span>
              </li>
            </Link>
            <Link to='#'>
              <li className="list-inline-item headerLinks">
                <span className='fontLabelColor' >Messaging</span>
              </li>
            </Link>
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={this.state.appNotification}
                toggle={this.onAppNotificationSelect.bind(this)}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-notifications-none icon-alert animated infinite wobble" />
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader styleName="align-items-center"
                    heading={<IntlMessages id="appNotification.title" />} />
                  <AppNotification />
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item">
              <Dropdown
                className="quick-menu app-notification"
                isOpen={this.state.apps}
                toggle={this.onAppsSelect.bind(this)}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <span className="app-notification-menu">
                    <i className="zmdi zmdi-apps zmdi-hc-fw zmdi-hc-lg" />
                    <span>Apps</span>
                  </span>
                </DropdownToggle>

                <DropdownMenu>
                  {this.Apps()}
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item app-tour">
              <SettingsIcon className="fontLabelColor" fontSize='medium' style={{ cursor: 'pointer' }} />
            </li>
          </ul>

          <div className="ellipse-shape"></div>
        </Toolbar>
      </AppBar>
    );
  }

}


const mapStateToProps = ({ settings }) => {
  const { drawerType, locale, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, locale, navigationStyle, horizontalNavPosition }
};

export default withRouter(connect(mapStateToProps, { toggleCollapsedNav, switchLanguage })(Header));