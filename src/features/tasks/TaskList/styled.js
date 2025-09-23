import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 10px 0px;
  }

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  background-color: rgb(27, 122, 30);
  color: white;
  text-decoration: none;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0px;
  margin: 5px;
  transition: background 0.75s linear;

  &:hover {
    background-color: rgb(78, 209, 83);
    cursor: pointer;
  }

  &:active {
    border: 2px solid black;
    border-radius: 2px;
  }

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: rgb(236, 41, 56);

      &:hover {
        background-color: rgb(254, 138, 147);
        cursor: pointer;
      }
    `}
`;
