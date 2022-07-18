import React from "react";

interface IButtonProp {
    label: string;
}

const Button = (props:IButtonProp) => {
    return <button>{props.label}</button>
}

export default Button