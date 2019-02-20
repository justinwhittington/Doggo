import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Api from "../../utils/Api";
import DogCard from "../Discover/DogCard";
import Wrapper from "../Wrapper";

class Search extends Component {
  state = {
    result: null,
    search: ""
  };

  getBreed = query => {
    Api.getBreed(query)
      .then(res => {
        this.setState({ result: res.data.message });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBreed(this.state.search);
    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Wrapper>
          {this.state.result ? (
            this.state.result.map(dog => <DogCard key={dog} image={dog} />)
            
          ) : (
            <div> Search for a pupper </div>
          )}
        </Wrapper>
      </div>
    );
  }
}
export default Search;
