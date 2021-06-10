/*
    The load of note data for given player information stored in the database.
*/

import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { database } from './firebase.js';
import { useParams } from 'react-router';
import { Redirect} from 'react-router-dom';



function DetailPage() {
    const [data, setData] = useState(undefined);
    const [redirectTo, setRedirectTo] = useState(undefined);
    let name = useParams();
    const [note, setNote] = useState(undefined);
    useEffect(() => {
        getData(setData, name);
    }, [])
    const handleClick = () => {
        setRedirectTo("/");
    }
    useEffect(() => {
        if (data) {
            setNote(data);
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

async function getData(setData, name) {
    console.log(name.name);
    const dbRef = database.ref();
    dbRef.child("notes").child(name.name).get().then((snapshot) => {
        if (snapshot.exists()) {
            setData(snapshot.val())
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    // fetch('http://test449.site44.com/playerNote.json')
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         setData(data)
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });

}

export default DetailPage;