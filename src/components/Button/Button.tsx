import React from "react";
import "./Button.css"

interface IButtonProp {
    label: string;
}

const Button = (props:IButtonProp) => {
    return <button>{props.label}</button>
}

export default Button