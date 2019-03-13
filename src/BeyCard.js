import React, { Component } from "react";

class BeyCard extends React.Component {


  handleClick =()=>{
    this.props.onHandleClick(this.props.beyObj.id)
  }

  render() {
    return (
      <div >
        <h3>{this.props.beyObj.name}</h3>
        <img onClick={this.handleClick} src={this.props.beyObj.img} />
      </div>
    );
  }
}

export default BeyCard;
