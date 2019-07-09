import React from 'react';
import c from './../Dialogs.module.css';

const Messange = (props) => {
    return (<div>
        <div className={c.message}>
            {props.message}

            </div>
    </div>);
};

export default Messange;