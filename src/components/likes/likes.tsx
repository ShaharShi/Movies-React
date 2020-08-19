import React, { useState } from 'react';
import { HandThumbsDown , HandThumbsUp } from 'react-bootstrap-icons';



export default function Likes() {
    const [count, setLikes] = useState(0)

    function increaseLikes() {
        setLikes(count + 1)
    }
    function decreaseLikes() {
        setLikes(count -1)
    }
    return (
        <div className={"d-flex flex-column"}>
            <HandThumbsUp className={"thumbs-up text-success"} onClick={increaseLikes}/>
            <p className={"m-0"}>{ count }</p>
            <HandThumbsDown className={"thumbs-down text-danger"} onClick={decreaseLikes}/>
        </div>
    )
} 