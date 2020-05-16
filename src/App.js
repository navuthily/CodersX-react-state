import React, { Component } from "react";
import './App.css'
import SearchBox from "../src/components/SearchBox ";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
class App extends Component {
  state = {
    focus: false,
    limit:false
  };
  handleInputFocus = () => {
    this.setState({ focus: true });
  };
  handleInputBlur = () => {
    this.setState({ focus: false });
  };

  handleInputSearch = () => {

     this.setState({limit:true})
  };
  
  render() {
    return (
      <div className="ss_header">
         <div class="box">
          <div class="container-1">
          <SearchBox
          // onFocus={this.handleInputFocus, this.handleInputSearch}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onKeyUp={this.handleInputSearch}
           className= {this.state.limit ? 'border-red' :''}
          />
         {this.state.focus ? <button class="icon"><i class="fa fa-search"></i></button> : null}  
       </div>
       </div>
      </div>
    );
  }
}

export default App;
