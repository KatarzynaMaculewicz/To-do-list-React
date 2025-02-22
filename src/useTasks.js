import { useState, useEffect } from "react";

export const useTasks = () => {
  const defaultTasks = [
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść kolację", done: true },
  ];

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || defaultTasks
  );

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)));

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
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
    setTasks((tasks) =>
      tasks.map((task) => ({
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
    }
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
