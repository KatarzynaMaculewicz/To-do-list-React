import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <>
            <strong>Ukończono:</strong> {task?.done ? "Tak" : "Nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
