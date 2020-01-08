import React, { Component } from 'react';
import EmployerProfileCard from '../EmployerDomain/EmployerprofileCard/EmployerProfileCard';
import EmployerOverview from './EmployerOverview/Overview';
import EmployerInfo from './EmployerOverview/EmloyerInfo';
import EmployerProfileInfo from './EmployerModalDialogues/EmployerBasicInfo';

class EmployerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employerInfo:{
            companySize: '',
            openEmployerBasicInfoDialogue:false,
            employerTypeValue:''
            }
        }
    }
    onEmployerInfochange=(event)=>{
        let employerInfo=this.state.employerInfo;
        let field=event.target.name;
        employerInfo[field]=event.target.value;
        this.setState({employerInfo});
    }
    onCloseEployerInfo=()=>{
        this.setState({openEmployerBasicInfoDialogue:false});
    }
    onOpenEployerInfo=()=>{
        this.setState({openEmployerBasicInfoDialogue:true});
    }
    render() {
        return (
            <div className="app-wrapper">
                <EmployerProfileCard  />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <EmployerOverview />
                        <EmployerInfo 
                        onOpenEployerInfo={this.onOpenEployerInfo}
                        />
                        </div>
                    </div>
                    {this.state.openEmployerBasicInfoDialogue && 
                    <EmployerProfileInfo 
                    open={this.state.openEmployerBasicInfoDialogue}
                    handleClose={this.onCloseEployerInfo}
                    companySize={this.state.employerInfo.companySize}
                    employerTypeValue={this.state.employerInfo.employerTypeValue} 
                    onEmployerInfochange={this.onEmployerInfochange}      
                    />}
                </div>
        );
    };
}
export default EmployerProfile;