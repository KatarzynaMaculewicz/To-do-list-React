import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage";
import TipsPage from "./features/tips/TipsPage.js";
import { Navigation } from "./features/navigation/Navigation.js";
import { toTasks, toHints, toTask } from "./routes.js";

export default () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toHints()}>
          <TipsPage />
        </Route>
        <Route path="/">
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </HashRouter>
  </ThemeProvider>
);
