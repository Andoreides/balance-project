import React, {useState} from 'react';
import {MyInput} from "../../uiKit/MyInput/MyInput";
import MyButton from "../../uiKit/MyButton/MyButton";
import './UserData.css';

const UserData = ({setAuth, isAuth}) => {

    const [inputUserLogin, setInputUserLogin] = useState('');
    const [inputUserPassword, setInputUserPassword] = useState('');

    const handleClickUserBtn = () => {
        setInputUserLogin('')
        setInputUserPassword('')
        setAuth(!isAuth)
    }

    return (
         <div className='userdata__div'>
            <a href='https://github.com/Andoreides' className='userdata__a' >
                <img src='https://avatars.githubusercontent.com/u/102199209?v=4' className='userdata__img' alt='Логотип' />
            </a>
            <h3 className='userdata__h3'>Вход в личный кабинет</h3>
            <MyInput placeholder='Логин' onChange={setInputUserLogin} value={inputUserLogin} />
            <MyInput placeholder='Пароль' onChange={setInputUserPassword} value={inputUserPassword} />
            {/*<MyButton title='Войти' style='MyButton' />*/}
            <button className='userdata__btn' onClick={handleClickUserBtn}>Войти</button>
             <p>Чтобы зайти пока просто нажмите кнопку "Войти". Дисклеймер - сайт еще много где не доработан</p>
        </div>
    );
};

export default UserData;