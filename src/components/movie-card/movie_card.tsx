import React, { useState } from "react";
import RankMovie from "../rank-movie/rank_movie";
import Likes from "../likes/likes";
import styles from './style.module.css';

export interface IMovie {
    title: string,
    year: string,
    type: string,
    poster: string,
    rank: number,
    imdbID: string,
    baseAdditionalInfoUrl: string,
}

export default function MovieCard(props: IMovie): any {
    const { title, year, type, poster, rank, imdbID, baseAdditionalInfoUrl } = props;
    const showLink = isValidUrl(baseAdditionalInfoUrl);

    const [bgColor, setColor] = useState('bgInit')

    function changeBackground() {
        setColor(bgColor === 'bgInit' ? 'bgYellow' : 'bgInit')
    }
    function removeCard(event: any): any {
        event.target.parentNode.remove()
        console.log(event)
    }

    return (
    <div className={`card card-item text-center ${styles[bgColor]}`}>
        <button className={"card-remove"} onClick={removeCard}>X</button>
        <img src={ poster } className={"card-poster"}/>
        <div className={"card-header"}>
            <h5>{ title }</h5>
        </div>
        <div><RankMovie stars={ rank }/></div>
        <div className={"card-details"}>
            <div><b>Year :</b> {year} <br/> <b>Type :</b> {type}</div>
            <Likes/>
        </div>
        {showLink && <a href={`${baseAdditionalInfoUrl}/${imdbID}`} target={"_blank"} className={"links"} >To Movie Page in IMDB <i className="fa fa-external-link fa-lg"></i></a>}
        <button className={"btn btn-warning"} onClick={changeBackground}>Select Movie</button>
    </div>
    )
}

function isValidUrl(url: string): boolean {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(url)
}