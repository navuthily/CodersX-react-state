import React, { Component } from 'react';

class SearchBox  extends Component {
  render() {
    return (
            <input  pattern="[a-z]{1,15}" 
            type="search" id="search" placeholder="Search..."  
              value
              onKeyUp={this.props.handleKeyUp}      
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
              className={this.props.className} />
    );
  }
}

export default SearchBox ;