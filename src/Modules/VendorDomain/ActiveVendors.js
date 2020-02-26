import React, { Component } from 'react';
import Header from 'components/Header';
import ActiveVendorsTable from './ActiveVendorsTable';

class ActiveVendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorActiveInactiveSwitch:false
        }
    }
    onChangeVendorActiveInactive=(event)=>{
        this.setState({vendorActiveInactiveSwitch:event.target.checked});
    }
    render() {
        return (
            <div className="app-main-content-wrapper">
                <div className="app-header ">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                        <ActiveVendorsTable 
                        onChangeVendorActiveInactive={this.onChangeVendorActiveInactive}
                        vendorActiveInactiveSwitch={this.state.vendorActiveInactiveSwitch}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                    </div>
            </div>
            </div>
        );
    };
}
export default ActiveVendors;