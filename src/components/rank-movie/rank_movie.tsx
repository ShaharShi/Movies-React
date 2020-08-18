import React, { JSXElementConstructor } from "react";
import starIcon from "../../star_icon.svg";

interface IProps {
    stars: number
}

export default function RankMovie(props: IProps) {
    const numberOfStars = new Array(props.stars).fill(true, 0)

    return (<div>
        {numberOfStars.map(() => <img src={ starIcon } className={"rank-star"}></img>)}
    </div>)
}