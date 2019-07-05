import React from 'react';
import c from './Dialogs.module.css';
import Messange from "./Messange/Messenge";
import DialogItem from "./DialogItem/DialogItem";

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