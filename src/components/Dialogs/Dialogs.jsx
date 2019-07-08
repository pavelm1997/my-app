import React from 'react';
import c from './Dialogs.module.css';
import Messange from "./Messange/Messenge";
import DialogItem from "./DialogItem/DialogItem";

const Dialog = (props) => {

    let dialogelement =props.dialogpost.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messange = props.massege.map(massage => <Messange message={massage.message} id={massage.id}/>);
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