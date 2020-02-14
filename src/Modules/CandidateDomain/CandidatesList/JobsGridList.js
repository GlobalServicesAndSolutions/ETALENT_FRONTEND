import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactTooltip from 'react-tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 230,
  },
  control: {
    padding: theme.spacing(3),
  },
  image: {
    width: 100,
    height: 100,
  },
}));
const longText = `Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.`;
const JobsGridList = ({makeFaveriot,onFaveriotClick}) => {
  const classes = useStyles();
  return (
    <div>
    <div style={{ marginLeft: '10px'}}>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container  spacing={2} >
          {[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(value => (
            <Grid key={value} item > 
              <Paper className={classes.paper} data-tip={longText} data-multiline={true} data-border={true} data-scroll-hide={true}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <img   className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" aria-hidden alt='image' />
                <FavoriteIcon onClick={onFaveriotClick}
                style={{fill:makeFaveriot?'red':'',cursor:'pointer'}}
                />
                </div>
                <h5>Front End Developer</h5> 
                <h6>Seven Technology</h6>
                <h7>Islamabad</h7>
                <hr/>
                <p>1 day ago</p>
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
     <ReactTooltip 
     multiline={true}
     effect="solid"
     border={true}
     scrollHide={true}
     />
     </div>
  )
}

export default JobsGridList;

