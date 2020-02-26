import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

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


const SaveJobsList = () => {
  const classes = useStyles();
  return (
    <div>
    <div style={{ marginLeft: '10px'}}>
      <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container  spacing={2} >
          {[0, 1, 2,3,4,5,6,7,8,9,10].map(value => (
            <Grid key={value} item > 
              <Paper className={classes.paper} style={{padding:'5px'}}>
                <img   className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" aria-hidden alt='image' />
                
                <Link to='/jobDescription' ><h4 className='allfontCapital'>Front End Developer</h4></Link> 
                <h6>Seven Technology</h6>
                <h7>Islamabad</h7>
                </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
     </div>
  )
}

export default SaveJobsList;

