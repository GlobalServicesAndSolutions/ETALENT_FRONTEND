import React, { Component } from 'react';
import Header from 'components/Header';
import ActiveVendorsTable from './ActiveVendorsTable';
import AddVendorDialog from 'util/Models/AddVendorDialog';
import ActiveVendorHeader from './ActiveVendorHeader';

class ActiveVendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorActiveInactiveSwitch: false,
            openAddVendorDialog: false
        }
    }
    onChangeVendorActiveInactive = (event) => {
        this.setState({ vendorActiveInactiveSwitch: event.target.checked });
    }
    onClickAddVendor=()=>{
        this.setState({openAddVendorDialog:true});
      }
      onCloseAddVendorDialog=()=>{
        this.setState({openAddVendorDialog:false});
      }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <ActiveVendorHeader 
                onClickAddVendor={this.onClickAddVendor}
                />
                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-8 col-12">
                        <ActiveVendorsTable
                            onChangeVendorActiveInactive={this.onChangeVendorActiveInactive}
                            vendorActiveInactiveSwitch={this.state.vendorActiveInactiveSwitch}
                            onClickAddVendor={this.onClickAddVendor}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    </div>
                </div>
                {this.state.openAddVendorDialog &&
                    <AddVendorDialog
                        open={this.state.openAddVendorDialog}
                        onCloseAddVendorDialog={this.onCloseAddVendorDialog}
                    />
                }
            </div>
        );
    };
}
export default ActiveVendors;