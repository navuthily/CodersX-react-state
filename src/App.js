import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
         <div class="box">
          <div class="container-1">
            <input type="search" id="search" placeholder="Search..." />
            <button class="icon"><i class="fa fa-search"></i></button>
          </div>
        </div>         
      </div>
    );
  }
}

export default App;