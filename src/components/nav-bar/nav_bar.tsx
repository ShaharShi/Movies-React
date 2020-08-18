import React from 'react';

interface IProps {
    clearMovies: any
    addMovie: any
}
export default function GetNavbar(props: IProps) {
    return (
        <div className={"navbar-wrap bg-light"}>
            <button id={"cardsBtn"} className={"btn btn-primary view-btn"} onClick={props.clearMovies}>Clear Movies</button>
            <button id={"listBtn"} className={"btn btn-success view-btn"} onClick={props.addMovie}>Add Movie</button>
        </div>
    )
}
