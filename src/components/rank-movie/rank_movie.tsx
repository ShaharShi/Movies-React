import React, { JSXElementConstructor } from "react";
import { StarFill } from "react-bootstrap-icons";

interface IProps {
    stars: number
}

export default function RankMovie(props: IProps) {
    const numberOfStars = new Array(props.stars).fill(true, 0)

    return (<div>
        {numberOfStars.map(() =><StarFill className={"rank-star"}/>)}
    </div>)
}