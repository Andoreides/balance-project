import logo from './logo.svg';
import './App.css';
import {MyInput} from "./uiKit/MyInput/MyInput";
import React, {useState} from "react";
import MyButton from "./uiKit/MyButton/MyButton";
import MySpendings from "./components/MySpendings/MySpendings";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";

import Posts from "./components/Posts/Posts";
import {type} from "@testing-library/user-event/dist/type";
import {Route, Routes} from "react-router-dom";
import Balance from "./components/Balance/Balance";
import NavBar from "./components/NavBar/NavBar";
import UserData from "./components/UserData/UserData";
import {Switch, BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_BALANCE, CHANGE_INPUT_BALANCE} from "./components/store/reducers";
import balance from "./components/Balance/Balance";
import {CHANGE_POST} from "./components/store/reducerPosts";
import PersonProfile from "./components/PersonProfile/PersonProfile";
import {CHANGE_AVATAR_URL, CHANGE_YOUR_NAME, CHANGE_YOUR_SURNAME} from "./components/store/reducerProfile";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {
    const {post} = useSelector((store) => store.PostState)
    const {balance, } = useSelector((store) => store.AppState)
    const {yourName, yourSurname, avatarUrl} = useSelector((store) => store.ProfileState)

    const dispatch = useDispatch();


    // const [mainBalance, setMainBalance] = useState(1000);
    // const [inputBalance, setInputBalance] = useState('');
    const [isPopupIncrementOpen, setPopupIncrementOpen] = useState(false);
    const [isPopupDecrementOpen, setPopupDecrementOpen] = useState(false);
    const [isPopupUserOpen, setPopupUserOpen] = useState(false);
    const [inputSpendings, setInputSpendings] = useState('');
    const [inputIncome, setInputIncome] = useState('');
    const [inputCategorySpends, setInputCategorySpends] = useState('');
    const [inputCategoryIncome, setInputCategoryIncome] = useState('');
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [isAuth, setAuth] = useState(false);
    const [avatar, setAvatar] = useState('');
    // const [post, setPost] = useState([]);

    // const createBalance = () => {
    //     if (inputBalance) {
    //         setMainBalance(inputBalance);
    //         setInputBalance('');
    //         // dispatch({type: CHANGE_INPUT_BALANCE, action: })
    //     }
    // }




    const createPost = (e) => {
        e.preventDefault();
        const newPost = {type: 'Расход', sum: inputSpendings, category: inputCategorySpends}
        // setPost([...post, newPost])
        dispatch({type: CHANGE_POST, payload: newPost})
        setInputSpendings('');
        setInputCategorySpends('');
        setPopupIncrementOpen(false);
        // setMainBalance(mainBalance - inputSpendings);
        dispatch({type: CHANGE_BALANCE, payload: balance - inputSpendings});
    }
    console.log(post)

    const createPostIncome = (e) => {
        e.preventDefault();
        const newPost = {type: 'Доход', sum: inputIncome, category: inputCategoryIncome}
        // setPost([...post, newPost])
        dispatch({type: CHANGE_POST, payload: newPost})
        setInputIncome('');
        setInputCategoryIncome('');
        setPopupDecrementOpen(false);
        let newInputIncome = Number(inputIncome)
        // setMainBalance(mainBalance + newInputIncome);

        dispatch({type: CHANGE_BALANCE, payload: balance + newInputIncome});
    }

    const changeProfile = (e) => {
        e.preventDefault();
        dispatch({type: CHANGE_YOUR_NAME, payload: newName })
        dispatch({type: CHANGE_YOUR_SURNAME, payload: newSurname })
        dispatch({type: CHANGE_AVATAR_URL, payload: avatar})
        setPopupUserOpen(false);
        setNewName('');
        setNewSurname('');
    }

  return (
      <Router>
    <div className="App">
        <NavBar isAuth={isAuth} />

      <header className="App-header">
          <Switch>
            <>
                {!isAuth ? <Route path='/userdata' ><UserData setAuth={setAuth} isAuth={isAuth} /></Route> :
                <Route path='/userdata'>
                    <PersonProfile isClose={isPopupUserOpen} isCloseIncome={setPopupUserOpen} setAuth={setAuth} isAuth={isAuth} />
                </Route>}

              <Route exact path='/posts' >
                    <Posts createPost={createPost} createPostIncome={createPostIncome} post={post} />
                </Route>
                <Route exact path='/projects'>
                    <MyProjects  />
                </Route>
                {/*<Route path='/userdata' >*/}
                {/*    <UserData setAuth={setAuth} isAuth={isAuth} />*/}
                {/*</Route>*/}
                <Route exact path='/'>
                    <Balance  isClose={setPopupIncrementOpen} isCloseIncome={setPopupDecrementOpen} />
                </Route>
          </>
          </Switch>

          <PopupWithForm
            inputName='increment'
            popupTitle='Учет расхода'
            isOpen={isPopupIncrementOpen}
            isClose={setPopupIncrementOpen}
            submitText='Сохранить'
            onSubmit={createPost}
          >
              <MyInput
                type="number"
                placeholder="Сумма расхода"
                onChange={setInputSpendings}
                name='increment'
                value={inputSpendings}
              />
              <MyInput
                type="text"
                placeholder="Категория"
                onChange={setInputCategorySpends}
                name='increment__cat'
                value={inputCategorySpends}
              />
          </PopupWithForm>

          <PopupWithForm
            inputName="decrement"
            popupTitle='Учет дохода'
            isOpen={isPopupDecrementOpen}
            isClose={setPopupDecrementOpen}
            submitText='Сохранить'
            onSubmit={createPostIncome}
          >
              <MyInput
                type="number"
                placeholder="Сумма дохода"
                onChange={setInputIncome}
                name='decrement'
                value={inputIncome}
              />
              <MyInput
                type='text'
                placeholder='Категория'
                onChange={setInputCategoryIncome}
                name='decrement__cat'
                value={inputCategoryIncome}
              />
          </PopupWithForm>

          <PopupWithForm
              inputName="prof"
              popupTitle='Изменения'
              isOpen={isPopupUserOpen}
              isClose={setPopupUserOpen}
              submitText='Сохранить'
              onSubmit={changeProfile}
          >
              <MyInput
                  type="text"
                  placeholder="Изменить имя"
                  onChange={setNewName}
                  name='prof__name'
                  value={newName}
              />
              <MyInput
                  type='text'
                  placeholder='Изменить фамилию'
                  onChange={setNewSurname}
                  name='prof__surname'
                  value={newSurname}
              />

              <MyInput
                  type='url'
                  placeholder='Изменить аватар'
                  onChange={setAvatar}
                  name='prof__avatar'
                  value={avatar}
              />
          </PopupWithForm>

      </header>
        {/*<Footer />*/}

    </div>

      </Router>
  );
}

export default App;
