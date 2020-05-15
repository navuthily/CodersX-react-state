import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import  SearchBox from './components/SearchBox';
class App extends Component {

  state = {
    focus: false
  };

  handleInputFocus = () => {
    this.setState({ focus: true });
  };

  handleInputBlur = () => {
    this.setState({ focus: false });
  };
  render() {
    return (
    <div>
     <div>
        <SearchBox
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
        />
        {this.state.focus ? <button class="icon"><i class="fa fa-search"></i></button> : null}          
      </div>  
    </div>
    );
  }
}

export default App;