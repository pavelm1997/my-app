import React from 'react';
import c from './Dialogs.module.css'

let Dialog = () => {
    return (<div className={c.dialogs}>
            <div className={c.dialog_item}>
                <div className={c.dialog}>Vasiliy</div>
                <div className={c.dialog}>Pavlo</div>
                <div className={c.dialog}>Petrovich</div>
                <div className={c.dialog}>Eudgen</div>
                <div className={c.dialog}>I</div>
                <div className={c.dialog}>Shura</div>
                <div className={c.dialog}>Mikola</div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>I</div>
                <div className={c.message}>go to the school</div>
            </div>
        </div>
    );
};
export default Dialog;