import React from 'react';
import './ImagePopup.css';

const ImagePopup = (props) => {

    const handleClose = () => {
        props.isClose(false);
    }

    return (
        <div className={`popup popup_type_${ props.inputName } ${props.isOpen ? 'popup_opened': ''}`} >
            <div className={'popup__gallery'} >
                <img className={'popup__image'} src={props.link} alt={props.name} />
                <p className={'popup__zoom-paragraph'}>{props.description}</p>
                <button className={'popup__close'} type='button' onClick={(event) => handleClose()}></button>
            </div>
        </div>
    );
};

export default ImagePopup;