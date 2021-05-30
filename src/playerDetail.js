import { React, useState } from 'react';
import fetch from './fetch';
import { UncontrolledCarousel, Button } from 'reactstrap';
import _ from 'lodash';
import { useParams } from 'react-router';


async function DetailPage(props) {
    const [data, setData] = useState(undefined)
    let name = props.name;
    setData(fetch);
    console.log(data);
    return <p>{data}</p>;
}

async function getData(setData) {
    let res = await fetch('http://test449.site44.com/playerNote.json')
    .then(function(response) {
        response.json().then(function(data) {
            setData(data.notes);
        });
    })
    .catch(function(err) {
        console.log(err);
    });

}

export default DetailPage;