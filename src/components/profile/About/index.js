import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Widget from "components/Widget/index";
import AboutItem from "./AboutItem";


class About extends React.Component {

  state = {
    data:[
      {
    title:"Birthday",
    icon:"abc",
    desc:"Hello",
    userList:["Salman","Asim"]},
    {
      title:"Birthday",
    icon:"abc",
    desc:"Hello",
    userList:["Salman","Asim"]
    }
    ],
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {value,data} = this.state;
    return (
      <Widget styleName="jr-card-full jr-card-tabs-right jr-card-profile">
        <div className="card-header">
          <h4 className="card-title mb-0">About</h4>
        </div>
        <div className="jr-tabs-classic">
          <div className="jr-tabs-content jr-task-list">
             <div className="row">
              {value === 0 && data.map((about, index) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                  <AboutItem data={about}/> 
                </div>)
                } 
            </div> 
          </div>
        </div>
      </Widget>
    );
  }
}


export default About;
