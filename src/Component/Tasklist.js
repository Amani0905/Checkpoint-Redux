import React,{useState} from 'react'
import {useSelector} from "react-redux";
import Task from "./Task";

const Tasklist = () => {
    const tasklist = useSelector((state) => state.TaskReducer.Tasklist);
    const [status, setstatus] = useState("all");
        return (
        <div className="tasklist">
        <div className="btn-group">
        <button className="btn btn-light" onClick={() => setstatus("all")}> All  </button>
        <button className="btn btn-light" onClick={() => setstatus("done")}> Done</button>
        <button className="btn btn-light" onClick={() => setstatus("undone")}> Undone </button>
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