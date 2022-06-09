import React from "react";

function About(props, {image = "https://via.placeholder.com/215"}){
    if(!props.image){
        return (
            <aside>
                <img src={image} alt="blog logo"/>
                <p>{props.about}</p>
            </aside>
    )} else {
        return(
            <aside>
                <img src={props.image} alt="blog logo"/>
                <p>{props.about}</p>
            </aside>
        );
    }
}

export default About;