import store from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let renderEntierTree = (state) =>{


    ReactDOM.render(
        <BrowserRouter>
        <App  appState = {store.getState()} store={store} addPost={store.addPost.bind(store)} updateNewTextPost = {store.updateNewTextPost.bind(store)} addMessenge={store.addMessenge.bind(store)} updateNewMessenge={store.updateNewMessenge.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));
};

renderEntierTree(store.getState);
store.subscreib(renderEntierTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

