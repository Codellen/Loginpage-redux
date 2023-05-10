import { USERNAME_LOGED,PASSWORD_LOGED,ID,TOKEN } from "./actionType";
import { combineReducers } from "redux";


let initialState = {
    username:"",
    password:"",
    id:"",
    token:""
}

const dataReducer = (state=initialState,action)=>{

    switch(action.type)
    {
        case USERNAME_LOGED:
            return{
                ...state, username:action.payload
            }
            case PASSWORD_LOGED:
            return{
                ...state, password:action.payload
            }
            case ID:
            return{
                ...state, id:action.payload
            }
            case TOKEN:
            return{
                ...state,token:action.payload
            }
            default:
                return state
    }


}

const rootReducer = combineReducers({
    data:dataReducer
})

export default rootReducer;