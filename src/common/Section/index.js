import { StyledSection, Header, NewTaskContainer, HeaderDiv } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <HeaderDiv>
      <Header>{title}</Header>
      {extraHeaderContent}
    </HeaderDiv>
    <NewTaskContainer>{body}</NewTaskContainer>
  </StyledSection>
);

export default Section;
