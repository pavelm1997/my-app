const UPDATE_NEW_MESSENGE = 'UPDATE-NEW-MESSENGE';
const ADD_MESSENGE = 'ADD-MESSENGE';

const dialogReducer =(state, action)=> {
switch (action.type)
{
    case (ADD_MESSENGE):{
    let newMessenge = {
        id: 1, message: state.newMessemgeText
    };
    state.massageData.push(newMessenge);
    state.newMessemgeText ='';
        return state;
}
    case(UPDATE_NEW_MESSENGE):{state.newMessemgeText = action.newText;return state;}
    default:return state;
}


    return state;
};

export const addMessengeActionCreator =() => ({type:ADD_MESSENGE});

export const uppdateNewMessengeActionCreator = (text) =>({type:UPDATE_NEW_MESSENGE,newText:text});
export default dialogReducer;

