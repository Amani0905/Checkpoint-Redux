import { isClickableInput } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTask, doneTask, editTask} from "../Actions/Action";

const Task = ({text, id, done}) => {
const dispatch = useDispatch();
  // Hook to verif if edit button is clicked or not
  const [open_edit, setopen_verif_edit] = useState(false);
  // Hook to store the input value
  const [edit_desc, setedit_desc] = useState("");

  return (
    <div className="Task">
        
      {!open_edit ? (
        <h1 style={{textDecoration: done ?'line-through':'none'}}>{text}</h1>
      ) : (
        // if user choose to edit task
        <input className="form-control"
          defaultValue={text}
          type="text"
          onChange={(e) => {
            setedit_desc(e.target.value);
          }}
          autoFocus
        />
      )}
      <button className="btn btn-info"
        onClick={() => {
          if (!open_edit) {
            setopen_verif_edit(!open_edit);

            setedit_desc(text);
          } else {
            if (!edit_desc) {
              alert("Warning !! Empty modification");
              setopen_verif_edit(!open_edit);
            } else {
              dispatch(editTask({id, text: edit_desc}));
              setedit_desc("");
              setopen_verif_edit(!open_edit);
            }
          }
        }}
      >
        Edit Task
    
      </button>
     
      <button className="btn btn-outline-danger" onClick={() => dispatch(deleteTask(id))}>Delete Task</button>
      <button className="btn btn-outline-success" onClick={() => dispatch(doneTask(id))}>
        {done ? "Completed Task" : "Uncompleted Task"}
      </button>
    </div>
  );
};

export default Task;

