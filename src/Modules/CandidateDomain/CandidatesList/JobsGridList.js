import React from "react";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const JobsGridList = () => {
  return (
      <div >
    <GridList cellHeight={180} style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', marginTop:'50px'}} spacing={10}>
        <GridListTile  cols={2.5} style={{ height: 'auto' }}>
          <ListSubheader >Based on your Profile</ListSubheader>
        </GridListTile>

          <GridListTile style={{borderRadius:'15px', background:'lightgray'}} >
            <h5>Senior FED</h5>
            <GridListTileBar style={{borderRadius:'15px'}}
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile style={{borderRadius:'15px', background:'lightgray'}}>
          <h5>Senior FED</h5>
            <GridListTileBar style={{borderRadius:'15px'}}
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile style={{borderRadius:'15px', background:'lightgray'}}>
          <h5>Senior FED</h5>
            <GridListTileBar style={{borderRadius:'15px'}}
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
          <h5>Senior FED</h5>
            <GridListTileBar
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
          <h5>Senior FED</h5>
            <GridListTileBar
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
          <h5>Senior FED</h5>
            <GridListTileBar
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile >
          <h5>Senior FED</h5>
            <GridListTileBar
              title='Front End Developer'
              subtitle='By : Seventechnology'
              actionIcon={
                <IconButton aria-label={`info about`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          
          
      </GridList>
      </div>
  )
}

export default JobsGridList;

