import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: white;
  border: none;
  padding: 10px;
  transition: 0.75s linear;
  transform: 0, 25s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
    transform: scale(1.025);
    cursor: pointer;
  }

  &:active {
    background-color: hsl(180, 76%, 39%);
    outline: 2px solid black;
    border-radius: 2px;
    transform: scale(1);
  }
`;
