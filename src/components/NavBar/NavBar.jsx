import React, {useState} from 'react';
import './NavBar.css';
import {Link, Redirect} from "react-router-dom";

const NavBar = ({isAuth}) => {



    const [isOpen, setIsOpen] = useState(false);
    if (!isAuth) {
        return <Redirect to="/userdata"/>;
    }
    // } else {
    //     return <Redirect to="/" />;
    // }
    const openNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
        <div className="toggle">
            <button onClick={()=>openNavbar()} className='btn_menu'>Menu</button>
        </div>

        <div className={`menu ${isOpen && 'active' } `}>
            <ul>
                <li>
                    <button onClick={()=>openNavbar()} className='btn_menu '><Link to='/'>Главная</Link></button>
                </li>
                <li>
                    <button onClick={()=>openNavbar()} className='btn_menu navigate'><Link to='/posts'>История</Link></button>
                </li>
                <li>
                    <button onClick={()=>openNavbar()} className='btn_menu navigate'><Link to='/userdata'>Кабинет</Link></button>
                </li>
                <li>
                    <button onClick={()=>openNavbar()} className='btn_menu navigate'><Link to='/projects'>Проекты</Link></button>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default NavBar;