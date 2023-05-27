import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./components/store/reducers";
import {postReducer} from "./components/store/reducerPosts";
import {profileReducer} from "./components/store/reducerProfile";


const rootReducer = combineReducers({AppState: reducer, PostState: postReducer, ProfileState: profileReducer});
let store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
