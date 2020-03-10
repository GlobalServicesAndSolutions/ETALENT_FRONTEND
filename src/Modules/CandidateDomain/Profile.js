import React, { Component } from 'react';
import Header from 'components/Header';
import EducationDialog from '../../util/Models/EducationDialog';
import LisenceAndCertification from '../../util/Models/LisenceAndCertification';
import ProfileHeader from '../../../src/components/profile/ProfileHeader/index';
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
import SoftSkillsDialogue from 'util/Models/SoftSkills';
import ProfileLevelEdit from './CandidatesList/ProfileLevelEditDialogue';
import Portfolio from 'components/profile/Freelance/Portfolio';
import Experience from 'components/profile/Experience/Experience';
import ProjectDialog from 'util/Models/ProjectDialog';
import Presentation from 'components/profile/Presentation/Presentation';
import PresentationDialog from 'util/Models/PresentationDialog';
import ExperienceDialog from 'util/Models/ExperienceDialog';
import PortfolioDialog from 'util/Models/PortFolioDialog';
import Publications from 'components/profile/Publications/Publications';
import PublicationDialog from 'util/Models/PublicationDialog';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationInfo: {
                school: '',
                schoolUrl: '',
                degree: '',
                fieldofstudy: '',
                grade: '',
                certificationIssueDate: new Date().toLocaleDateString(),
                educationEndDate: new Date().toLocaleDateString(),
                educationCity: '',
                educationState: ''
            },
            lisenceAndCertificationinfo: {
                certificationName: '',
                organization: '',
                credentialId: '',
                credentialUrl: '',
                certificationStartDate: new Date().toLocaleDateString(),
                certificationEndDate: new Date().toLocaleDateString(),
                score: ''
            },
            technicalSkillInfo: {
                skillName: '',
                skillExperience: ''
            },
            softSkillInfo: {
                skillName: '',
                skillExperience: ''
            },
            projectInfo: {
                projectName: '',
                projectStartDate: new Date().toLocaleDateString(),
                projectEndDate: new Date().toLocaleDateString(),
                projectUrl: '',
                projectDescription: '',
            },
            presentationInfo: {
                presentationName: '',
                presentationDescription: '',
                attachment: ''
            },
            experienceInfo: {
                experienceTitle: '',
                experienceEmploymentType: '',
                experienceCompany: '',
                experienceIndustry: '',
                experienceCity: '',
                experienceStartDate: new Date().toLocaleDateString(),
                experienceEndDate: new Date().toLocaleDateString(),
                experienceDescription: ''
            },
            portfolioInfo: {
                portfolioInfo: ''
            },
            publicationInfo: {
                publicationAuthorName: '',
                publicationTitle: '',
                publicationPublisherName: '',
                publishDate: new Date().toLocaleDateString(),
                publicationUrl: '',
                publicationDescription: ''
            },
            educationOpen: false,
            lisenceOpen: false,
            skillOpen: false,
            softSkillsOpen: false,
            awardOpen: false,
            basicInfoOpen: false,
            courseAndtraining: false,
            ratingValue: 0,
            expansionPanelvalue: '',
            isEdit: false,
            switchProfile: false,
            profileLevel: false,
            showCommentsBox: false,
            employeeWorkCountry: '',
            softSkillsSwitch: false,
            skillsSwitch: false,
            projectDialog: false,
            presentationDialog: false,
            experienceDialog: false,
            portfolioDialog: false,
            publicationDialog: false
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
    openProfileLevelDialogue = () => {
        this.setState({ profileLevel: true });
    }
    closeLisenceDialog = () => {
        this.setState({ lisenceOpen: false });
    }
    openSkillDialogue = () => {
        this.setState({ skillOpen: true });
    }
    openSoftSkillDialogue = () => {
        this.setState({ softSkillsOpen: true });
    }
    closeSkillDialog = () => {
        this.setState({ skillOpen: false });
    }
    closeSoftSkillDialog = () => {
        this.setState({ softSkillsOpen: false });
    }
    closeProfileLevelDialog = () => {
        this.setState({ profileLevel: false });
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
        this.setState({ isEdit: !this.state.isEdit });
    }
    isEditCancel = () => {
        this.setState({ isEdit: false });
    }
    onChangeEducationInfo = (event, date, name) => {
        let educationInfo = this.state.educationInfo;
        if (name) {
            educationInfo[name] = date;
            this.setState({ educationInfo });
        }
        else {
            let field = event.target.name;
            educationInfo[field] = event.target.value;
            this.setState({ educationInfo });
        }
    }
    onChangeProjectInfo = (event, date, name) => {
        let projectInfo = this.state.projectInfo;
        if (name) {
            projectInfo[name] = date;
            this.setState({ projectInfo });
        }
        else {
            let field = event.target.name;
            projectInfo[field] = event.target.value;
            this.setState({ projectInfo });
        }
    }
    onChangeLisenceInfo = (event, date, name) => {
        let lisenceInfo = this.state.lisenceAndCertificationinfo;
        if (name) {
            lisenceInfo[name] = date;
            this.setState({ lisenceInfo });
        }
        else {
            let field = event.target.name;
            lisenceInfo[field] = event.target.value;
            this.setState({ lisenceInfo });
        }
    }
    onChangeSkillsInfo = (event) => {
        let skillsInfo = this.state.technicalSkillInfo;
        let field = event.target.name;
        skillsInfo[field] = event.target.value;
        this.setState({ skillsInfo });
    }
    onChangeSoftSkillsInfo = (event) => {
        let softSkillsInfo = this.state.softSkillInfo;
        let field = event.target.name;
        softSkillsInfo[field] = event.target.value;
        this.setState({ softSkillsInfo });
    }
    onChangePresentationInfo = (event) => {
        let presentationInfo = this.state.presentationInfo;
        let field = event.target.name;
        presentationInfo[field] = event.target.value;
        this.setState({ presentationInfo });
    }
    onChangeExperienceInfo = (event, date, name) => {
        let experienceInfo = this.state.experienceInfo;
        if (name) {
            experienceInfo[name] = date;
            this.setState({ experienceInfo });
        }
        else {
            let field = event.target.name;
            experienceInfo[field] = event.target.value;
            this.setState({ experienceInfo });
        }
    }
    onChangePortfolioInfo = (event) => {
        let portfolioInfo = this.state.portfolioInfo;
        let field = event.target.name;
        portfolioInfo[field] = event.target.value;
        this.setState({ portfolioInfo });
    }
    onChangePublicationInfo = (event, date, name) => {
        let publicationInfo = this.state.publicationInfo;
        if (name) {
            publicationInfo[name] = date;
            this.setState({ publicationInfo });
        }
        else {
            let field = event.target.name;
            publicationInfo[field] = event.target.value;
            this.setState({ publicationInfo });
        }
    }
    onChangeProfileSwitch = () => {
        this.setState({ switchProfile: !this.state.switchProfile });
    }
    onClickComments = () => {
        this.setState({ showCommentsBox: !this.state.showCommentsBox });
    }
    onChangeEmployeeWorkCountry = (event) => {
        this.setState({ employeeWorkCountry: event.target.value });
    }
    onChangeSoftSkillsSwitch = () => {
        this.setState({ softSkillsSwitch: !this.state.softSkillsSwitch });
    }
    onChangeSkillsSwitch = () => {
        this.setState({ skillsSwitch: !this.state.skillsSwitch });
    }
    openProjectDialog = () => {
        this.setState({ projectDialog: true });
    }
    closeProjectDialog = () => {
        this.setState({ projectDialog: false });
    }
    openPresentationDialog = () => {
        this.setState({ presentationDialog: true });
    }
    closePresentationDialog = () => {
        this.setState({ presentationDialog: false });
    }
    openExperienceDialog = () => {
        this.setState({ experienceDialog: true });
    }
    closeExperienceDialog = () => {
        this.setState({ experienceDialog: false });
    }
    openPortfloioDialog = () => {
        this.setState({ portfolioDialog: true });
    }
    closePortfloioDialog = () => {
        this.setState({ portfolioDialog: false });
    }
    openPublicationDialog = () => {
        this.setState({ publicationDialog: true });
    }
    closePublicationDialog = () => {
        this.setState({ publicationDialog: false });
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <ProfileHeader
                    onEducationView={this.onEducationView}
                    onSkillView={this.onSkillView}
                    onCertificationView={this.onCertificationView}
                    openEducationDialog={this.openEducationDialog}
                    onSkillDialogue={this.openSkillDialogue}
                    openSoftSkillDialogue={this.openSoftSkillDialogue}
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
                    onChangeProfileSwitch={this.onChangeProfileSwitch}
                    switchProfile={this.state.switchProfile}
                    openProfileLevelDialogue={this.openProfileLevelDialogue}
                    openProjectDialog={this.openProjectDialog}
                    openExperienceDialog={this.openExperienceDialog}
                    openPresentationDialog={this.openPresentationDialog}
                    openPortfloioDialog={this.openPortfloioDialog}
                    openPublicationDialog={this.openPublicationDialog}
                />
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-6 col-12">
                        <Biography
                            isEditClick={this.state.isEdit} />
                        {
                            this.state.switchProfile && <div>
                                <Portfolio
                                    showCommentsBox={this.state.showCommentsBox}
                                    onClickComments={this.onClickComments}
                                    openPortfloioDialog={this.openPortfloioDialog}
                                />
                            </div>}
                        <div>
                            <Experience
                                openExperienceDialog={this.openExperienceDialog}
                                isEditClick={this.state.isEdit}
                            />
                        </div>
                        <Projects
                            isEditClick={this.state.isEdit}
                            openProjectDialog={this.openProjectDialog} />
                        <div id="educationcard">
                            <Education
                                openEducationDialog={this.openEducationDialog}
                                isEditClick={this.state.isEdit}
                            />
                        </div>
                        <div id="certificationCard">
                            <Certification
                                openCertificationDialog={this.openLisenceDialog}
                                isEditClick={this.state.isEdit} />
                        </div>
                        <div>
                            <Publications
                                isEditClick={this.state.isEdit}
                                openPublicationtDialog={this.openPublicationDialog}
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                        <div id="softskills">
                            <SoftSkills
                                ratingValue={this.state.ratingValue}
                                onRatingChange={this.onRatingChange}
                                openSoftSkillDialogue={this.openSoftSkillDialogue}
                                isEditClick={this.state.isEdit}
                                onChangeSoftSkillsSwitch={this.onChangeSoftSkillsSwitch}
                                softSkillsSwitch={this.state.softSkillsSwitch}
                            />
                        </div>
                        <div id="skillCard">
                            <Skills
                                ratingValue={this.state.ratingValue}
                                onRatingChange={this.onRatingChange}
                                onSkillDialogue={this.openSkillDialogue}
                                isEditClick={this.state.isEdit}
                                skillsSwitch={this.state.skillsSwitch}
                                onChangeSkillsSwitch={this.onChangeSkillsSwitch}
                            />
                        </div>
                        <Awards
                            openAwardDialog={this.openAwardDialogue}
                            isEditClick={this.state.isEdit} />

                        <Courses
                            openCourseAndTrainingDialogue={this.openCourseAndTrainingDialogue}
                            isEditClick={this.state.isEdit} />
                        <Presentation
                            openPresentationDialog={this.openPresentationDialog}
                            isEditClick={this.state.isEdit}
                        />
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
                        data={this.state.technicalSkillInfo}
                    />
                    :
                    <span></span>}
                {this.state.softSkillsOpen &&
                    <SoftSkillsDialogue
                        open={this.state.softSkillsOpen}
                        handleClose={this.closeSoftSkillDialog}
                        onChangeSoftSkillsInfo={this.onChangeSoftSkillsInfo}
                        data={this.state.softSkillInfo}
                    />
                }
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
                        onChangeEmployeeWorkCountry={this.onChangeEmployeeWorkCountry}
                        employeeWorkCountry={this.state.employeeWorkCountry}
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
                {this.state.profileLevel &&
                    <ProfileLevelEdit
                        open={this.state.profileLevel}
                        handleClose={this.closeProfileLevelDialog}
                    />
                }
                {this.state.projectDialog &&
                    <ProjectDialog
                        open={this.state.projectDialog}
                        handleClose={this.closeProjectDialog}
                        onChangeProjectInfo={this.onChangeProjectInfo}
                        data={this.state.projectInfo}
                    />
                }
                {this.state.presentationDialog &&
                    <PresentationDialog
                        open={this.state.presentationDialog}
                        handleClose={this.closePresentationDialog}
                        onChangePresentationInfo={this.onChangePresentationInfo}
                        data={this.state.presentationInfo}
                    />
                }
                {this.state.experienceDialog &&
                    <ExperienceDialog
                        open={this.state.experienceDialog}
                        handleClose={this.closeExperienceDialog}
                        onChangeExperienceInfo={this.onChangeExperienceInfo}
                        data={this.state.experienceInfo}
                    />
                }
                {this.state.portfolioDialog &&
                    <PortfolioDialog
                        open={this.state.portfolioDialog}
                        handleClose={this.closePortfloioDialog}
                        onChangePortfolioInfo={this.onChangePortfolioInfo}
                        data={this.state.portfolioInfo}
                    />
                }
                {this.state.publicationDialog &&
                <PublicationDialog 
                open={this.state.publicationDialog}
                handleClose={this.closePublicationDialog}
                data={this.state.publicationInfo}
                onChangePublicationInfo={this.onChangePublicationInfo}
                />
                }
            </div>
        );
    };
}
export default Profile;