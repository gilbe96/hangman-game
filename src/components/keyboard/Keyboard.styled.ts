import styled from "styled-components";

export const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
  .key {
    font-size: 1.2rem;
    background-color: #000d1a;
    transition: all 0.5s;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    :hover {
      color: #000d1a;
      background-color: white;
    }
  }
  .active {
    background-color: blueviolet !important;
    color: white !important;
  }
  .inactive {
    opacity: 0.3;
  }
`;
