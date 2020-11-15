import {ADDTASK,DELTASK, CHKTASK,EDITASK} from "../Redx/ActionTypes";

export const addTask=(payload)=>{
    return{
        type:ADDTASK,
        payload,
    };
};
export const deletTask=(payload)=>{
    return{
        type:DELTASK,
        payload,
    };
};
export const chktask=(payload)=>{
    return{
        type:CHKTASK,
        payload,
    };
};
export const editTask=(id, text)=>{
    return{
        type:EDITASK,
        id,
        text,
    };
}