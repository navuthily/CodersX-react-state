import React, { Component } from 'react';

class SearchBox  extends Component {
  render() {
    return (
     
     
            <input type="search" id="search" placeholder="Search..."         
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur} />
                
         
    );
  }
}

export default SearchBox ;