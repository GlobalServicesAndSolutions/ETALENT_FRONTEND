import React from 'react';
import Widget from 'components/Widget';

const CandidateListHeader = ({ onClickStage, jobStatus }) => {
  return (
    <Widget styleName="jr-card-profile" >
      <div className="mb-3">
        <h4>Operations Manager{` (${jobStatus})`}</h4>
        <br />
        <h5>Filter Stages</h5>
        <div className='row'>
          <h6 onClick={onClickStage} className='stages'>
            Ready To Apply
             <sup> 20</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            InterView
            <sup>10</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            New Application
            <sup> 3</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Short List
            <sup> 5</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Background Check
            <sup> 6</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Assesments
            <sup> 4</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Offers
            <sup> 5</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Ready For Hire
            <sup> 7</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages'>
            Hired
            <sup> 8</sup>
          </h6>
        </div>
      </div>
    </Widget>
  )
};

export default CandidateListHeader;



