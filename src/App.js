import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage";
import TipsPage from "./features/tips/TipsPage.js";
import { List, Item, StyledNavLink } from "./styled";

export default () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <nav>
        <List>
          <Item>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/tips">Wskazówki</StyledNavLink>
          </Item>
        </List>
      </nav>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/tips">
          <TipsPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  </ThemeProvider>
);
