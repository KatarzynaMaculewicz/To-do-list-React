import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="section__toggleTasksButtons">
    {tasks.length > 0 && (
      <>
        <button className="section__toggleTasksButton">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="section__toggleTasksButton"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszyskie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
