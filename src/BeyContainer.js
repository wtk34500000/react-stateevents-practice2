import React from "react";
import beyImages from "./beyImages";
import BeyCard from './BeyCard'


class BeyContainer extends React.Component {
  state = {
    beyImages: beyImages
  };
  render() {
    const arrayOfBeyCard=this.state.beyImages.map(img => <BeyCard key={img.id} beyObj={img}/>)
    return (
      <div className="index">
        <h1>Index</h1>
        {arrayOfBeyCard}
      </div>
    );
  }
}

export default BeyContainer;
