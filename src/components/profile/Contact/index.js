import React from "react";
import Widget from "components/Widget";

const Contact = () => {
  const contactList = [
    {
      icon: 'emial',
      title: 'Email',
      desc: 'salmanhaider0006@hotmail.com'
    },
    {
      icon: 'emial',
      title: 'Email',
      desc: 'salmanhaider0006@hotmail.com'
    },
    {
      icon: 'emial',
      title: 'Email',
      desc: 'salmanhaider0006@hotmail.com'
    }
  ]
  return (
    <Widget styleName="jr-card-profile">
      <h3 className="card-title mb-2 mb-md-3">Contact</h3>
      <hr/>
      {contactList.map((data, index) =>
        <div key={index} className="media align-items-center flex-nowrap jr-pro-contact-list">
          <div className="mr-3">
            <ul>
              <li>
              {data.title}<br />
              {data.desc}
              </li>
            </ul>
          </div>
        </div>
      )}
    </Widget>
  )
}

export default Contact;
