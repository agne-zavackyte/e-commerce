import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: ${(props) => props.theme.gutterSize};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.websiteWidth};
`;
