import React, { Component } from 'react';
import Header from 'components/Header';
import JobDescriptionHeader from './JobDescriptionHeader';
import JobFullInfo from './JobInfoCard';
import JobFullDexciption from './JobDescriptionCard';
import { Link } from "react-router-dom";

class JobDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0
        }
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
                <JobFullInfo />
                <JobFullDexciption />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    <h4 style={{color:'gray'}}>Similar positions</h4>
                    <br/>
                    <br/>
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
                </div>
            </div>
        );
    };
}

export default JobDescription;