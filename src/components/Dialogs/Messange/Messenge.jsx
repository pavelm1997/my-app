import React from 'react';
import c from './../Dialogs.module.css';

const Messange = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>);
};

export default Messange;