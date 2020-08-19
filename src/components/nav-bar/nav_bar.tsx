import React from 'react';
import MovieCard from '../movie-card/movie_card';

interface IProps {
    clearMovies: any
    addMovie: any
}
export default function GetNavbar(props: IProps) {
    return (
        <div className={"navbar-wrap bg-light"}>
            <button className={"btn btn-primary view-btn"} onClick={props.clearMovies}>Clear Movies</button>
            <button className={"btn btn-success view-btn"} onClick={props.addMovie}>Add Movie</button>
        </div>
    )
}
