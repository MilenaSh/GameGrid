import React, { Component } from 'react';
import GamesData from '../data/grid-app-data.json';
class GamesList extends Component {
idWasClicked() {
    alert('Id wa clicked');
}

  render() {
    return (
      <div className="App">
      <h1>Hello there</h1>
      {
          GamesData.categories[0].games.map((gameDetail, index) => {
              return <h1 onClick={this.idWasClicked}>{gameDetail.id}</h1>
          })
      }
      </div>
    );
  }
}

export default GamesList;
