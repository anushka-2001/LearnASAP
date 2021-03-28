import axios from 'axios';
 
import React,{Component} from 'react';
 import {Button,Form,FormControl} from 'react-bootstrap';
class Upload extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
 
             
<p>File Type: {this.state.selectedFile.type}</p>
 
             
<p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            Choose before Pressing the Upload button
          </div>
        );
      }
    };
    
    render() {
    
      return (
          <div><div><h1>
          Upload Notes and Video
        </h1>
        <br/></div>
        <div style={{position:'relative', paddingInlineStart:"400px"}}>
            
            
            You can upload google slide's web hosted link
            <div><Form></Form></div>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <Button variant="warning" onClick={this.onFileUpload}>
                  Upload!
                </Button>
            </div>
          {this.fileData()}
        </div></div>
      );
    }
  }
 
  export default Upload;