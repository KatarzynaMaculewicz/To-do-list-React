import { List, Item, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/wskazowki">Wskazówki</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
