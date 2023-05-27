import React, {useState} from 'react';
import './MyProjects.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import ImagePopup from "../ImagePopup/ImagePopup";
import MyButton from "../../uiKit/MyButton/MyButton";

const MyProjects = (props) => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [paragraphValue, setParagraphValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    // const openPopUp = () => {
    //     setPopupOpen(true)
    //
    // }

    const openMesto = () => {
        setPopupOpen(true)
        setImageValue('https://avatars.githubusercontent.com/u/102199209?v=4');

        setParagraphValue('Этот проект создан для тех, кто любит путешествовать, ' +
            'фиксировать лучшие моменты на камеру и делиться ими со всем миром. ' +
            'Были использованы различные техники из веб-разработки, такие как: ' +
            'flex, псевдоклассы и миксы в стилях, оживлен и способен отвечать на действия ' +
            'пользователей с помощью JavaScript, а так же проект полностью разложен по методологии БЭМ (файловая структура Nested).');
        setNameValue('Mesto');
    }

    const openMestoReact = () => {
        setPopupOpen(true);
        setImageValue('https://avatars.githubusercontent.com/u/102199209?v=4');
        setParagraphValue('Этот проект создан для тех, кто любит путешествовать, ' +
            'фиксировать лучшие моменты на камеру и делиться ими со всем миром. ' +
            'Были использованы различные техники из веб-разработки, такие как:' +
            ' flex, псевдоклассы и миксы в стилях, оживлен и способен отвечать на действия ' +
            'пользователей с помощью React, а так же проект полностью разложен по методологии БЭМ (файловая структура Nested).');
    }

    const openTravel = () => {
        setPopupOpen(true);
        setImageValue('https://avatars.githubusercontent.com/u/102199209?v=4');
        setParagraphValue('Одностраничный сайт о путешствие по России.\n' +
            '\n' +
            'Использованы такие новые технологии такие как: Грид-верстка\n' +
            '\n' +
            'Данный сайт планируется дорабатываться. Планиурется видео больше анимаций, при помощи такие команд как skew, shadow' +
            ', для выделения некоторых частей. А также планируется ввести поля с тегом input, чтоб с сайтом можно было взаимодествовать')
    }

    const openHowLearn = () => {
        setPopupOpen(true);
        setImageValue('https://avatars.githubusercontent.com/u/102199209?v=4');
        setParagraphValue('Regular site\n' +
            '\n' +
            'It\'s just a one page website. Virtually non-interactive. There is a transition to a video on YouTube using an iframe\n' +
            '\n' +
            'Данный сайт планируется дорабатываться. Планиурется видео больше анимаций, при помощи такие команд как skew, shadow, для' +
            ' выделения некоторых частей. А также планируется ввести поля с тегом input, чтоб с сайтом можно было взаимодествовать')
    }

    const openTodoReact = () => {
        setPopupOpen(true);
        setImageValue('https://avatars.githubusercontent.com/u/102199209?v=4');
        setParagraphValue('ToDo List – программа для создания списков и отметки выполненных пунктов. Такие программы ' +
            'часто применяются как списки дел или покупок. Зачастую подобные программы имеют веб-версию и мобильное приложение, ' +
            'а синхронизируются они благодаря бэкенду, который хранит списки каждого пользователя в своей базе данных. ')
    }

    return (
        <div>
            <h3>Мои проекты:</h3>
        <div className='projects'>
            <div className='projects__container'>
                <h5 className={'projects__title'}>Место</h5>
                <button className={'projects__description'} onClick={(event) =>openMesto()} >Подробнее...</button>
                <a href='https://andoreides.github.io/mesto/'>
                    <img className='projects__img' src={'https://avatars.githubusercontent.com/u/102199209?v=4'} />
                </a>
            </div>
            <div className='projects__container'>
                <h5 className={'projects__title'}>Место Реакт</h5>
                <button className={'projects__description'} onClick={(e)=>openMestoReact()}>Подробнее...</button>
                <a href='#'>
                    <img className='projects__img' src={'https://avatars.githubusercontent.com/u/102199209?v=4'} />
                </a>
            </div>
            <div className='projects__container'>
                <h5 className={'projects__title'}>Travel</h5>
                <button className={'projects__description'} onClick={(e)=>openTravel()} >Подробнее...</button>
                <a href='https://andoreides.github.io/russian-travel/'>
                    <img className='projects__img' src={'https://avatars.githubusercontent.com/u/102199209?v=4'} />
                </a>
            </div>
            <div className='projects__container'>
                <h5 className={'projects__title'}>How to learn</h5>
                <button className={'projects__description'} onClick={(event) =>openHowLearn() } >Подробнее...</button>
                <a href='https://github.com/Andoreides/how-to-learn.git'>
                    <img className='projects__img' src={'https://avatars.githubusercontent.com/u/102199209?v=4'} />
                </a>
            </div>
            <div className='projects__container'>
                <h5 className={'projects__title'}>Todo React</h5>
                <button className={'projects__description'} onClick={(e) => openTodoReact()} >Подробнее...</button>
                <a href='#'>
                    <img className='projects__img' src={'https://avatars.githubusercontent.com/u/102199209?v=4'} />
                </a>
            </div>
        </div>
            <div className={'projects__div-offer'}><a href={'https://t.me/unknownhzhz'} className={'projects__offer'}>Написать автору с офером:)</a></div>
            <ImagePopup
                inputName='projects'
                name={nameValue}
                isOpen={isPopupOpen}
                isClose={setPopupOpen}
                description={paragraphValue}
                link={imageValue}
                // submitText='Сохранить'
                // onSubmit={createPost}
            >
                {/*<p >{paragraphValue}</p>*/}
                {/*<img src={imageValue} alt={nameValue} />*/}

            </ImagePopup>
        </div>
    );
};

export default MyProjects;