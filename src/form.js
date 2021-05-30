import React, { useState } from 'react';
import {CardBoard, CardList, CardBody} from './playerBoad.js';

export function PlayerForm() {
    console.log("whats uppppppp")
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

    const handleClick = () => {
      infoInput.name = name;
      infoInput.from = school;
      infoInput.point = ppg;
      infoInput.assist = apg;
      infoInput.rebound = rpg;
      infoInput.note = note;

      return (
        <CardList player={infoInput} />
      )
    }
    

    return(
        <form>
        <div className="form-group">
          <label>Add Player</label>
          <input className="form-control" placeholder="Enter name here..." name="playername" onChange={event =>setName(event.target.value)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
        </div>
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
      </form>
    )
}