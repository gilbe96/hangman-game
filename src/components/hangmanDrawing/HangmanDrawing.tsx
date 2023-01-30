import { StyledHangmanDrawing } from "./HangmanDrawind.styled";

const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const RIGHTARM = <div className="right-arm"></div>;
const LEFTARM = <div className="left-arm"></div>;
const RIGHTLEG = <div className="right-leg"></div>;
const LEFTLEG = <div className="left-leg"></div>;

const BODYPARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <StyledHangmanDrawing>
      <div className="upper-part"></div>
      <div className="rope"></div>
      {BODYPARTS.slice(0, numberOfGuesses)}
      <div className="pole"></div>
      <div className="base"></div>
    </StyledHangmanDrawing>
  );
};

export default HangmanDrawing;
