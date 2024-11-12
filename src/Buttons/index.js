import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="section__toggleTasksButtons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="section__toggleTasksButton">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="section__toggleTasksButton"
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszyskie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
