import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButtons } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszyskie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;
