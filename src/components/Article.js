import React from "react";

function Article(props, {date = "January 1, 1970"}){
    if(!props.date){
        return (
            <article>
                <h3>{props.title}</h3>
                <small>{date}</small>
                <p>{props.preview}</p>
            </article>
        )
    } else {
        return (
            <article>
                <h3>{props.title}</h3>
                <small>{props.date}</small>
                <p>{props.preview}</p>
            </article>
        )
    }
}

export default Article;