import React,{Component} from 'react';
import ProfileCard from '../../components/ProfileCard/index'
import PicturePost from './PostingCards/PicturePost';
import JobPost from './PostingCards/JobPost';
class CandidateHome extends Component {
listClick=()=>{
  alert('Hello click')
}
  render() {
    return (
      <div>
        <div style={{marginTop:"-3%"}}>
          <ProfileCard />
        </div>
        <div  className="app-wrapper">
        <div style={{display:"flex"}}>
          <div>
          <PicturePost />
          <JobPost />
          <PicturePost />
          <PicturePost />
          <PicturePost />
          </div>
        <div style={{marginRight:"28%"}}> </div>
        </div>
        </div>
        </div>
      
    );
  }
}

export default CandidateHome;