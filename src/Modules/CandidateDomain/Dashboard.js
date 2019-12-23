import React,{Component} from 'react';
import Header from 'components/Header';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../../containers/SideNav/index';
import ProfileCard from '../../components/ProfileCard/index'
class CandidateHome extends Component {
listClick=()=>{
  alert('Hello click')
}
  render() {
    return (
      <div className="app-wrapper">
        <div className="app-main-container">
        <div className="app-header">
          <Header />
        </div>
        <div style={{marginTop:"-100px"}}>
          <ProfileCard />
        </div>
        <div className="verticalLine jobslist">
          <List >
            <h2>&nbsp; Latest Jobs and Vaccancies</h2>
            <hr></hr>
            <ListItem alignItems="flex-start" onClick={this.listClick} >
              <ListItemAvatar>
                <Avatar variant='square' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Sr. Software Engineer"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
              </Typography>
                    <p>Global Services and Solutions</p>
                  </React.Fragment>
                }
              />
            </ListItem>
            <div className="jobtype">
              <p>
                Full time
        </p>
            </div>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Ali Connors
              </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
      </div>
    );
  }
}

export default CandidateHome;