import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="section__toggleTasksButtons">
    {tasks.length > 0 && (
      <>
        <button className="section__toggleTasksButton">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
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
