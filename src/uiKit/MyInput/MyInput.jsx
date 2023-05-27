import './MyInput.css'
import React, {useState} from "react";

export const MyInput = (props) => {

    // const [inputValue, setInputValue] = useState('');
    const handleChange = (value) => {
        props.onChange(value);
    }

    return (
        <div>
        <input type={props.type}  className="MyInput" placeholder={props.placeholder} value={props.value} onChange={(e) => handleChange(e.target.value)}  />
        </div>
    )
}