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
                <Route exact={true} path="#" component={GameGridHome}/>
            </Router>
        );
    }
}

const GameGridHome = ({match}) => (
    <div className="GamesList">
        <div className="Header">Category Title</div>
        <Row className>
            <Col xl={4} lg={4} md={4} sm={4} xs={6} className={"mainGame"}>
                <Link className={"thumbnail"} to={`/game/${GamesData.categories[0].games[0].id}`}>
                    <div className="menu-item-wrapper">
                        <Image src={GamesData.categories[0].games[0].thumb} fluid/>
                        <div>{GamesData.categories[0].games[0].name}</div>
                    </div>
                </Link>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={6}>
                <Row>
                    {GamesData
                        .categories[0]
                        .games
                        .map((gameDetail, index) => {
                            if (index !== 0) {
                                return <Col xl={4} lg={4} md={4} sm={6} xs={12}>
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
            <Col xl={10} lg={10} md={9} sm={9} xs={12}>
                <div className="loader-wrapper">
                <Image  src={LoaderImage}/>
                </div>
            </Col>
            <Col xl={2} lg={2} md={3} sm={3} xs={12}>
                <Image
                     src={GamesData.categories[0].games[`${match.params.gameDetailId - 1}`].thumb}
                    fluid/>
                     <div className="header">{match.params.id}</div>
                <div className="header">{GamesData.categories[0].games[`${match.params.gameDetailId - 1}`].name}</div>
                <div className="description">{GamesData.categories[0].games[`${match.params.gameDetailId -1}`].description}</div>
            </Col>
        </Row>

    </div>
)

export default GamesList;
