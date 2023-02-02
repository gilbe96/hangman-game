import styled from "styled-components";

export const StyledHangmanDrawing = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .upper-part {
    margin-left: 15rem;
    height: 10px;
    width: 250px;
    background-color: #669999;
  }
  .rope {
    height: 50px;
    width: 5px;
    background-color: #669999;
    top: 0;
    right: 0;
    position: absolute;
  }
  .pole {
    height: 350px;
    width: 10px;
    background-color: #669999;
  }
  .base {
    height: 20px;
    width: 250px;
    background-color: #669999;
  }
  .head {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 10px solid white;
    position: absolute;
    top: 50px;
    right: -30px;
  }
  .body {
    width: 8px;
    height: 100px;
    position: absolute;
    top: 120px;
    right: 0px;
    background-color: white;
  }
  .right-arm {
    width: 100px;
    height: 10px;
    position: absolute;
    top: 150px;
    right: -100px;
    background-color: white;
    rotate: -30deg;
    transform-origin: left bottom;
  }
  .left-arm {
    width: 100px;
    height: 10px;
    position: absolute;
    top: 150px;
    right: 8px;
    background-color: white;
    rotate: 30deg;
    transform-origin: right bottom;
  }
  .right-leg {
    width: 100px;
    height: 10px;
    position: absolute;
    top: 210px;
    right: -92px;
    background-color: white;
    rotate: 60deg;
    transform-origin: left bottom;
  }
  .left-leg {
    width: 100px;
    height: 10px;
    position: absolute;
    top: 210px;
    right: 0px;
    background-color: white;
    rotate: -60deg;
    transform-origin: right bottom;
  }
`;
