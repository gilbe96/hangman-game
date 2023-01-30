import { StyledKeyboard } from "./Keyboard.styled";

const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface KeyboardProps {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

const Keyboard = ({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <StyledKeyboard>
      {LETTERS.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            className={`key ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={letter}
            disabled={isActive || isInactive || disabled}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter}
          </button>
        );
      })}
    </StyledKeyboard>
  );
};

export default Keyboard;
