import {ADD, DELETE, DONE, EDIT} from "../Actions/Types"
import { v4 as uuidv4 } from 'uuid'
const InitialState = {
    Tasklist: [],
};
const TaskReducer= (state= InitialState,action)=> {
    switch (action.type){
        case ADD:
            return{
                ...state,Tasklist:[...state.Tasklist,action.payload]
            }
    case DELETE:
            return {
                ...state,
                Tasklist: state.Tasklist.filter((el) => el.id !== action.payload),
                };
    case DONE:
            return {
                ...state,
                Tasklist: state.Tasklist.map((el) =>
                        el.id === action.payload ? {...el, done: !el.done} : el),
                    };
    case EDIT:
            return {
                ...state,
                Tasklist: state.Tasklist.map((el) => el.id === action.payload.id ? {...el, text: action.payload.text}: el),
                    };
        default:
            return state;
    }

}
export default TaskReducer