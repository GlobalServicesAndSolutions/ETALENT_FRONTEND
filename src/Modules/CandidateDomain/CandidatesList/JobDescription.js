import React, { Component } from 'react';
import Header from 'components/Header';
import JobDescriptionHeader from './JobDescriptionHeader';
import JobFullInfo from './JobInfoCard';
import JobFullDexciption from './JobDescriptionCard';
import { Link } from "react-router-dom";
import Widget from "components/Widget";
import { Button } from "@material-ui/core";

class JobDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
            makeFaveriot:false
        }
    }
    onFaveriotClick = () => {
        this.setState({ makeFaveriot: !this.state.makeFaveriot });
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
                        <Button variant="outlined" color="primary">
                            Apply Now
                                </Button>
                        <Button variant="outlined" color="primary">
                            Quick Apply
                                </Button>
                        <Button variant="outlined" color="primary">
                            Alert
                                </Button>
                        <Button variant="outlined" color="primary">
                            Print
                                </Button>
                                </div>
                        <JobFullInfo 
                        onFaveriotClick={this.onFaveriotClick}
                        makeFaveriot={this.state.makeFaveriot}
                        />
                        <JobFullDexciption />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12" style={{marginTop:'37px'}}>
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
            </div>
        );
    };
}

export default JobDescription;