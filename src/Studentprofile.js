import React from "react";
import Profile from "./profile.component";
import {ProgressBar} from "react-bootstrap";
import {render, Render} from "react-router-dom";
import {CircleProgress} from 'react-gradient-progress';
const data = {
  cover:
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
  avatar:
    "https://www.tx2.fr/wp-content/uploads/2018/11/avatar_jeune_homme_lunettes_developpeur_geek.jpg",
  userName: "SAPP",
  userTag: "LearnASAP_SAPP",
  content:
    "A user is a person who utilizes a computer or network service. Users of computer systems and software products generally lack the technical expertise required to fully understand how they work."
   
  };
 
export default function Studentprofile() {
  const [userData, setUserData] = React.useState(data);
  const [dataLoading, setDataLoading] = React.useState(true);

  return (
   <div> <Profile
      cover={userData.cover}
      avatar={userData.avatar}
      userName={userData.userName}
      userTag={userData.userTag}
      content={userData.content}

    />
    
<CircleProgress percentage={70} strokeWidth={8} secondaryColor="#f0f0f0" text="week1" />
+
<CircleProgress percentage={20} strokeWidth={8} secondaryColor="#f0f0f0" />+

<CircleProgress percentage={100} strokeWidth={8} primaryColor="#272a31" />=

<CircleProgress percentage={63.33} strokeWidth={8} secondaryColor="#f0f0f0" />
    <b>Average </b>
    <div style={{heigh:"100px"}}><ProgressBar>
  <ProgressBar striped variant="success" now={35} key={1} />
  <ProgressBar variant="warning" now={20} key={2} />
  <ProgressBar striped variant="danger" now={10} key={3} />
</ProgressBar></div>
    </div>
  );
}
