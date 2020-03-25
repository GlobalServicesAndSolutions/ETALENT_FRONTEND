import React from 'react';

const CandidateListHeader = ({ onClickStage,candidateStagefilter}) => {
  return (
    <div className="jr-card-profile">
      <div className="mb-3">
        <div className='row'>
          <h6 onClick={onClickStage} className='stages' >
            All
             <sup> 78</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
          <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Ready To Apply' ? 'maroon' : '' }}>
            Ready To Apply
             <sup> 20</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'InterView' ? 'aqua' : '' }}>
            InterView
            <sup>10</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'New Application' ? 'orange' : '' }}>
            New Application
            <sup> 3</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Short List' ? 'olive' : '' }}>
            Short List
            <sup> 5</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Background Check' ? 'purple' : '' }}>
            Background Check
            <sup> 6</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Assesments' ? 'gray' : '' }}>
            Assesments
            <sup> 4</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Offers' ? 'green' : '' }}>
            Offers
            <sup> 5</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Ready For Hire' ? 'blue' : '' }}>
            Ready For Hire
            <sup> 7</sup>
          </h6>
          &nbsp;&nbsp;&nbsp;
        <h6 onClick={onClickStage} className='stages' style={{ color: candidateStagefilter === 'Hired' ? 'red' : '' }}>
            Hired
            <sup> 8</sup>
          </h6>
        </div>
      </div>
    </div>
  )
};

export default CandidateListHeader;



