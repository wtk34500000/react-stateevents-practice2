import React, { Component } from "react";

class BeyCard extends React.Component {
  state ={
    favorite: false
  }

  handleClick =()=>{
    this.setState({
      favorite: !this.state.favorite
    })
  }

  render() {
    return (
      // style={{display: this.state.favorite? ('favrited'): ""}}
      <div >
        <h3>{this.props.beyObj.name}</h3>
        <img onClick={this.handleClick} src={this.props.beyObj.img} />
      </div>
    );
  }
}

export default BeyCard;
