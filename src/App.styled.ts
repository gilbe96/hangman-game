import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 0 auto;
  align-items: center;
  .content-keyboard {
    align-self: stretch;
  }

  /* If you like this, be sure to ❤️ it. */

  a {
    display: inline-block;
    text-decoration: none;
    padding: 15px;
    background-color: #fff;
    border-radius: 3px;
    text-transform: uppercase;
    color: #585858;
    font-family: "Roboto", sans-serif;
  }

  .modal {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(77, 77, 77, 0.7);
    transition: all 0.4s;
  }

  .modal:target {
    visibility: visible;
    opacity: 1;
  }

  .modal__content {
    border-radius: 4px;
    position: relative;
    width: 500px;
    max-width: 90%;
    background: #fff;
    padding: 1em 2em;
    color: black;
  }

  .modal__footer {
    text-align: right;
    button {
      background-color: #585858;
    }
    a {
      background-color: #585858;
      color: #fff;
      padding: 0.5rem;
    }
  }
`;
