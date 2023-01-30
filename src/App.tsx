import { FC, useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { StyledApp } from "./App.styled";
import HangmanDrawing from "./components/hangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/hangmanWord/HangmanWord";
import Keyboard from "./components/keyboard/Keyboard";

const WINNER = "Congratulations! You are a winner 😁";
const LOSSER = "You lost 😢. Retry! ";

const App: FC = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLosser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLosser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLosser, isWinner]
  );
  useEffect(() => {
    if (isLosser || isWinner) {
      var element = document.getElementById("btn-modal");
      if (element != null) {
        element.click();
      }
    }
  }, [isLosser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <StyledApp className="App">
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <a className="btn-modal" id="btn-modal" href="#demo-modal">
        Open Demo Modal
      </a>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>{isWinner == true ? WINNER : LOSSER}</h1>

          <div className="modal__footer">
            <button>
              <a href="">Again</a>
            </button>
          </div>
        </div>
      </div>

      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLosser}
      />
      <div className="content-keyboard">
        <Keyboard
          disabled={isLosser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </StyledApp>
  );
};

export default App;
