import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import EmployerDashboardView from './EmployerDashboardData';
import TotalRequisitionCard from './DashboardQuickLinksCards/TotalRequisition';
import AppliedCandidates from './DashboardQuickLinksCards/AppliedCandidates';
import RejectedCandidates from './DashboardQuickLinksCards/RejectedCandidates';
import OfferLetters from './DashboardQuickLinksCards/OfferLetters';
import HiredCandidates from './DashboardQuickLinksCards/HiredCandidates';
import EmployerGraphDetail from './DashBoardGraphCard';
import TotalVendors from './DashboardQuickLinksCards/TotalVendors';

class EmployerDashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isFilterOptionClick:false,
      openAddVendorDialog:false,
      openAddNewUserDialog:false,
      value:'one',
      employerClick:false
    }
  }
  onClickFilterOptions=()=>{
    this.setState({isFilterOptionClick:!this.state.isFilterOptionClick});
  }
  onClickAddVendor=()=>{
    this.setState({openAddVendorDialog:true});
  }
  onCloseAddVendorDialog=()=>{
    this.setState({openAddVendorDialog:false});
  }
  tabHandleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  a11yProps = (index) => {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }
  onClickEmployer=()=>{
    this.setState({employerClick:!this.state.employerClick})
  }
  render() {
    return (
      <div>
        <div >
          <EmployerProfileCard  />
        </div>
        <div  className="app-wrapper employerDashboardStyle">
          <div className='row rowMarginRight'>
            <div className='col-6 col-md-8 col-xl-2'>
              <TotalRequisitionCard />
            </div>
            <div className='col-6 col-md-4 col-xl-2'>
              <AppliedCandidates />
            </div>
            <div className='col-6 col-md-4 col-xl-2'>
              <RejectedCandidates />
            </div>
            <div className='col-6 col-md-4 col-xl-2'>
              <OfferLetters />
            </div>
            <div className='col-6 col-md-4 col-xl-2'>
              <HiredCandidates />
            </div>
            <div className='col-6 col-md-4 col-xl-2'>
              <TotalVendors />
            </div>
          </div>
          <div className='row'>
          <div className="col-xl-9 col-lg-9 col-md-7 col-12">
          <EmployerDashboardView 
          onClickFilterOptions={this.onClickFilterOptions}
          isFilterOptionClick={this.state.isFilterOptionClick}
          onClickEmployer={this.onClickEmployer}
          />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-12 employerDashboardStyle">
          {this.state.employerClick &&
            <EmployerGraphDetail
          a11yProps={this.a11yProps}
          tabHandleChange={this.tabHandleChange}
          value={this.state.value}
          />}
          </div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default EmployerDashboard;