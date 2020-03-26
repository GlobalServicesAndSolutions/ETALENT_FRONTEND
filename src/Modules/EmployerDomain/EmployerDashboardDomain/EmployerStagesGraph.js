import React from "react";
import Widget from "components/Widget";
import Chart from 'components/dashboard/default/Chart'

const EmployerStagesGraph = () => {
    let lableList = ['All', 'Ready To Apply', 'InterView', 'New Application', 'Short List', 'Background Check', 'Assesments',
        'Offers', 'Ready For Hire', 'Hired'];
    return (

        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <h3 className="card-title mb-2 mb-md-3" style={{ color: 'gray' }}>Stages</h3>
                <hr />
                <div >
                    <Chart
                        borderColor="white"
                        pointBorderColor='white'
                        pointBackgroundColor='white'
                        height={250}
                        pointHoverBorderColor='blue'
                        borderWidth={0}
                        chartdata={[78, 20, 10, 3, 5, 6, 4, 5, 7, 8]}
                        shadowColor='black'
                        labels={lableList}
                    />
                </div>
            </div>
        </Widget>
    )
}


export default EmployerStagesGraph;
