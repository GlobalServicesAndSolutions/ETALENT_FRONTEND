import React, { Component } from 'react';
import Header from 'components/Header';
import EducationDialog from '../../util/Models/EducationDialog';
import LisenceAndCertification from '../../util/Models/LisenceAndCertification';
import ProfileHeader from '../../../src/components/profile/ProfileHeader/index';
import Contact from '../../../src/components/profile/Contact/index';
import Biography from '../../../src/components/profile/Biography/index';
import Education from '../../../src/components/profile/Education/EducationAndExperience';
import Skills from '../../../src/components/profile/Skills/Skills';
import SkillsDialogue from '../../util/Models/Skills';
import Awards from '../../../src/components/profile/Awards/Awards';
import AwardDialog from '../../util/Models/Awards';
import Certification from '../../../src/components/profile/LisenceAndCertification/Certification';
import BasicInfoProfile from '../../../src/util/Models/BasicInfo';
import SoftSkills from '../../components/profile/SoftSkills/SoftSkills';
import Projects from '../../components/profile/Projects/Projects';
import Courses from '../../components/profile/CourseAndTrainings/CoursesAndTraining';
import CourseAndTrainings from '../../util/Models/CoursesAndTrainings';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationInfo: {
                school: '',
                degree: '',
                fieldofstudy: '',
                grade: '',
                activitiesAndSocieties: '',
                description: ''
            },
            lisenceAndCertificationinfo: {
                lisenceName: '',
                organization: '',
                credentialId: '',
                credentialUrl: ''
            },
            skillInfo:{
                skillName:''
            },
            educationOpen: false,
            lisenceOpen: false,
            skillOpen: false,
            awardOpen: false,
            basicInfoOpen: false,
            courseAndtraining: false,
            ratingValue: 0,
            expansionPanelvalue: '',
            isEdit: false
        }
    }
    onRatingChange = (event, newValue) => {
        this.setState({ ratingValue: newValue });
    }
    downloadPDF = () => {
        alert('Downloaded');
    }
    shareProfile = () => {
        alert('You shared a profile');
    }
    onExpansionPanelChange = panel => (event, expandedPanel) => {
        this.setState({ expansionPanelvalue: expandedPanel ? panel : 'notExpanded' })
    }
    onParentExpansion = (e, parentPanel) => {
        if (parentPanel === false) {
            this.setState({ expansionPanelvalue: '' });
        }
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
    openSkillDialogue = () => {
        this.setState({ skillOpen: true });
    }
    closeSkillDialog = () => {
        this.setState({ skillOpen: false });
    }
    openAwardDialogue = () => {
        this.setState({ awardOpen: true });
    }
    closeAwardDialog = () => {
        this.setState({ awardOpen: false });
    }
    onEducationView = () => {
        var elmnt = document.getElementById("educationcard");
        elmnt.scrollIntoView();
    }
    onSkillView = () => {
        var elmnt = document.getElementById("skillCard");
        elmnt.scrollIntoView();
    }
    onCertificationView = () => {
        var elmnt = document.getElementById("certificationCard");
        elmnt.scrollIntoView();
    }
    basicInfoClick = () => {
        this.setState({ basicInfoOpen: true });
    }
    closeBasicInfo = () => {
        this.setState({ basicInfoOpen: false });
    }
    openCourseAndTrainingDialogue = () => {
        this.setState({ courseAndtraining: true });
    }
    closeCourseAndTrainingDialogue = () => {
        this.setState({ courseAndtraining: false });
    }
    isEditClick = () => {
        this.setState({ isEdit: true });
    }
    isEditCancel = () => {
        this.setState({ isEdit: false });
    }
    onChangeEducationInfo = (event) => {
        let educationInfo = this.state.educationInfo;
        let field = event.target.name;
        educationInfo[field] = event.target.value;
        this.setState({ educationInfo });
    }
    onChangeLisenceInfo = (event) => {
        let lisenceInfo = this.state.lisenceAndCertificationinfo;
        let field = event.target.name;
        lisenceInfo[field] = event.target.value;
        this.setState({ lisenceInfo });
    }
    onChangeSkillsInfo=(event)=>{
        let skillInfo = this.state.skillInfo;
        let field = event.target.name;
        skillInfo[field] = event.target.value;
        this.setState({ skillInfo });
    }

    render() {
        return (
            <div className="app-main-container">
                <div className="app-header ">
                    <Header />
                </div>
                <ProfileHeader
                    onEducationView={this.onEducationView}
                    onSkillView={this.onSkillView}
                    onCertificationView={this.onCertificationView}
                    openEducationDialog={this.openEducationDialog}
                    onSkillDialogue={this.openSkillDialogue}
                    openCertificationDialog={this.openLisenceDialog}
                    openAwardDialog={this.openAwardDialogue}
                    basicInfoClick={this.basicInfoClick}
                    openCourseAndTrainingDialogue={this.openCourseAndTrainingDialogue}
                    onExpansionPanelChange={this.onExpansionPanelChange}
                    expansionPanelvalue={this.state.expansionPanelvalue}
                    onParentExpansion={this.onParentExpansion}
                    downloadPDF={this.downloadPDF}
                    shareProfile={this.shareProfile}
                    isEditClick={this.isEditClick}
                    isEditCancel={this.isEditCancel}
                    isEdit={this.state.isEdit}
                />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <Biography
                            isEditClick={this.state.isEdit} />
                        <div id="educationcard">
                            <Education
                                openEducationDialog={this.openEducationDialog}
                                isEditClick={this.state.isEdit}
                            />
                        </div>
                        <div id="skillCard">
                            <Skills
                                ratingValue={this.state.ratingValue}
                                onRatingChange={this.onRatingChange}
                                onSkillDialogue={this.openSkillDialogue}
                                isEditClick={this.state.isEdit}
                            />
                        </div>
                        <div id="softskills">
                            <SoftSkills
                                ratingValue={this.state.ratingValue}
                                onRatingChange={this.onRatingChange}
                                onSkillDialogue={this.openSkillDialogue}
                                isEditClick={this.state.isEdit}
                            />
                        </div>
                        <div id="certificationCard">
                            <Certification
                                openCertificationDialog={this.openLisenceDialog}
                                isEditClick={this.state.isEdit} />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                        <Contact />
                        <Awards
                            openAwardDialog={this.openAwardDialogue}
                            isEditClick={this.state.isEdit} />
                        <Projects
                            isEditClick={this.state.isEdit} />
                        <Courses
                            openCourseAndTrainingDialogue={this.openCourseAndTrainingDialogue}
                            isEditClick={this.state.isEdit} />
                    </div>
                </div>
                {this.state.educationOpen ?
                    <EducationDialog
                        open={this.state.educationOpen}
                        handleClose={this.closeEducationDialoge}
                        onChangeEducationInfo={this.onChangeEducationInfo}
                        data={this.state.educationInfo}
                    />
                    :
                    <span></span>}
                {this.state.lisenceOpen ?
                    <LisenceAndCertification
                        open={this.state.lisenceOpen}
                        handleClose={this.closeLisenceDialog}
                        onChangeLisenceInfo={this.onChangeLisenceInfo}
                        data={this.state.lisenceAndCertificationinfo}
                    />
                    :
                    <span></span>}
                {this.state.skillOpen ?
                    <SkillsDialogue
                        open={this.state.skillOpen}
                        handleClose={this.closeSkillDialog}
                        onChangeSkillsInfo={this.onChangeSkillsInfo}
                        data={this.state.skillInfo}
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
                {this.state.basicInfoOpen ?
                    <BasicInfoProfile
                        open={this.state.basicInfoOpen}
                        handleClose={this.closeBasicInfo}
                    />
                    :
                    <span></span>}
                {this.state.courseAndtraining ?
                    <CourseAndTrainings
                        open={this.state.courseAndtraining}
                        handleClose={this.closeCourseAndTrainingDialogue}
                    />
                    :
                    <span></span>}
            </div>
        );
    };
}
export default Profile;