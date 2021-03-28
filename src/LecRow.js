import {React, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

export default class LecRow extends Component {
    render(){
    return (
        <>
    <tr>
        {console.log(this.props)}
      <td>{this.props.lectureNo}</td>
      <td colSpan="2">{this.props.lectureTopic}</td>
      <td>{this.props.lectureVideo}</td>
    </tr>
    </>  
    )
}
}
