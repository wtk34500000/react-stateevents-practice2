import React from "react";
import beyImages from "./beyImages";
import BeyCard from './BeyCard'


class BeyContainer extends React.Component {

  render() {
    const arrayOfBeyCard=this.props.beyObj
    return (
      <div className="index">
        <h1>Index</h1>
        {arrayOfBeyCard}
      </div>
    );
  }
}

export default BeyContainer;
