import {React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import LecRow from "./LecRow";
class ListOfLectures extends Component {
 state ={
    fetched: true,
    lectures : [
        {
            lectureNo:1,
            lectureTopic:"Agile",
            lectureVideo:"someSRC",
        },
        {
            lectureNo:2,
            lectureTopic:"PandayMemes",
            lectureVideo:"anotherSRC",
        }


    ]

 }
 
 fetchLectures = ()=>
 {
     console.log("fetching")
     
     var subjectID=1
     let url = `http://127.0.0.1:8000/apis/lecture-list/subjectID=${subjectID}/`;
     fetch(url, {
        mode:'cors',
        method: "get",
      })
      
      .then((response) => response.json(), )
      .then((data) => 
      this.setState({ lectures: data, fetched:false },()=>{
      }      
        
       
        )
      )
    
 }
    render(){
    return (
        <>
            {/* {console.log(this.state)}
            {not {this.state.fetched} && 
           
           {this.fetchLectures() }} */}
           {/* Comment this line */}
            {/* {this.state.fetched && this.fetchLectures() } */}
                 <Table striped bordered hover>
  <thead>
  <tr>
      <td colSpan="1">#</td>
      <td colSpan="2">Topic</td>
      <td colSpan="1">Video</td>
    </tr>
  </thead>
      <tbody>
        {this.state.lectures.map((lecture)=>
          {
            //   console.log(lecture);
            return (
            <LecRow
            // key={lecture.lectureID}
            lectureNo = {lecture.lectureNo}
            lectureTopic = {lecture.lectureTopic}
            lectureVideo = {lecture.lectureVideo}
          />
        )})}
      </tbody>
</Table>
        </>
    )
}
}
export default ListOfLectures
