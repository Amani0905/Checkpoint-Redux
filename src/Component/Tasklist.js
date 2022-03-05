import React,{useState} from 'react'
import {useSelector} from "react-redux";
import Task from "./Task";

const Tasklist = () => {
    const tasklist = useSelector((state) => state.TaskReducer.Tasklist);
    const [status, setstatus] = useState("all");
        return (
        <div className="tasklist">
        <div className="filter_buttons">
        <button onClick={() => setstatus("all")}> All  </button>
        <button onClick={() => setstatus("done")}> Done</button>
        <button onClick={() => setstatus("undone")}> Undone </button>
        </div>

        {status === "all"
          ? tasklist.map((el) => (
              <Task
                key={el.id}
                text={el.text}
                id={el.id}
                done={el.done}
              />
            ))
          : status === "done"
          ? tasklist
              .filter((el) => el.done)
              .map((el) => (
                <Task
                key={el.id}
                text={el.text}
                id={el.id}
                done={el.done}
                />
              ))
          : tasklist
              .filter((el) => !el.done)
              .map((el) => (
                <Task
                key={el.id}
                text={el.text}
                id={el.id}
                done={el.done}
                />
              ))}
      </div>
    );
  };
  

export default Tasklist