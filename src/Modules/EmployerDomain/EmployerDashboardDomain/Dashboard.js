import React,{Component} from 'react';
import EmployerProfileCard from '../EmployerprofileCard/EmployerProfileCard';
import EmployerDashboardView from './EmployerDashboardData';
import AddVendorDialog from 'util/Models/AddVendorDialog';

class EmployerDashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      isFilterOptionClick:false,
      openAddVendorDialog:false
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
  render() {
    return (
      <div>
        <div >
          <EmployerProfileCard 
          onClickAddVendor={this.onClickAddVendor}
          />
        </div>
        <div  className="app-wrapper">
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
        </div>
      
    );
  }
}

export default EmployerDashboard;