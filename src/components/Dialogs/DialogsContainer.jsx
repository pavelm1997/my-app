import React from 'react';
import {addMessengeActionCreator, uppdateNewMessengeActionCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialogs";



const DialogContainer = (props) => {
    let state = props.store.getState();
    let addMessenge = () => {
       props.store.dispatch(addMessengeActionCreator());
    };

    let onMessengeChange = (text)=>
    {
        props.store.dispatch(uppdateNewMessengeActionCreator(text));
    };
    return (<Dialog addMessenge={addMessenge} uppdateNewMessenge={onMessengeChange} dialogpost={state.messagePage.dialogDat} massege={state.messagePage.massageData} newMessemgeText={state.messagePage.newMessemgeText}/>);
};
export default DialogContainer;