import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
     
  state = {
    selectedFile : null
  }
  fileSelected = event =>{
  console.log (event.target.files[0])
     
  this.setState({
    
    selectedFile :event.target.files[0]
  })
  }
  uploadFile = () =>{
    const fd =new  FormData();
    let file = this.state.selectedFile
    let filename = this.state.selectedFile.name
    fd.append('image', file);
    fd.append('photo', filename);
    
    axios.post('/upload', fd
      
      
).then(function(res){
      console.log(res);
  }).catch(function (error) {
   
    console.log(error);
});

  
    // console.log ()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <input type="file"  onChange ={this.fileSelected} />
         <button onClick = {this.uploadFile}>upload</button>
        </header>
      </div>
    );
  }
}

export default App;
