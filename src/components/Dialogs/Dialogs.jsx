import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (<div className={c.dialog}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>);
};
const Messange = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>);
};

const Dialog = () => {
    let dialogData = [
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
    let dialogelement = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messange = massageData.map(massage => <Messange message={massage.message} id={massage.id}/>);
    return (<div className={c.dialogs}>
            <div className={c.dialog_item}>
                {dialogelement}
            </div>
            <div className={c.messages}>
                {messange}
            </div>
        </div>
    );
};
export default Dialog;