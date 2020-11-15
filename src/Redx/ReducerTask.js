import {ADDTASK,DELTASK, CHKTASK,EDITASK} from "./ActionTypes";


const initialState={
    listTask:[],
};

const reducerTask=(state=initialState,action)=>{
    switch(action.Type){
        case ADDTASK:
            return{...state,listTask:[...state.listTask,action.payload]};
        case DELTASK:
            return{...state,listTask: state.listTask.filter((el)=> el.id !== action.payload)};
            case CHKTASK:
            return{
                ...state,listTask: state.listTask.map((el)=>
                 el.id === action.payload?{...el,isDone:!el.isDone}:el),};
            case EDITASK:
            return{
                ...state,listTask: state.listTask.map((el)=>
                 el.id === action.payload.id?{...el,texte:action.payload.text}:el),};
            default:
                return state;
    }
};
export default reducerTask;