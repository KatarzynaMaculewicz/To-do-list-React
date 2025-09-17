import React from "react";
import { Button, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <StyledButtons>
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
  </StyledButtons>
);

export default Buttons;
