import styled from "styled-components";

export const Main = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 25px;
  }
`;
