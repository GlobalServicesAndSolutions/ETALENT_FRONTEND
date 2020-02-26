import React, { Component } from 'react';
import EmployerProfileCard from '../EmployerDomain/EmployerprofileCard/EmployerProfileCard';
import EmployerOverview from './EmployerOverview/Overview';
import EmployerInfo from './EmployerOverview/EmloyerInfo';
import EmployerProfileInfo from './EmployerModalDialogues/EmployerBasicInfo';

class EmployerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employerInfo: {
                companySize: '',
                openEmployerBasicInfoDialogue: false,
                employerTypeValue: '',
                industry: '',
                website: '',
                employerHouseNo: '',
                employerStreet: '',
                employerCity: '',
                employerDistrict: '',
                employerProvince: '',
                employerZipCode: '',
                employerCountry: '',
                employerPhoneNo:0,
                employeremail: '',
                foundedYear: '',
                speciality: ''
            }
        }
    }
    onEmployerInfochange = (event) => {
        let employerInfo = this.state.employerInfo;
        let field = event.target.name;
        employerInfo[field] = event.target.value;
        this.setState({ employerInfo });
    }
    onCloseEployerInfo = () => {
        this.setState({ openEmployerBasicInfoDialogue: false });
    }
    onOpenEployerInfo = () => {
        this.setState({ openEmployerBasicInfoDialogue: true });
    }
    render() {
        return (
            <div >
                <EmployerProfileCard />
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
                        data={this.state.employerInfo}
                        onEmployerInfochange={this.onEmployerInfochange}
                    />}
            </div>
        );
    };
}
export default EmployerProfile;