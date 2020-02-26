import React from "react";
import Widget from "components/Widget";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 140,
  },
  grid:{
    flexGrow:1,
  },
});

const Portfolio = ({showCommentsBox,
  onClickComments
}) => {
  const classes = useStyles();

  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <div className="cardHeaderAndAddButton" >
          <div>
          <div className="cardHeaderAndAddButton" >
          <div>
            <h3 className="card-title mb-2 mb-md-3">Portfolio</h3>
          </div>
          <div>
            <Fab  size="small" color="primary" aria-label="add" className='profileAddEditButton'>
              <AddIcon />
            </Fab>
          </div>
        </div>
            <hr />
            <Grid container className={classes.grid} spacing={2} >
              <Grid item xs={12}>
                <Grid container spacing={2} >
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                        title="Portfolio Title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Portfolio Title
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Portfolio Discription
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" onClick={onClickComments}>
                        Comments
                </Button>
                    </CardActions>
                    {showCommentsBox &&
                      <TextField
                      id="standard-multiline-static"
                      label="Comments"
                      multiline
                      rows="2"
                    />}
                  </Card>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                        title="Portfolio Title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Portfolio Title
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Portfolio Discription
          </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Comments
                </Button>
                    </CardActions>
                  </Card>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                        title="Portfolio Title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Portfolio Title
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Portfolio Discription
          </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Comments
                </Button>
                    </CardActions>
                  </Card>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                        title="Portfolio Title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Portfolio Title
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Portfolio Discription
          </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Comments
                </Button>
                    </CardActions>
                  </Card>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
                        title="Portfolio Title"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Portfolio Title
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Portfolio Discription
          </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Comments
                </Button>
                    </CardActions>
                  </Card>
                </Grid>
                </Grid>
                </Grid>
          </div>
        </div>
          </div>


    </Widget>
        )
      }
      
      
      export default Portfolio;
