import React from "react";
import Widget from "components/Widget";
import { Button } from "@material-ui/core";

const JobFullDexciption = () => {
    return (
        <Widget styleName="jr-card-profile" >
            <div className="mb-3">
                <h3 className="card-title mb-2 mb-md-3">Description</h3>
                <hr />
                <p>
                    UW Continuum College (UWC ) has an outstanding opportunity for an Assistant Director of Software Engineering to lead our
                    software development team. The Assistant Director of Software Engineering is responsible for development, software architecture,
                    and leading a team of developers. The Assistant Director of Software Engineering s team is responsible for creating, integrating,
                    and supporting key Continuum College software systems including our student information system (SIS), Salesforce, content management
                    systems, and business intelligence systems. This role will also provide guidance on software development practices, technologies,
                    and integrations with other teams.
                    Additionally, this role will have oversight of many data and business intelligence related initiatives and systems.
                </p>
                <br />
                <br />
                <p>
                    Success in this role requires:
                </p>
                <p>
                    Knowledge and experience developing content management systems (e.g. Kentico), customer relationship systems (e.g. Salesforce), and business intelligence systems (e.g. SQL Server, Power BI)
              Experience as a technical lead and functional manager of software developers
              Up to date and hands on software development skills
              Working collaboratively with UWC Project Management Office and IT Teams on joint initiatives
              Representing UWC software interests with the UW-IT department
              Fostering positive working relationships through proactive communication and collaboration with other UWC departments and occasionally with UWC senior leadership
              A passion for our values: diversity and respect for all, a never-ending pursuit of excellence, integrity, and trust openness
                </p>
                <br />
                <br />
                <Button variant="outlined" color="primary">
                    Apply Now
                                </Button>
            </div>
        </Widget>
    )
}


export default JobFullDexciption;
