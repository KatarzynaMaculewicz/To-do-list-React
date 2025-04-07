import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: transparent;
  border: none;
  transition: color 0.75s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
    cursor: pointer;
  }

  &:disabled {
    color: rgb(174 176 176);
    cursor: auto;
  }
`;

export const StyledButtons = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 20px;
  }
`;
