import React from "react";
import "../../styles/global.css"
import "../../styles/TopNav.css"

export interface ITopNavProp {
    label: string;
}

const TopNav = (props:ITopNavProp) => {

    return (
        <nav>
            <h1>{props.label}</h1>
        </nav>
    )
}

export default TopNav