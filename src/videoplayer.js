import {Button} from 'react-bootstrap';
import React from "react";
import {Cards} from "./Cards";
const Video = () => {
  const src =
    "https://vod-progressive.akamaized.net/exp=1616862788~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3545%2F20%2F517729270%2F2407973427.mp4~hmac=46e1bbba6669953dc3f3408c0fe68cb2e8c47b97d8956cf7cffd2032a9f0ec67/vimeo-prod-skyfire-std-us/01/3545/20/517729270/2407973427.mp4?filename=pexels-diva-plavalaguna-6985493.mp4";
  const [show, hide] = React.useState(true);
  
  return (
    <div className="video__container">
      <iframe src="https://app.sli.do/event/llx54jgw" height="1200px" width="100%" frameBorder="0" title="Slido"/>
    </div>
  );
};

export default function videoplayer() {
  return (
    <div>
      <Video></Video>
      <Button variant="warning"><a href='https://www.w3schools.com/'>Live Doubt Solving</a></Button>
    </div>
  );
}
