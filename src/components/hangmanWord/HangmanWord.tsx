import { StyledHangmanWord } from "./HangmanWord.styled";

interface HangmanWordProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <StyledHangmanWord>
      {wordToGuess.split("").map((letter, index) => (
        <span className="letter" key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "#ff3333"
                  : "white",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </StyledHangmanWord>
  );
};

export default HangmanWord;
