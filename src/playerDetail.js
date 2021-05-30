import { React, useEffect, useState } from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import _ from 'lodash';
import { useParams } from 'react-router';


function DetailPage(props) {
    const [data, setData] = useState(undefined)
    let name = props.name;
    let note = undefined;
    useEffect(() => {
        getData(setData)
        for (let i = 0; i < data.notes.length; i++) {
            if (name === data.notes[i].name) {
                note = data.notes[i].note;
            }
        }
    }, [])
    return <p>{note}</p>;
}

async function getData(setData) {
    fetch('http://test449.site44.com/playerNote.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(JSON.stringify(data))
        })
        .catch(function(err) {
            console.log(err);
        });

}

export default DetailPage;