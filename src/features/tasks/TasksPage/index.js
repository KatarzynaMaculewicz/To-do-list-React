import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Buttons";
import Form from "./Form";
import Search from "./Search";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { fetchExampleTasks, selectLoading, selectError } from "../tasksSlice";
import { Button, LoadingError } from "../styled";

function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <Header title="Lista zadań" />
      <LoadingError>{error && `${error}`}</LoadingError>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button
            disabled={loading}
            onClick={() => dispatch(fetchExampleTasks())}
          >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
