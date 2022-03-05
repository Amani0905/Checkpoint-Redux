import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from "../Actions/Action";

const Addtodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("")

return (
    <div>
    <button className="btn btn-dark" onClick={()=>{if (text) {
            dispatch(
                addTask({
                id: uuidv4(),
                text: text,
                done: false,
              })
            );
            setText("");
          } else {
            alert("Empty Task Please Write Task ");
          }
        }}>  Add Task </button>
    <input type="text" name='task' placeholder='Add your task here' onChange={(e)=>setText(e.target.value)} value={text}/>
    </div>
)
}

export default Addtodo