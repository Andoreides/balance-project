import React from 'react';
import './MyButton.css';
import '../../components/MySpendings/MySpendings.css';
const MyButton = (props) => {

    return (
        <div>
            <button className={props.style}  onClick={props.onClick}>{props.title}  </button>
        </div>
    );
};

export default MyButton;