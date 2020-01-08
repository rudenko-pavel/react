import React from 'react';
import './Searchbar.scss';

class SearchBar extends React.Component {
  state = { term:''};

  onInputChange= (event) => {
    this.setState({term:event.target.value});
  }

  onFormSubmit = (event) =>{
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    console.log("SearchBar: ",this.state.term);
  }

    render() {
      return (
        <div className="ui segment search-bar">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image search: </label>
              <input  type="text" 
                      placeholder="Search..." 
                      value={this.state.term}
                      onChange={this.onInputChange} />
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SearchBar;