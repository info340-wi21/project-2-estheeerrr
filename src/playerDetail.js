import { React, useEffect, useState } from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import _ from 'lodash';
import { useParams } from 'react-router';
import { BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';



function DetailPage() {
    const [data, setData] = useState(undefined);
    const [redirectTo, setRedirectTo] = useState(undefined);
    let name = useParams();
    console.log(name);
    const [note, setNote] = useState(undefined);
    useEffect(() => {
        getData(setData);
    }, [])
    const handleClick = () => {
        setRedirectTo("/");
    }
    useEffect(() => {
        if (data) {
            console.log(data);
            for (let i = 0; i < data.notes.length; i++) {
                if (name.name === data.notes[i].name) {
                    setNote(data.notes[i].note);
                }
            }
        }
    }, [data]);
    return (
        <div>
            <p>{note}</p>
            <button className="btn btn-info" onClick={handleClick}>Back</button>
            {
                redirectTo !== undefined && <Redirect to={redirectTo}/>
            }
        </div>
    );
}

async function getData(setData) {
    fetch('http://test449.site44.com/playerNote.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
        })
        .catch(function(err) {
            console.log(err);
        });

}

export default DetailPage;