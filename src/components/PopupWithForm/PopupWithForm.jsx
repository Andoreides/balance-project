import React from 'react';
import MyButton from "../../uiKit/MyButton/MyButton";
import './PopupWithForm.css'

const PopupWithForm = (props) => {

        // console.log(props)
        // const saveButton = (e) => {
        //     e.preventDefault();
        //     props.isClose(false);
        // }

    return (
        <div className={`popup popup_type_${ props.inputName } ${props.isOpen ? 'popup_opened': ''}`}>
            <div className='popup__container'>
                <h3 className='popup__title'>{props.popupTitle}</h3>
                <form className='popup__form' onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__button popup__button-submit" >{props.submitText}</button>
                </form>
                <button className='popup__close' onClick={()=>props.isClose(false)}></button>
            </div>
        </div>
    );
};

export default PopupWithForm;