import React, { Component } from 'react';
import GamesData from '../data/grid-app-data.json';
import {Row, Col, Image} from 'react-bootstrap';

class GamesList extends Component {
idWasClicked() {
    alert('Id wa clicked');
}

  render() {
    return (
      <div className="App">
      <h1>Category Title</h1>
  <Row>
    <Col lg={4} className={"mainGame"}>
    <Image src={GamesData.categories[0].games[0].thumb} fluid />
    <div> {GamesData.categories[0].games[0].name}</div> 
   </Col>
    <Col lg={8} >
        <Row>
              {
                  GamesData.categories[0].games.map((gameDetail, index) => {
                    if(index !== 0) {                    
                      return <Col lg={4} >
                        <Image src={gameDetail.thumb} fluid />
                       <div>{gameDetail.name}</div> 
                      </Col>
                    }
                  })
              }           
        </Row>
    </Col>
  </Row>

      </div>
    );
  }
}

export default GamesList;
