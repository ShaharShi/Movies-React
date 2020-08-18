import React from "react";
import MovieCard, { IMovie } from "../movie-card/movie_card";

interface IProps {
    movies: Array<IMovie>
    noDataMessage: string
}

export default function MovieList(props: IProps) {
    const { movies, noDataMessage = "No Movies Found ..."} = props;
    if (!movies.length) return <h1>{noDataMessage}</h1>
    return ( 
    <div className={"cards-wrapper"}>
        {movies.map((movie) => { return <MovieCard {...movie}/> })}
    </div>
    )
}
