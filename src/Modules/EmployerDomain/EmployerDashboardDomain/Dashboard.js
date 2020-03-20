import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import EmployerDashboardView from './EmployerDashboardData';
import TotalRequisitionCard from './DashboardQuickLinksCards/TotalRequisition';
import AppliedCandidates from './DashboardQuickLinksCards/AppliedCandidates';
import RejectedCandidates from './DashboardQuickLinksCards/RejectedCandidates';
import OfferLetters from './DashboardQuickLinksCards/OfferLetters';
import HiredCandidates from './DashboardQuickLinksCards/HiredCandidates';
import AddNewUserDialog from 'util/Models/AddNewUserDialog';
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
      value:'one'
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
  onClickAddNewUser=()=>{
    this.setState({openAddNewUserDialog:true});
  }
  onCloseAddNewUser=()=>{
    this.setState({openAddNewUserDialog:false});
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
  render() {
    return (
      <div>
        <div >
          <EmployerProfileCard 
          onClickAddVendor={this.onClickAddVendor}
          onClickAddNewUser={this.onClickAddNewUser}
          />
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
          />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-12 employerDashboardStyle">
          <EmployerGraphDetail
          a11yProps={this.a11yProps}
          tabHandleChange={this.tabHandleChange}
          value={this.state.value}
          />
          </div>
          </div>
        </div>
        {this.state.openAddNewUserDialog &&
        <AddNewUserDialog
        open={this.state.openAddNewUserDialog}
        handleClose={this.onCloseAddNewUser}
        />
        }
        </div>
      
    );
  }
}

export default EmployerDashboard;