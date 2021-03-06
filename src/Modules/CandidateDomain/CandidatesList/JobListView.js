import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Widget from "components/Widget";
import { Link } from "react-router-dom";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Truncate from 'react-truncate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    image: {
        width: 120,
        height: 100,
    },
}));
const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'gray',
        fontSize: '15px',
        borderStyle: 'solid',
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} placement='top' {...props} />;
}
const JobsListView = ({ makeFaveriot, onFaveriotClick }) => {
    const classes = useStyles();
    const tooltipTile = 'Here is the description on the job Here is the description on the jobHere is the description on the jobHere is the description on the jobHere is the description on the jobv';
    return (
        <div>
            <List>
                <ListItem  >
                    <Widget styleName="jr-card-profile jobList"  >
                        <BootstrapTooltip title={tooltipTile} >
                            <div className="mb-3" >
                                <div className="cardHeaderAndAddButton" >
                                    <div>
                                        <Link to='/jobDescription' >
                                            <h3 className='allfontCapital' >Sr.Software Engineer</h3>
                                        </Link>
                                        <div className='pLineHeight'>
                                        <p>Employer Name</p>
                                        <p>Location, City</p>
                                        </div>
                                    </div>
                                    <div className='pLineHeight'style={{marginTop:'-20px'}}>
                                    <p >Employer Name</p>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" variant='square' />
                                        </ListItemAvatar>
                                    </div>
                                </div>
                                <hr />
                                <div style={{ lineHeight: '20px' }}>
                                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>Full time/ Part time</p><p>Salary: 51,000</p><p>2 days ago</p>
                                        <FavoriteIcon onClick={onFaveriotClick} style={{ fill: makeFaveriot ? 'lightgreen' : '', cursor: 'pointer' }} />
                                    </div>
                                    <p> <Truncate lines={2}>
                                        UW Continuum College (UWC ) has an outstanding opportunity for an Assistant Director of Software Engineering
                                        to lead our software development team. The Assistant Director of Software Engineering is 
                                    </Truncate></p>
                                </div>
                            </div>
                        </BootstrapTooltip>
                    </Widget>

                </ListItem>

                <ListItem>
                    <Widget styleName="jr-card-profile jobList">
                        <div className="mb-3" >
                            <h3 className=" allfontCapital" >Jot Title</h3>
                            <hr />
                            <h6>Employer Name</h6>
                            <h6>Location, City</h6>
                        </div>
                    </Widget>
                </ListItem>
                <ListItem>
                    <Widget styleName="jr-card-profile jobList">
                        <div className="mb-3" >
                            <h3 className='allfontCapital'>Jot Title</h3>
                            <hr />
                            <h6>Employer Name</h6>
                            <h6>Location, City</h6>
                        </div>
                    </Widget>
                </ListItem>
                <ListItem>
                    <Widget styleName="jr-card-profile jobList">
                        <div className="mb-3" >
                            <h3 className='allfontCapital'>Jot Title</h3>
                            <hr />
                            <h6>Employer Name</h6>
                            <h6>Location, City</h6>
                        </div>
                    </Widget>
                </ListItem>
                <ListItem>
                    <Widget styleName="jr-card-profile jobList">
                        <div className="mb-3" >
                            <h3 className='allfontCapital'>Jot Title</h3>
                            <hr />
                            <h6>Employer Name</h6>
                            <h6>Location, City</h6>
                        </div>
                    </Widget>
                </ListItem>
            </List>
        </div>
    )
}

export default JobsListView;

