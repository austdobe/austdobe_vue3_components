import React from "react"
import "./TopNav.css"

export interface ITopNav {
    title?: string
}

const TopNav = (props: ITopNav) => {
    
    return (
        <nav>
            <div className="navbar">
                <h1 className="title">{props.title}</h1>
            </div>
        </nav>
    ) 
}

export default TopNav