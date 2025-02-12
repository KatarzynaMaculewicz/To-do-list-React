import { StyledSection, Header, Div, HeaderDiv } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <HeaderDiv>
      <Header>{title}</Header>
      {extraHeaderContent}
    </HeaderDiv>
    <Div>{body}</Div>
  </StyledSection>
);

export default Section;
