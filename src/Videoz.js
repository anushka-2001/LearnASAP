import React from 'react'
import ReactPlayer from 'react-player';
import {Button, Container} from 'react-bootstrap';
export const Videoz = () => {
    return (
        <div style={{backgroundColor:"#f0f0f0"}}>
           <Container><table><tr><td><ReactPlayer url ='https://youtu.be/IoL9Ve2SRwQc'/>
           <h2>Video Lecture 104 (DBMI) ~By Prof. Partha</h2></td></tr><tr><td><Button variant="warning" style={{color:"black"}}><a href="#">DBMI Video Lecture-101</a></Button></td></tr><tr><td><Button variant="white" style={{color:"black"}}><a href="#">DBMI Video Lecture-102</a></Button></td></tr><tr><td><Button variant="warning" style={{color:"black"}}><a href="#">DBMI Video Lecture-103</a></Button></td></tr><tr><td><Button variant="white" style={{color:"black"}}><a href="#">DBMI Video Lecture-105</a></Button></td></tr><tr><td><Button variant="warning" style={{color:"black"}}><a href="#">DBMI Video Lecture-106</a></Button></td></tr><tr><td><Button variant="white" style={{color:"black"}}><a href="#">DBMI Video Lecture-107</a></Button></td></tr></table> 
     <Container style={{paddingInlineStart:"200px"}}><Button variant="dark"><a href="#">Live doubt solving</a></Button></Container>   </Container>
        </div>
    )
}
export default Videoz;