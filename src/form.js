/*
One of the main form function of our App.
Interactivity feature:User is able to type in the players' information which will be recorded in our database.
*/
import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import _ from 'lodash';
import { CardBody } from './playerBoad.js';
import PlayerDetail from './playerDetail'
import { useParams } from 'react-router-dom'

const infoInput = {
  name: "",
  from: "",
  point: 0,
  assist: 0,
  rebound: 0,
  note: ""
}

export function PlayerForm() {
  console.log("player form inputs");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PlayerFormInput /></Route>
        <Route path="/Add:name"><NewPlayer /></Route>
        <Route path="/:name"><NewNote /></Route>
      </Switch>
    </BrowserRouter>
  )
}

function PlayerFormInput() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [ppg, setPpg] = useState(0);
  const [apg, setApg] = useState(0);
  const [rpg, setRpg] = useState(0);
  const [note, setNote] = useState("");

  const [redirectTo, setRedirectTo] = useState(false);

  const handleClick = (event) => {
    infoInput.name = name;
    infoInput.from = school;
    infoInput.point = ppg;
    infoInput.assist = apg;
    infoInput.rebound = rpg;
    infoInput.note = note;

    event.preventDefault();
    setRedirectTo(true);
  }

  return (
    <form>
      <div className="form-group">
        <label>Add Player</label>
        <input className="form-control" placeholder="Enter name here..." name="playername" onChange={event => setName(event.target.value)} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
      </div>
      <div className="form-group">
        <label>School</label>
        <input className="form-control" placeholder="Enter school here..." name="playerschool" onChange={event => setSchool(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Points</label>
        <input className="form-control" placeholder="Enter points here..." name="ppg" onChange={event => setPpg(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Assists</label>
        <input className="form-control" placeholder="Enter assists here..." name="apg" onChange={event => setApg(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Rebounds</label>
        <input className="form-control" placeholder="Enter rebounds here..." name="rpg" onChange={event => setRpg(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Note</label>
        <input className="form-control" placeholder="Enter note here..." name="playernote" onChange={event => setNote(event.target.value)} />
      </div>
      <button name="submitBtn" type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
      { redirectTo && <Redirect push to={"/Add" + name} />}
    </form>
  )
}

function NewPlayer() {
  let nameInput = useParams();
  const [redirectTo, setRedirectTo] = useState(undefined);

  const handleClick = () => {
    setRedirectTo(true);
  }

  if (infoInput.name === nameInput.name) {
    console.log(infoInput);
    return (
      <div>
        <NewCard player={infoInput}/>
        <button className="btn btn-info" onClick={handleClick}>New</button>
        { redirectTo !== undefined && <Redirect to={"/"} /> }
      </div>
    )
  } else {
    return (
      <div>
        <p>Fail to submit!</p>
        <button className="btn btn-info" onClick={handleClick}>New</button>
        { redirectTo !== undefined && <Redirect to={redirectTo} />}
      </div>

    )
  }
}

function NewCard (props) {
  let player = props.player;
  const [redirectTo, setRedirectTo] = useState(undefined);

    const handleClick = () => {
        setRedirectTo(player.name);
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="mb-2">
                        <h4 className="card-title">{player.name}</h4>
                        <h5 className="card-subtitle text-muted">From: <p>{player.from}</p></h5>
                    </div>
                    <button className="btn btn-info mb-2" onClick={handleClick}>Note</button>
                    {
                        redirectTo !== undefined && <Redirect to={redirectTo}/>
                    }
                </div>
                <div className="card-footer">
                    <p className="card-text">
                        Player Statistics:
                        <br />
                        Points: {player.point}
                        <br />
                        Assists: {player.assist}
                        <br />
                        Rebounds: {player.rebound}
                    </p>
                </div>
            </div>
        </div>
    );
}

function NewNote() {
  let nameInput = useParams();
  const [redirectTo, setRedirectTo] = useState(undefined);

  const handleClick = () => {
    setRedirectTo(true);
  }

  if (infoInput.name === nameInput.name) {
    return (
      <div>
        <p>{infoInput.note}</p>
        <button className="btn btn-info" onClick={handleClick}>Go Back</button>
        { redirectTo !== undefined && <Redirect to={"/"} /> }
      </div>
    )
  } else {
    return (
      <p>Fail to load notes.</p>
    )
  }
}