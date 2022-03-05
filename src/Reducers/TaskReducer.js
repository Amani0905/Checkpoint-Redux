import {ADD, DELETE, DONE, EDIT} from "../Actions/Types"
import { v4 as uuidv4 } from 'uuid'
const InitialState = {
    tasklist: [],
};
const TaskReducer= (state= InitialState,action)=> {
    switch (action.type){
        case ADD:
            return{
                ...state,tasklist:[...state.tasklist,action.payload]
            }
    case DELETE:
            return {
                ...state,
                tasklist: state.tasklist.filter((el) => el.id !== action.payload),
                };
    case DONE:
            return {
                ...state,
                tasklist: state.tasklist.map((el) =>
                        el.id === action.payload ? {...el, done: !el.done} : el),
                    };
    case EDIT:
            return {
                ...state,
                tasklist: state.tasklist.map((el) => el.id === action.payload.id ? {...el, description: action.payload.description}: el),
                    };
        default:
            return state;
    }

}
export default TaskReducer