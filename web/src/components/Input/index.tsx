import React, { InputHTMLAttributes } from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FunctionComponent<InputProps> = (props, { ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} {...rest} />
        </div>
    );
}

export default Input;