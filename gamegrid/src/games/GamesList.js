import React, {Component} from 'react';
import GamesData from '../data/grid-app-data.json';
import {Row, Col, Image} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import LoaderImage from '../images/loader.gif';
import '../styles/Games.css';

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
    <div className="GamesList">
        <div className="Header">Category Title</div>
        <Row className>
            <Col lg={4} className={"mainGame"}>
                <Link className={"thumbnail"} to={`/game/${GamesData.categories[0].games[0].id}`}>
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
                                    <Link className={"thumbnail"} to={`/game/${gameDetail.id}`}>
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
    <div className="GameActive">
        <Row>
            <Col lg={10}>
                <div className="loader-wrapper">
                <Image  src={LoaderImage}/>
                </div>
            </Col>
            <Col lg={2}>
                <Image
                    src={GamesData.categories[0].games[`${match.params.gameDetailId}`].thumb}
                    fluid/>
                <div className="header">{GamesData.categories[0].games[`${match.params.gameDetailId}`].name}</div>
                <div className="description">{GamesData.categories[0].games[`${match.params.gameDetailId}`].description}</div>
            </Col>
        </Row>

    </div>
)

export default GamesList;
