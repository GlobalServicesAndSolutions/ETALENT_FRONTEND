import React from "react";
import { Button } from "@material-ui/core";

const JobDescriptionHeader = () => {
    return (
        <div className="candidatedetailheader">
            <div className="jr-profile-container">
                <div className="jr-profile-banner-top" style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <div >
                        <h3 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black allfontCapital">Sr.Software Engineer</h3>
                        <p className="mb-0 jr-fs-lg">I-9/3 Islamabad, Pakistan</p>
                        <p>Days ago</p>
                    </div>
                    <div style={{ marginRight: '100px' }}>
                        <Button variant="outlined" color="primary">
                            Apply Now
                                </Button>
                        <Button variant="outlined" color="primary">
                            Quick Apply
                                </Button>
                        <Button variant="outlined" color="primary">
                            Alert
                                </Button>
                        <Button variant="outlined" color="primary">
                            Print
                                </Button>
                    </div>
                </div>
                <br />
                <br />
                <div className="jr-profile-banner-bottom">
                    <div className="jr-tab-list">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescriptionHeader;

