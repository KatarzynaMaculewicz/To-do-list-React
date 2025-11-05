import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
    error: null,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    fetchExampleTasks: () => {},
    fetchExampleTasksLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchExampleTasksSuccess: (state, { payload }) => {
      state.tasks = payload;
      state.loading = false;
      state.error = null;
    },
    fetchExampleTasksError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksLoading,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectAreTasksEmpty = (state) => state.tasks.tasks.length === 0;
export const selectIsEveryTaskDone = (state) =>
  state.tasks.tasks.every(({ done }) => done);
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectLoading = (state) => state.tasks.loading;
export const selectError = (state) => state.tasks.error;
export const selectTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);


export default tasksSlice.reducer;
