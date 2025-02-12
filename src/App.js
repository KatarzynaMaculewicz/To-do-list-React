import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "teal",
    hoverColor: "hsl(180 48% 57%)",
  },
  breakpoints: {
    mobile: 767,
  },
}

const defaultTasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść kolację", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
 
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || defaultTasks
  );

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)));

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks(tasks =>
      tasks.map(task => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    if (content.length > 0) {
      setTasks((tasks) => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]);
    };
  };

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
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons 
              tasks={tasks} 
              hideDone={hideDone} 
              toggleHideDone={toggleHideDone} 
              setAllDone={setAllDone} 
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
