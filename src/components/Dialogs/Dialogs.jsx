import React from 'react';
import c from './Dialogs.module.css';
import Messange from "./Messange/Messenge";
import DialogItem from "./DialogItem/DialogItem";


const Dialog = (props) => {
    let dialogelement = props.dialogpost.map(dialog => <DialogItem name={dialog.name}  id={dialog.id}/>);//key={dialog.id}
    let messange = props.massege.map(massage => <Messange message={massage.message}  id={massage.id}/>);//key={massage.id}

    let addCreatemessenge = React.createRef();

    let onaddMessenge = () => {
       props.addMessenge();
    };

    let onMessengeChange = ()=>
    {
        let text = addCreatemessenge.current.value;
        props.onMessengeChange(text);
    };

    return (<div className={c.dialogs}>
            <div className={c.dialog_item}>
                {dialogelement}
            </div>
            <div className={c.messages}>
                {messange}
            </div>
            <div>
                <textarea onChange={onMessengeChange} ref={addCreatemessenge} value={props.newMessemgeText}/>
                <button onClick={onaddMessenge}>Add</button>
            </div>
        </div>
    );
};
export default Dialog;