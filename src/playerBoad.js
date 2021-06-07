import React from 'react';
import { useState } from 'react';
import PlayerDetail from './playerDetail'
import { BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

export function CardBoard(props) {
    const [players, setPlayers] = useState(props.players);
    console.log("whats uppppppp")
    return(
        <div id="player-board">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"><CardList players={players}/></Route>
                    <Route path="/:name"><PlayerDetail /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export function CardBody(props) {
    const [redirectTo, setRedirectTo] = useState(undefined);

    const handleClick = () => {
        setRedirectTo(props.name);
    }
    console.log(props);
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <div>
                        <h4 className="card-title">{props.name}</h4>
                        <h5 className="card-subtitle mb-2 text-muted">From: {props.from}</h5>
                    </div>
                    <button className="btn btn-info" onClick={handleClick}>Note</button>
                    {
                        redirectTo !== undefined && <Redirect to={redirectTo}/>
                    }
                </div>
                <div className="card-footer">
                    <p className="card-text">
                        Player Statistics:
                        <br />
                        Points: {props.point}
                        <br />
                        Assists: {props.assist}
                        <br />
                        Rebounds: {props.rebound}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function CardList(props) {
    let items = props.players.map((item) => {
        return <CardBody key={item.name} name={item.name} from={item.from} point={item.point} assist={item.assist} rebound={item.rebound}/>
    });
    return (
        <div className="card-deck">
            <h2>Player Board</h2>
            <div className="row">
                {items}
            </div>
        </div>
    );
}