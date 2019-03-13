import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'


class App extends Component {

  state = {
    beyImages: []
  };

  componentDidMount(){
    fetch(`http://localhost:3001/beys`)
    .then(resp => resp.json())
    .then(beyImages => {
      // console.log(beyImages)
      this.setState({
        beyImages: beyImages
      })
    })
  }

  render() {
    
    return (
      <div className="container">
        <BeyContainer beyObj={this.props.beyImages}/>
        <Favorites beyObj={this.props.beyImages}/>
      </div>
    );
  }
}

export default App;
