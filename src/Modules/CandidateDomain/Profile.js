import React, { Component } from 'react';
import Header from 'components/Header';
import { Button } from '@material-ui/core';
import EducationDialog from '../../util/Models/EducationDialog';
import LisenceAndCertification from '../../util/Models/LisenceAndCertification';
import ProfileHeader from '../../../src/components/profile/ProfileHeader/index';
import About from '../../../src/components/profile/About/index';
import Contact from '../../../src/components/profile/Contact/index';
import Biography from '../../../src/components/profile/Biography/index';
import Education from '../../../src/components/profile/Education/EducationAndExperience';
import Skills from '../../../src/components/profile/Skills/Skills';
import SkillsDialogue from '../../util/Models/Skills';
import Awards from '../../../src/components/profile/Awards/Awards';
import AwardDialog from '../../util/Models/Awards';
import Certification from '../../../src/components/profile/LisenceAndCertification/Certification';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationOpen: false,
            lisenceOpen: false,
            skillOpen:false,
            awardOpen:false,
            ratingValue: 0
        }
    }
    onRatingChange = (event, newValue) => {
        this.setState({ ratingValue: newValue });
    }
    openEducationDialog = () => {
        this.setState({ educationOpen: true });
    }
    closeEducationDialoge = () => {
        this.setState({ educationOpen: false });
    }
    openLisenceDialog = () => {
        this.setState({ lisenceOpen: true });
    }
    closeLisenceDialog = () => {
        this.setState({ lisenceOpen: false });
    }
    openSkillDialogue=()=>{
        this.setState({ skillOpen: true });
    }
    closeSkillDialog=()=>{
        this.setState({ skillOpen: false });
    }
    openAwardDialogue=()=>{
        this.setState({ awardOpen: true });
    }
    closeAwardDialog=()=>{
        this.setState({ awardOpen: false });
    }
    onEducationView=()=>{
        var elmnt = document.getElementById("educationcard");
        elmnt.scrollIntoView();
    }
    onSkillView=()=>{
        var elmnt = document.getElementById("skillCard");
        elmnt.scrollIntoView();
    }
    onCertificationView=()=>{
        var elmnt = document.getElementById("certificationCard");
        elmnt.scrollIntoView();
    }

    render() {
        return (
            <div className="app-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <ProfileHeader 
                onEducationView={this.onEducationView}
                onSkillView={this.onSkillView}
                onCertificationView={this.onCertificationView}
                />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <Biography />
                        <div id="educationcard">
                        <Education openEducationDialog={this.openEducationDialog}/>
                        </div>
                        <div id="skillCard">
                        <Skills
                            ratingValue={this.state.ratingValue}
                            onRatingChange={this.onRatingChange}
                            onSkillDialogue={this.openSkillDialogue}
                        />
                        </div>
                        <div id="certificationCard">    
                        <Certification openCertificationDialog={this.openLisenceDialog}/>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                        <Contact />
                        <Awards 
                        openAwardDialog={this.openAwardDialogue}/>
                    </div>
                </div>
                {this.state.educationOpen ?
                    <EducationDialog
                        open={this.state.educationOpen}
                        handleClose={this.closeEducationDialoge}
                    />
                    :
                    <span></span>}
                {this.state.lisenceOpen ?
                    <LisenceAndCertification
                        open={this.state.lisenceOpen}
                        handleClose={this.closeLisenceDialog}
                    />
                    :
                    <span></span>}
                    {this.state.skillOpen ?
                    <SkillsDialogue
                        open={this.state.skillOpen}
                        handleClose={this.closeSkillDialog}
                    />
                    :
                    <span></span>}
                    {this.state.awardOpen ?
                    <AwardDialog
                        open={this.state.awardOpen}
                        handleClose={this.closeAwardDialog}
                    />
                    :
                    <span></span>}
            </div>
        );
    };
}
export default Profile;