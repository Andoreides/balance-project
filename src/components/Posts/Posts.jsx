import React, {useState} from 'react';
import './Posts.css';
import {useSelector} from "react-redux";

const Posts = (props) => {


    const postsList = props.post.map((item) => {
        return(
            <div className='post__div'>
                <h3 className='post__h3' >{item.type}:</h3>
                <p className='post__p' ><strong>Сумма</strong>: {item.sum}</p>
                <p className='post__p' ><strong>Категория</strong>: {item.category}</p>
            </div>
        )
    });

    return (
        <>
            {postsList.length === 0 ? (<div className='error'>
                <div className="error a01">Пока</div>
                <div className="error a02">нет</div>
                <div className="error a03">расходов</div>
                <div className="error a04">или</div>
                <div className="error a05">доходов</div>
                <div className="error a06">!!!</div>
            </div>) : postsList}
        </>
    );
};

export default Posts;

// <div className="error a01">Пока нет расходов или доходов</div>
// <div className="error a02">Пока нет расходов или доходов</div>
// <div className="error a03">Пока нет расходов или доходов</div>
// <div className="error a04">Пока нет расходов или доходов</div>
// <div className="error a05">Пока нет расходов или доходов</div>
// <div className="error a06">Пока нет расходов или доходов</div>