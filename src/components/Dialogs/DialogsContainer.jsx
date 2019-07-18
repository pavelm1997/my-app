import React from 'react';
import {addMessengeActionCreator, uppdateNewMessengeActionCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addMessenge = () => {
                    store.dispatch(addMessengeActionCreator());
                };

                let onMessengeChange = (text) => {
                    store.dispatch(uppdateNewMessengeActionCreator(text));
                };


                return (<Dialog
                    addMessenge={addMessenge}
                    uppdateNewMessenge={onMessengeChange}
                    dialogpost={state.messagePage.dialogDat}
                    massege={state.messagePage.massageData}
                    newMessemgeText={state.messagePage.newMessemgeText}/>)
            }
        }</StoreContext.Consumer>
    );
};
export default DialogContainer;