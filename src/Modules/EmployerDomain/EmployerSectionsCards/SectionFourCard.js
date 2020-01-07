import React from "react";
import Widget from "components/Widget";

const EmployerSectionFourReview = ({
    data
}) => {
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <div>
                    <h3 className="card-title mb-2 mb-md-3">Contract Information</h3>
                </div>
                <hr />
                <table>
                    <tbody>
                        <tr>
                        <td><th><strong>Duration</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>Years</th></td>
                            <td> : {data.contractYears}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Months</th></td>
                            <td> : {data.contractMonth}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><th>Days</th></td>
                            <td> : {data.contractDays}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td><th>Visa Status</th></td>
                            <td> : {data.visaStatusvalue}</td>
                        </tr>
                        <hr/>
                        <tr>
                            <td><th>Bill Rate Currency</th></td>
                            <td> : {data.billRateCurrency}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Bill Rate</th></td>
                            <td> : {data.billRate}</td>
                        </tr>
                        <hr/>
                       <tr>
                        <td><th><strong>Commute</strong></th></td>
                        </tr>
                        <tr>
                            <td><th>Commute Currency</th></td>
                            <td> : {data.commuteCurrencyValue}</td>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><th>Commute Ammount</th></td>
                            <td> : {data.commuteAmountValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Widget>
    )
}


export default EmployerSectionFourReview;
