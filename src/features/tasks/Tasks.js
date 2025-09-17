import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { ThemeProvider } from "styled-components";
import { useTasks } from "../../useTasks";
import { theme } from "../../theme";

function Tasks() {
 
  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Lista zadań"
          body={
            <TaskList
              tasks={tasks}
              hideDone={( hideDone )}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={( hideDone )}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
