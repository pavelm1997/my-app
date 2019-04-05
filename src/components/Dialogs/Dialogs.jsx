import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (<div className={c.dialog}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>);
};
const Messange =(props) => {
  return (
      <div className={c.message}>
          {props.message}
      </div>);
};

const Dialog = () => {
    return (<div className={c.dialogs}>
            <div className={c.dialog_item}>
                <DialogItem name="Vasiliy" id="1"/>
                <DialogItem name="Pavlo" id="2"/>
                <DialogItem name="Petrovich" id="3"/>
                <DialogItem name="Eudgen" id="4"/>
                <DialogItem name="I" id="5"/>
                <DialogItem name="Shura" id="6"/>
                <DialogItem name="Mikola" id="6"/>
            </div>
            <div className={c.messages}>
                <Messange message = 'Hi'/>
                <Messange message = 'I'/>
                <Messange message = 'I go to the school'/>
                <Messange message = 'Yo'/>
                <Messange message = 'Yo'/>
                <Messange message = 'Yo'/>
                <Messange message = 'Yo'/>
            </div>
        </div>
    );
};
export default Dialog;