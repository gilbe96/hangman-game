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
  @media (max-width: 600px) {
    .upper-part {
      width: 150px;
      margin-left: 8.65rem;
    }
    .rope {
      height: 30px;
    }
    .pole {
      height: 250px;
    }
    .base {
      height: 20px;
      width: 250px;
      background-color: #669999;
    }
    .head {
      width: 30px;
      height: 30px;
      top: 30px;
      right: -22px;
    }
    .body {
      width: 8px;
      height: 80px;
      top: 78px;
    }
    .right-arm {
      width: 70px;
      top: 112px;
      right: -70px;
    }
    .left-arm {
      width: 70px;
      top: 112px;
    }
    .right-leg {
      width: 70px;
      top: 148px;
      right: -62px;
    }
    .left-leg {
      width: 70px;
      top: 148px;
    }
  }
`;
