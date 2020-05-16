import React, { Component } from "react";
import './App.css'
import SearchBox from "../src/components/SearchBox ";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, Button} from 'react-bootstrap'
import "font-awesome/css/font-awesome.min.css";
class App extends Component {
  // constructor(){
  //   super()
  //   this.state={
  //     show:false
  //   }
  // }
  state = {
    focus: false,
    limit:false,
    show: false
  };
  handleInputFocus = () => {
    this.setState({ focus: true });
  };
  handleInputBlur = () => {
    this.setState({ focus: false });
  };

  handleInputSearch = (e) => {
    if((e.target.value.length >= 10)||(e.target.value.substring(0, 3)!=="090")||(isNaN(e.target.value) )){
      this.setState({limit:true})
    }
  
    else{
      this.setState({limit:false})
    }
  };
  
  handleModal=()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    return (
<div>
    <div className="ss_header">
         <div class="box">
          <div class="container-1">
          <SearchBox
          // onFocus={this.handleInputFocus, this.handleInputSearch}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputSearch}
           className= {this.state.limit ? 'border-red' :''}
          />
         {this.state.focus ? <button class="icon"><i class="fa fa-search"></i></button> : null}  
        </div>
       </div>
    </div>
  <Button onClick={this.handleModal}>open modal</Button>
  <Modal show={this.state.show}>
     <Modal.Header>Header</Modal.Header>
     <Modal.Body>Body</Modal.Body>
     <Modal.Footer>
       <Button onClick={this.handleModal}>close modal</Button>
     </Modal.Footer>
  </Modal>

</div>
    );
  }
}

export default App;
