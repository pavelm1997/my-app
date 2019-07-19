import React from 'react';
import {addMessengeActionCreator, uppdateNewMessengeActionCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return{
        dialogpost:state.messagePage.dialogDat,
    massege:state.messagePage.massageData,
    newMessemgeText:state.messagePage.newMessemgeText,
    }
};

let mapDispatchToProps =(dispatch)=>{
    return {
        onMessengeChange:(text)=>{dispatch(uppdateNewMessengeActionCreator(text));},
        addMessenge:()=>{dispatch(addMessengeActionCreator());}
    }
};

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog);

export default DialogContainer;