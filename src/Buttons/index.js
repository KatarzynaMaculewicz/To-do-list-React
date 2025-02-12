import React from "react";
import { Button, Div } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Div>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone}>
          Ukończ wszyskie
        </Button>
      </>
    )}
  </Div>
);

export default Buttons;
