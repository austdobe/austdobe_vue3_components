import React from "react";
import "../../styles/Card.css"

export interface ICardProp {
    bg?: string
    image?: string
    description: string
}

const Card = (props:ICardProp) => {
    const newDescription = props.description 
    console.log(newDescription.length)

    return (
        <div className={`card ${props.bg}`}>
            {props.image && 
            <div className="image_wrapper">
                <img className="image" src={props.image} />
            </div>
            }
            <div className="description">{props.description}</div>
        </div>
    )
}

export default Card