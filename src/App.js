import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage";
import TipsPage from "./features/tips/TipsPage.js";
import { Navigation } from "./features/navigation/Navigation.js";

export default () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/wskazowki">
          <TipsPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  </ThemeProvider>
);
