import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`

  font-weight: normal;
  color: white;
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
  }

  &:hover {
    text-decoration:underline;
    text-underline-offset: 5px;
  }
`;

export const List = styled.ul`
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  display: flex;
  justify-content: center;
  list-style: none;
  justify-items: center;
`;

export const Item = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;
