import React, { Component } from "react";
import "./App.css";
import beyImages from "./beyImages";
import BeyContainer from './BeyContainer'
import BeyCard from './BeyCard'

import Favorites from './Favorites'


class App extends Component {

  state = {
    beyImages: beyImages
  };

  onHandleClick=(index)=>{
    let newArr = [...this.state.beyImages]
    newArr[index-1].favorite = true
    this.setState({
      beyImages: newArr
    })
  }

  onHandleFavClick=(index)=>{
    let newArr = [...this.state.beyImages]
    newArr[index-1].favorite = false
    this.setState({
      beyImages: newArr
    })
  }
  

  render() {
    const arrayOfBeyCard=this.state.beyImages.map((img) => <BeyCard key={img.id} beyObj={img} onHandleClick={this.onHandleClick}/>)
    const favBey = this.state.beyImages.filter((img)=>img.favorite===true)
    const favBeyCard=favBey.map((img) => <BeyCard key={img.id} beyObj={img} onHandleClick={this.onHandleFavClick}/>)
    
    return (
      <div className="container">
        <BeyContainer beyObj={arrayOfBeyCard} />
        <Favorites beyObj={favBeyCard}/>
      </div>
    );
  }
}

export default App;
