import React from 'react';
import {MyInput} from "../../uiKit/MyInput/MyInput";
import MyButton from "../../uiKit/MyButton/MyButton";
import './Balance.css';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_BALANCE, CHANGE_INPUT_BALANCE} from "../store/reducers";

const Balance = (props) => {
    const {balance, inputBalance, inputSpending, inputIncome, inputCategorySpends, inputCategoryIncome} = useSelector((store) => store.AppState)
    const dispatch = useDispatch();

    const createBalance = () => {
        if (inputBalance) {
            // setMainBalance(inputBalance);
            // setInputBalance('');
            dispatch({type: CHANGE_BALANCE, payload: inputBalance})
        }
    }
    const openPopupIncrement = (e) => {
        props.isClose(true);
    }

    const closePopupDecrement = (e) => {
        props.isCloseIncome(true);
    }

    return (
        <>
        <div className='balance__div'>
            <h2>Баланс:</h2>
            <span className='balance__span a01'>{balance}</span>
            <MyInput  value={inputBalance} onChange={(value)=>dispatch({payload: value, type: CHANGE_INPUT_BALANCE})} type='number' placeholder='    Изменить...'/>
            <MyButton onClick={() =>createBalance(balance)} title='Подтвердить' style='MyButton'/>
        </div>

            <div className="container">
                <div className="btn">
                    <button onClick={openPopupIncrement}>Расходы</button>
                </div>
                {/*<div className="btn"><a href="#">Read more 2</a></div>*/}
                <div className="btn">
                    <button onClick={closePopupDecrement}>Доходы</button>
                </div>
            </div>
        </>
    );
};

export default Balance;