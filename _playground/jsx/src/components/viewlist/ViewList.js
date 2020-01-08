import React from 'react';
import './ViewList.scss';

import unsplash from '../../api/unsplash';
import SearchBar from './Searchbar';
import ImageList from './ImageList';



class ViewList extends React.Component {
  state={ images: [], page:1, query:'' }

  onSearchSubmit = async(term) =>{
    console.log("ViewList: ",this.state.page,term);
    const response = await unsplash.get('/search/photos',{
        params: {query: term, page:1},

      });
      this.setState({images:response.data.results});
      this.setState({query:term,page:1});
    }

  plusTen = async() =>{
    console.log("plusTen",this.state.page, this.state.query);

    const response = await unsplash.get('/search/photos',{
      params: {query: this.state.query, page:this.state.page+1},

    });
    this.setState({images:this.state.images.concat(response.data.results), page:this.state.page+1});
  }

  render() {
    return (
      <div className="ViewList wrapper-component ui segment">
        <h3>Component `ViewList`</h3>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ui container">
          <ImageList images={this.state.images} /> 
        </div>
        <div className="ui container">
          <button className="ui violet button" onClick={this.plusTen}> +10 images</button>
        </div>
      </div>
    );
  }
};

export default ViewList;