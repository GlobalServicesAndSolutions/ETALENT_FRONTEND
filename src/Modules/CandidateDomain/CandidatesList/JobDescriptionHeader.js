import React from "react";

const JobDescriptionHeader = () => {
    return (
        <div className="candidatedetailheader">
            <div className="jr-profile-container">
                <div className="jr-profile-banner-top" style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <div >
                        <h3 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-black allfontCapital">Sr.Software Engineer</h3>
                        <div>
                        <p className="mb-0 jr-fs-lg jobDetailsHeaderLineHeight">I-9/3 Islamabad, Pakistan</p>
                        <p className="mb-0 jr-fs-lg jobDetailsHeaderLineHeight">Hiring Manager</p>
                        <p className="mb-0 jr-fs-lg jobDetailsHeaderLineHeight">Req Id</p>
                        <p className="mb-0 jr-fs-lg jobDetailsHeaderLineHeight">Days ago</p>
                        </div>
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

