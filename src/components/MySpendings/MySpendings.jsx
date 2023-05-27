import React from 'react';
import './MySpendings.css';
import MyButton from "../../uiKit/MyButton/MyButton";

const MySpendings = (props) => {

    const openPopupIncrement = (e) => {
        props.isClose(true);
    }

    const closePopupDecrement = (e) => {
        props.isCloseIncome(true);
    }

    return (
        // <div>
        //     <MyButton style='btn__decrement' title='Расход' />
        //     <MyButton style='btn__increment' title='Доход' />
        // </div>
        <div className="container">
            <div className="btn">
                <button onClick={openPopupIncrement}>Расходы</button>
            </div>
            {/*<div className="btn"><a href="#">Read more 2</a></div>*/}
            <div className="btn">
                <button onClick={closePopupDecrement}>Доходы</button>
            </div>
        </div>
    );
};

export default MySpendings;