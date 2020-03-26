import React from "react";
import Widget from "components/Widget";
import PieChart from 'components/dashboard/default/PieChart';

const EmployerExperienceGraph = () => {
    let experienceData=['Salman','Haris','Arsalan','Maaz'];
    return (
        <Widget styleName="jr-card-profile">
            <div className="mb-3">
                <h3 className="card-title mb-2 mb-md-3" style={{ color: 'gray' }}>Experience</h3>
                <hr />
                <div>
                    <PieChart
                        height={250}
                        chartdata={[5, 9, 3, 10]}
                        shadowColor='gray'
                        labels={experienceData}
                    />
                </div>
            </div>
        </Widget>
    )
}


export default EmployerExperienceGraph;