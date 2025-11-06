import { Content, List, Item, Button, StyledNavLink } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";
import { toTask } from "../../../../routes.js";

const TaskList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={hideDone && task.done}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content $done={task.done}>
            <StyledNavLink to={toTask({ id: task.id})}>{task.content}</StyledNavLink>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
