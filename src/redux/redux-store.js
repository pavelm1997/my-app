import {createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import useresReducer from "./users-reducer";



let redusers = combineReducers(
    {
        profilePage:profileReducer,
        messagePage:dialogReducer,
        sidebar:sidebarReducer,
        usersPage:useresReducer
    }
);
let store = createStore(redusers);

export default store;