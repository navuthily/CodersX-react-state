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

  handleInputSearch = (e) => {
    if((e.target.value.length >= 10)||(e.target.value.substring(0, 3)!=="090")||(isNaN(e.target.value) )){
      this.setState({limit:true})
    }
  
    else{
      this.setState({limit:false})
    }
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
          onChange={this.handleInputSearch}
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
