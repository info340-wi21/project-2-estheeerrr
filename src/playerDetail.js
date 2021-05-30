import { React, useState } from 'react';
import { UncontrolledCarousel, Button } from 'reactstrap';
import _ from 'lodash';
import { useParams } from 'react-router';


function DetailPage(props) {
    const [data, setData] = useState(undefined)
    let name = props.name;
    getInfo(name, setData);
    

    return <p>{data}</p>;
}

async function getInfo(name, callback) {
    console.log(222)
    fetch('./playerNote.json')
    .then(res => res.json())
    .then(function(data) {
        callback("11111");
        console.log(data)
    })
}

export default DetailPage;