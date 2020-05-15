import React, { Component } from 'react';

class SearchBox  extends Component {
  render() {
    return (
        <div class="box">
          <div class="container-1">
            <input type="search" id="search" placeholder="Search..."         
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur} />
          </div>
        </div>          
    );
  }
}

export default SearchBox ;