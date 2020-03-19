import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import EmployerDashboardView from './EmployerDashboardData';
import AddVendorDialog from 'util/Models/AddVendorDialog';
import TotalRequisitionCard from './DashboardQuickLinksCards/TotalRequisition';
import AppliedCandidates from './DashboardQuickLinksCards/AppliedCandidates';
import RejectedCandidates from './DashboardQuickLinksCards/RejectedCandidates';
import OfferLetters from './DashboardQuickLinksCards/OfferLetters';
import HiredCandidates from './DashboardQuickLinksCards/HiredCandidates';
import AddNewUserDialog from 'util/Models/AddNewUserDialog';

class EmployerDashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isFilterOptionClick:false,
      openAddVendorDialog:false,
      openAddNewUserDialog:false
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
              <TotalRequisitionCard />
            </div>
          </div>
          <EmployerDashboardView 
          onClickFilterOptions={this.onClickFilterOptions}
          isFilterOptionClick={this.state.isFilterOptionClick}
          />
        </div>
        {this.state.openAddVendorDialog  &&
        <AddVendorDialog 
        open={this.state.openAddVendorDialog}
        onCloseAddVendorDialog={this.onCloseAddVendorDialog}
        />
        }
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