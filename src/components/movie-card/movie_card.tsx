import React from "react";
import RankMovie from "../rank-movie/rank_movie";

export interface IMovie {
    title: string,
    year: string,
    type: string,
    poster: string,
    rank: number,
    imdbID: string,
    baseAdditionalInfoUrl: string,
}

export default function MovieCard(props: IMovie) {
    const { title, year, type, poster, rank, imdbID } = props;
    const showLink = isValidUrl(props.baseAdditionalInfoUrl)
    return (
    <div className={"card card-item text-center"}>
        <img src={ poster } className={"card-poster"}/>
        <div className={"card-header"}>
            <h5>{ title }</h5>
        </div>
        <div><RankMovie stars={ rank }/></div>
        <div className={"card-details"}>
            <div><b>Year :</b> {year} <br/> <b>Type :</b> {type}</div>
            <div>

            </div>
        </div>
        {showLink && <a href={`${props.baseAdditionalInfoUrl}/${imdbID}`} target={"_blank"} className={"links"} >To Movie Page in IMDB <i className="fa fa-external-link fa-lg"></i></a>}
    </div>
    )
}


function isValidUrl(url: string): boolean {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(url)
}