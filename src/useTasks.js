import { useState, useEffect } from "react";

const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || defaultTasks
  );

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)));
