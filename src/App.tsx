import { FC, useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { StyledApp } from "./App.styled";
import HangmanDrawing from "./components/hangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/hangmanWord/HangmanWord";
import Keyboard from "./components/keyboard/Keyboard";
import losserAudio from "./assets/losser.mp3";
import winnerAudio from "./assets/winner.mp3";
import keyPress from "./assets/keyPress.mp3";

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

  const keyPress_audio = new Audio(keyPress);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (keyPress_audio != null) {
        keyPress_audio.play();
      }
      if (guessedLetters.includes(letter) || isLosser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      if (keyPress_audio != null) {
        keyPress_audio.play();
      }
    },
    [guessedLetters, isLosser, isWinner]
  );
  useEffect(() => {
    if (isLosser || isWinner) {
      const element = document.getElementById("btn-modal");
      const losser_audio = new Audio(losserAudio);
      const winner_audio = new Audio(winnerAudio);
      if (element != null) {
        element.click();
        if (isLosser && losser_audio != null) {
          losser_audio.play();
        }
        if (isWinner && winner_audio != null) {
          winner_audio.play();
        }
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

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>{isWinner == true ? WINNER : LOSSER}</h1>

          <div className="modal__footer">
            <button>
              <a className="btn-again" href="">
                Again
              </a>
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
        <a className="btn-modal" id="btn-modal" href="#demo-modal"></a>
      </div>
    </StyledApp>
  );
};

export default App;
