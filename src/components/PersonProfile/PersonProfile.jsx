import React, {useState} from 'react';
import './PersonProfile.css';
import {useDispatch, useSelector} from "react-redux";
const PersonProfile = (props) => {
    const {yourName, yourSurname, avatarUrl} = useSelector((store) => store.ProfileState)
    const dispatch = useDispatch();

    const [nameProfile, setNameProfile] = useState('Anonymous')
    const [surnameProfile, setSurnameProfile] = useState('Anonymous')
    const handleClickUserBtn = () => {
        props.setAuth(false)
    }

    return (
        <div className='profile'>
            <h3 className="profile__title">Профиль пользователя</h3>

            <div className="profile__container">
                <div className='profile__kek'>
                    <p className="profile__name">{yourName}</p>
                    <p className="profile__surname">{yourSurname}</p>
                </div>
                {/*<img className="profile__image" src='https://github.com/Andoreides' />*/}
                <img src={avatarUrl} className='profile__image' alt='Логотип' />

            </div>
            <button onClick={(e) =>props.isCloseIncome(!props.isClose)} className='profile__button-submit' >Редактировать профиль</button>
            <button onClick={(e) =>handleClickUserBtn()} className='profile__button-submit' >Разлогиниться</button>
        </div>
    );
};

export default PersonProfile;