import { React, useEffect, useState } from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import _ from 'lodash';
import { useParams } from 'react-router';


function DetailPage(props) {
    const [data, setData] = useState(undefined);
    let name = props.name;
    const [note, setNote] = useState(undefined);
    useEffect(() => {
        getData(setData);
    }, [])
    useEffect(() => {
        if (data) {
            console.log(data);
            for (let i = 0; i < data.notes.length; i++) {
                if (name === data.notes[i].name) {
                    setNote(data.notes[i].note);
                }
            }
        }
    }, [data]);
    return <p>{note}</p>;
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