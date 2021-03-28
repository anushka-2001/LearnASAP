import React from "react";
import Profile from "./profile.component";

import {Jumbotron,Button,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {bg} from "../logo/img-2.jpg"
import './HeroSection.css';
const data = {
  cover:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  avatar:
    "https://st.depositphotos.com/1758000/2251/v/950/depositphotos_22510975-stock-illustration-smart-female-lecturer-smiling-with.jpg",
  userName: "Professor KS",
  userTag: "LearnASAP_Prof_KS",
  content:
    "DBMS Professor open to discussion, to discuss doubts "
   
  };

export default function Studentprofile() {
  const [userData, setUserData] = React.useState(data);
  const [dataLoading, setDataLoading] = React.useState(true);

  return (
   <div>
     <div >
       <video style={{heigth:"500px"}} src='/videos/Video.mp4' autoPlay loop muted /> <Profile style={{ top:"20px",width:"90%", height:"100px"}} 
      cover={userData.cover}
      avatar={userData.avatar}
      userName={userData.userName}
      userTag={userData.userTag}/>
      <Card style={{bgImg:{bg},paddingInlineStart:"500px",width:"100%",height:"200px"}}><p style={{ top:"500px",width:"700px", height:"1000px"}}>
     <p style={{fontSize:"20px"}}> I teach DBMS!</p>
      <p style={{alignContent:"justified"}}>
  {userData.content}
      </p>
     
      <Button variant="warning"><Link to ='./videoplayer' style={{color:"#000"}}>Click here</Link></Button>
      </p></Card>
     <Card>
   <p style={{paddingInlineStart:"500px"}}> <Button variant="warning"><Link to ='./upload' style={{color:"#000"}}>Upload Notes and Video Link </Link></Button>
 </p> </Card></div></div>
        

    
  );
}
