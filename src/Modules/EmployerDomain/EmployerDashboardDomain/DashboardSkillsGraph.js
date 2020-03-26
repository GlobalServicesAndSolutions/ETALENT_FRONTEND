import React from "react";
import Widget from "components/Widget";
import Chart from 'components/dashboard/default/Chart'

const EmployerSkillsGraph = () => {
    let lableList = ['communication', 'Humanidity', 'Code', 'Style'];
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                    <h3 className="card-title mb-2 mb-md-3" style={{ color: 'gray' }}>Skills</h3>
                    <hr/>
                    <div>
                        <Chart
                            borderColor="white"
                            pointBorderColor='white'
                            pointBackgroundColor='white'
                            height={250}
                            pointHoverBorderColor='blue'
                            borderWidth={0}
                            chartdata={[99, 25, 20, 30]}
                            shadowColor='black'
                            labels={lableList}
                        />
                    </div>
                    </div>
        </Widget>
    )
}


export default EmployerSkillsGraph;