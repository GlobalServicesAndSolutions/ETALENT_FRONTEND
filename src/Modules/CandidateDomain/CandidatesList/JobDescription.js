import React, { Component } from 'react';
import Header from 'components/Header';
import JobDescriptionHeader from './JobDescriptionHeader';
import JobFullInfo from './JobInfoCard';
import JobFullDexciption from './JobDescriptionCard';
import { Link } from "react-router-dom";
import Widget from "components/Widget";
import { Button } from "@material-ui/core";
import QuickApplyForJobDialog from 'util/Models/QuickApplyForJobDialog';
import ApplyForJobDialog from 'util/Models/ApplyForJobDialog';

class JobDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
            makeFaveriot: false,
            openQuickApplyforJob: false,
            openApplyforJob: false,
        }
    }
    onFaveriotClick = () => {
        this.setState({ makeFaveriot: !this.state.makeFaveriot });
    }
    onClickQuickApplyForJob = () => {
        this.setState({ openQuickApplyforJob: true });
    }
    closeQuickApplyForJobDialog = () => {
        this.setState({ openQuickApplyforJob: false });
    }
    onClickApplyForJob = () => {
        this.setState({ openApplyforJob: true });
    }
    closeApplyForJobDialog = () => {
        this.setState({ openApplyforJob: false });
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <div>
                    <JobDescriptionHeader />
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <div align='right'>
                            <Link><Button variant="outlined" color="primary" onClick={this.onClickApplyForJob}>
                                Apply Now
                                </Button></Link>
                            <Link><Button variant="outlined" color="primary" onClick={this.onClickQuickApplyForJob}>
                                Quick Apply
                                </Button></Link>
                            <Link to='/savejobsandalterts'><Button variant="outlined" color="primary" >
                                Alert
                                </Button></Link>
                            <Link><Button variant="outlined" color="primary">
                                Print
                                </Button></Link>
                        </div>
                        <JobFullInfo
                            onFaveriotClick={this.onFaveriotClick}
                            makeFaveriot={this.state.makeFaveriot}
                        />
                        <JobFullDexciption />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12" style={{ marginTop: '37px' }}>
                        <Widget styleName="jr-card-profile" >
                            <div className="mb-3">
                                <h4 style={{ color: 'gray' }}>Similar positions</h4>
                                <hr />
                                <Link to='#' >Software Engineer</Link>
                                <p>Location, city</p>
                                <hr></hr>
                                <Link to='#' >Software Engineer</Link>
                                <p>Location, city</p>
                                <hr></hr>
                                <Link to='#' >Software Engineer</Link>
                                <p>Location, city</p>
                                <hr></hr>
                                <Link to='#' >Software Engineer</Link>
                                <p>Location, city</p>
                            </div>
                        </Widget>
                    </div>
                </div>
                {this.state.openQuickApplyforJob &&
                    <QuickApplyForJobDialog
                        open={this.state.openQuickApplyforJob}
                        handleClose={this.closeQuickApplyForJobDialog}
                    />
                }
                {this.state.openApplyforJob &&
                    <ApplyForJobDialog
                        open={this.state.openApplyforJob}
                        handleClose={this.closeApplyForJobDialog}
                    />
                }
            </div>
        );
    };
}

export default JobDescription;