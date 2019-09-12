import React, {Component} from 'react';
import GamesData from '../data/grid-app-data.json';
import {Row, Col, Image} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class GamesList extends Component {

    render() {
        return (
            <Router>
                <Route path="/game/:gameDetailId" component={GameActive}/>
                <Route exact={true} path="/" component={GameGridHome}/>
            </Router>
        );
    }
}

const GameGridHome = ({match}) => (
    <div className="App">
        <h1>Category Title</h1>
        <Row>
            <Col lg={4} className={"mainGame"}>
                <Link to={`/game/${GamesData.categories[0].games[0].id}`}>
                    <div className="menu-item-wrapper">
                        <Image src={GamesData.categories[0].games[0].thumb} fluid/>
                        <div>{GamesData.categories[0].games[0].name}</div>
                    </div>
                </Link>
            </Col>
            <Col lg={8}>
                <Row>
                    {GamesData
                        .categories[0]
                        .games
                        .map((gameDetail, index) => {
                            if (index !== 0) {
                                return <Col lg={4}>
                                    <Link to={`/game/${gameDetail.id}`}>
                                        <div className="menu-item-wrapper">
                                            <Image src={gameDetail.thumb} fluid/>
                                            <div>{gameDetail.name}</div>
                                        </div>
                                    </Link>
                                </Col>
                            }
                        })
}
                </Row>
            </Col>
        </Row>
    </div>
)

const GameActive = ({match}) => (
    <div className="game-active">
        <Row>
            <Col lg={10}></Col>
            <Col lg={2}>
                <Image
                    src={GamesData.categories[0].games[`${match.params.gameDetailId}`].thumb}
                    fluid/>
                <div>{GamesData.categories[0].games[`${match.params.gameDetailId}`].name}</div>
                <div>{GamesData.categories[0].games[`${match.params.gameDetailId}`].description}</div>
            </Col>
        </Row>

    </div>
)

export default GamesList;
