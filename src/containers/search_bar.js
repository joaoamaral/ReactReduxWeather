import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: '' };
    // overriding local method to work with this (js)
    // If you're ever passing a callback around as a function like this and that callback // has a reference to this, you need to bing with the context
    // Error: I don't know what setState is
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({ term: event.target.value });

  }

  onFormSubmit(event){
    event.preventDefault(); // browser don't submit the form-control
    // We need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
