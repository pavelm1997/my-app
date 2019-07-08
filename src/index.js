import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let postData = [
    {id: 1, message: 'Hi', like: '45'},
    {id: 2, message: 'It\'s my first post', like: '19'},
    {id: 3, message: 'It\'s my second post', like: '7'},
];
let dialogDat = [
    {id: 1, name: 'Vasiliy'},
    {id: 2, name: 'Pavlo'},
    {id: 3, name: 'Petrovich'},
    {id: 4, name: 'Eugen'},
    {id: 5, name: 'I'},
    {id: 6, name: 'Shura'},
    {id: 7, name: 'Mikola'}
];
let massageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'I'},
    {id: 3, message: 'I go to the school'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
    {id: 7, message: 'Yo'}
];
ReactDOM.render(<App date ={postData} dialog={dialogDat} messege={massageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


