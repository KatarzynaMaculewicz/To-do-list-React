import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
      <ul className="section__list">
           {tasks.map(task => (
            <li 
              key={task.id} 
              className={`section__listItem${
                hideDone && task.done 
                  ? " section__listItem--hiden" 
                  : ""}`}
            >
              <button className="section__button">
                {task.done ? "✔" : ""}
              </button>
              <span className={
                task.done ? "section__listItem--done" : ""
              }>
                {task.content}
              </span>
              <button 
                className="section__button section__buttonRemove"
                onClick={() => removeTask(task.id)}
              >   
                🗑
              </button>  
            </li>
            ))}
      </ul>
);

export default Tasks;