import React, { Component } from 'react';
import Header from 'components/Header';
import CandidateListHeader from './CandidateListHeader';
import CandidatesTable from './CandidatesList';
import CandidatesPopUpInfo from './CandidatePopUp';
import AddNewUserByEtalentIdDialog from 'util/Models/AddNewUserByEtalentIdDialog';
import CandidatesListGraph from './CandidatesListGraph';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateStage:'',
            isCandidatePopUpOpen:false,
            candidatesData:[],
            selecteCandidate:{},
            candidateStatus:'',
            candidateStagefilter:'',
            addNewUserByEtalentId: false,
        }
    }
    componentWillMount()
    {
        const data=[
            {
                id:1,
                name:'Salman',
                phoneNo:'03110200751',
                recruiter:'Seven',
                stage:'Hired',
                appliedDate:'1/17/2020'
            },
            {
                id:2,
                name:'Haider',
                phoneNo:'03110200751',
                recruiter:'Zigron',
                stage:'New Application',
                appliedDate:'1/17/2020'
            }
        ];
        this.setState({candidatesData:data});
    }
    onChangeCandidateStatus=(event)=>{
        this.setState({candidateStatus:event.target.value});
    }
    onSaveCandidateEdit=(item)=>{
        this.setState({isCandidatePopUpOpen:false});
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
        this.setState({candidateStagefilter:res});
    }
    onClickAddNewUserById = () => {
        this.setState({ addNewUserByEtalentId: true });
    }
    onCloseAddNewUserById = () => {
        this.setState({ addNewUserByEtalentId: false });
    }
    render() {
        return (
            <div className="app-main-container">
                <div className="app-header ">
                    <Header />
                </div>
                <CandidateListHeader 
                onClickStage={this.onClickStage}
                jobStatus={this.state.candidateStatus ?this.state.candidateStatus:'All' }
                candidateStagefilter={this.state.candidateStagefilter}
                />
                <div className='row'>
                <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                    <CandidatesTable
                    data={this.state.candidatesData}
                    onCandidateEditClick={this.onCandidateEditClick}
                    onChangeCandidateStatus={this.onChangeCandidateStatus}
                    candidateStatus={this.state.candidateStatus}
                    candidateStagefilter={this.state.candidateStagefilter}
                    onClickAddNewUserById={this.onClickAddNewUserById}
                    />
                </div>
                <div className="col-xl-5 col-lg-4 col-md-7 col-12">
                <CandidatesListGraph/>
                </div>
                </div>
                {this.state.isCandidatePopUpOpen ?
                    <CandidatesPopUpInfo 
                    open={this.state.isCandidatePopUpOpen}
                    onCandidateStageChange={this.onCandidateStageChange}
                    onCandidateEditClick={this.onCandidateEditClick}
                    onCloseCandidateEdit={this.onCloseCandidateEdit}
                    candidateStage={this.state.candidateStage}
                    selecteCandidate={this.state.selecteCandidate}
                    onSaveCandidateEdit={this.onSaveCandidateEdit}
                    />
                    :
                    <span></span>
                }
                {this.state.addNewUserByEtalentId &&
                    <AddNewUserByEtalentIdDialog
                        open={this.state.addNewUserByEtalentId}
                        handleClose={this.onCloseAddNewUserById}
                    />
                }
            </div>
        );
    };
}
export default Candidates;