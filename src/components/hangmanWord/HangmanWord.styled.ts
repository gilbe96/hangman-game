import styled from "styled-components";

export const StyledHangmanWord = styled.div`
  display: flex;
  gap: 0.25em;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  .letter {
    border-bottom: 0.1em solid goldenrod;
    padding-bottom: 0.5em;
  }
`;
