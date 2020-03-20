import React from "react";
import Widget from "components/Widget";
import Chart from 'components/dashboard/default/Chart'

const CandidatesListGraph = () => {
         let lableList=['All','Ready To Apply', 'InterView','New Application','Short List','Background Check','Assesments',
         'Offers','Ready For Hire','Hired'];
    return (

        <Widget styleName="jr-card-profile canidatesListGraphCardMargin">
            <div >
                <Chart
                  borderColor="white"
                  pointBorderColor='white'
                  pointBackgroundColor='white'
                  height={200} 
                  pointHoverBorderColor='blue'
                  borderWidth={0}
                  chartdata={[78, 20,10,3,5,6,4,5,7,8]}
                  shadowColor='black'
                  labels={lableList}
                />
            </div>
        </Widget>
    )
}


export default CandidatesListGraph;
