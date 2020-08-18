import React from 'react';

interface IProps {
    header: string

}

export default function GetHeader(props : IProps) {
    return (
        <div className={"jumbotron"}><h1>{props.header}</h1></div>
    )
}
