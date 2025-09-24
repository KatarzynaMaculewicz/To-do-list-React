import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButtons } from "./styled";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const { hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
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
