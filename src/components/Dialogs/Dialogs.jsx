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
        {id: 7, name: 'Mikola'},
    ];
    let massageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I'},
        {id: 3, message: 'I go to the school'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Yo'},
    ];
    return (<div className={c.dialogs}>
            <div className={c.dialog_item}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
                <DialogItem name={dialogData[6].name} id={dialogData[6].id}/>
            </div>
            <div className={c.messages}>
                <Messange message={massageData[0].message} id={massageData[0].id}/>
                <Messange message={massageData[1].message} id={massageData[1].id}/>
                <Messange message={massageData[2].message} id={massageData[2].id}/>
                <Messange message={massageData[3].message} id={massageData[3].id}/>
                <Messange message={massageData[4].message} id={massageData[4].id}/>
                <Messange message={massageData[5].message} id={massageData[5].id}/>
                <Messange message={massageData[6].message} id={massageData[6].id}/>
            </div>
        </div>
    );
};
export default Dialog;