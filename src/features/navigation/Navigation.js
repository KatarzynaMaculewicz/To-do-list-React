import { List, Item, StyledNavLink } from "./styled";
import { toTasks, toHints } from "../../routes.js";

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toHints()}>Wskazówki</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
