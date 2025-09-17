import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const NewTaskContainer = styled.div`
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 15px;
  }
`;

export const HeaderDiv = styled.div`
  padding: 20px;
  margin: 0px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr auto auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 15px;
  }
`;
