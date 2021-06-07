import React, { useState } from 'react';
import {CardBoard, CardList, CardBody} from './playerBoad.js';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { newPlayer } from './newPlayer';

export function PlayerForm() {
    return (
        <PlayerFormInput />
    )
}

function PlayerFormInput() {
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [ppg,setPpg]=useState(0);
    const [apg,setApg]=useState(0);
    const [rpg,setRpg]=useState(0);
    const [note,setNote]=useState("");

    const infoInput = {
      name: name,
        from: school,
        point: ppg,
        assist: apg,
        rebound: rpg,
        note: note
    }
    const [redirectTo, setRedirectTo] = useState(undefined);

    const handleClick = () => {
      infoInput.name = name;
      infoInput.from = school;
      infoInput.point = ppg;
      infoInput.assist = apg;
      infoInput.rebound = rpg;
      infoInput.note = note;
      console.log(infoInput);

      setRedirectTo('/:name');
    }


    return(
        <form>
          <h2>Submit Player</h2>
        <div className="form-group">
          <label>Add Player</label>
          <input className="form-control" placeholder="Enter name here..." name="playername" onChange={event =>setName(event.target.value)}/>        </div>
        <div className="form-group">
          <label>School</label>
          <input className="form-control" placeholder="Enter school here..." name="playerschool" onChange={event =>setSchool(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Points</label>
          <input className="form-control" placeholder="Enter points here..." name="ppg" onChange={event =>setPpg(event.target.value)}/>
        </div>
        <div className="form-group">
          <label>Assists</label>
          <input className="form-control" placeholder="Enter assists here..." name="apg" onChange={event =>setApg(event.target.value)}/>
        </div>
        <div className="form-group">
          <label>Rebounds</label>
          <input className="form-control" placeholder="Enter rebounds here..." name="rpg" onChange={event =>setRpg(event.target.value)}/>
        </div>
        <div className="form-group">
          <label>Note</label>
          <input className="form-control" placeholder="Enter note here..." name="playernote" onChange={event =>setNote(event.target.value)}/>
        </div>
        <button name="submitBtn" type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
          { redirectTo !== undefined &&
            <BrowserRouter>
              <Switch>
                <Redirect to={redirectTo}><newPlayer player={infoInput} /></Redirect>
              </Switch>
            </BrowserRouter>}
      </form>
    )
}