import React, { Component } from 'react';
import ETalentPoolHeader from './EtalentPoolHeader';

class ETalentPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <div >
          <ETalentPoolHeader />
        </div>
        <div className="app-wrapper">
            
      </div>
      </div>

    );
  }
}

export default ETalentPool;