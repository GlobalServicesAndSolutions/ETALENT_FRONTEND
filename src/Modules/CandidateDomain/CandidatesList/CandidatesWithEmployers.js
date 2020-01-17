import React, { Component } from 'react';
import Header from 'components/Header';
import CandidateListHeader from './CandidateListHeader';
import CandidatesTable from './CandidatesList';
import CandidatesPopUpInfo from './CandidatePopUp';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateStage:'',
            isCandidatePopUpOpen:false,
            candidatesData:[],
            selecteCandidate:{}
        }
    }
    componentWillMount()
    {
        const data=[
            {
                name:'Salman',
                phoneNo:'03110200751',
                recruiter:'Seven',
                stage:'Hired',
                appliedDate:'1/17/2020'
            },
            {
                name:'Haider',
                phoneNo:'03110200751',
                recruiter:'Zigron',
                stage:'Ready For Hire',
                appliedDate:'1/17/2020'
            }
        ];
        this.setState({candidatesData:data});
    }
    onCandidateStageChange=(event)=>{
        this.setState({candidateStage:event.target.value});
    }
    onCandidateEditClick=(data)=>{
        this.setState({isCandidatePopUpOpen:true, selecteCandidate:data});
    }
    onCloseCandidateEdit=()=>{
        this.setState({isCandidatePopUpOpen:false});
    }
    onClickStage=(event)=>{
        let str=event.target.innerText;
        let res=str.slice(0, str.length-2);
        alert(res +' is Clicked');
    }
    render() {
        let jobStatus="All"
        return (
            <div className="app-main-container">
                <div className="app-header ">
                    <Header />
                </div>
                <CandidateListHeader 
                onClickStage={this.onClickStage}
                jobStatus={jobStatus}
                />
                <div style={{width:'100%'}} >
                    <CandidatesTable
                    data={this.state.candidatesData}
                    onCandidateEditClick={this.onCandidateEditClick}
                    />
                </div>
                {this.state.isCandidatePopUpOpen ?
                    <CandidatesPopUpInfo 
                    open={this.state.isCandidatePopUpOpen}
                    onCandidateStageChange={this.onCandidateStageChange}
                    onCandidateEditClick={this.onCandidateEditClick}
                    onCloseCandidateEdit={this.onCloseCandidateEdit}
                    candidateStage={this.state.candidateStage}
                    selecteCandidate={this.state.selecteCandidate}
                    />
                    :
                    <span></span>
                }
            </div>
        );
    };
}
export default Candidates;