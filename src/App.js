import { useState } from "react";
import "./App.css";
import Hangman from "./componentes/Hangman/Hangman";
import LetterToGuess from "./componentes/letter-to-guess/LetterToGuess";
import LetterToClick from "./componentes/LetterTOClick/LetterToClick";
import Message from "./componentes/Message/Message";

function App() {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const letterArray = [];
  const words = [
    "PINYA",
    "AMB",
    "PIZZA",
    "ES",
    "LA",
    "MILLOR",
    "DE",
    "TOTES",
    "NAPO",
    "FA",
    "PINYA",
    "AMB",
    "MI",
  ];
  const word = words[parseInt(Math.random() * words.length)];

  //const word = words[1];
  const emptyArray = new Array(word.length).fill("_");
  for (let i = 0; i < letters.length; i++) {
    letterArray.push({
      id: i,
      hasBeenClicked: false,
      letter: letters[i],
      isInWord: word.includes(letters[i]) ? true : false,
    });
  }
  const [successes, setSuccesses] = useState(0);
  const [failures, setFailures] = useState(0);
  const [wordUpdate, setWordUpdate] = useState(emptyArray);
  const [text, setText] = useState("");
  let newWord;
  function change(sign) {
    if (!sign.hasBeenClicked) {
      sign.hasBeenClicked = true;

      newWord = [...wordUpdate];
      for (let i in word) if (word[i] === sign.letter) newWord[i] = sign.letter;
      setWordUpdate(newWord);

      if (sign.isInWord) setSuccesses(successes + 1);
      else setFailures(failures + 1);

      // arreglarlo para que se ajuste al numero de letras
      if (successes === word.length - 1) setText("HAS GANADO");
      if (failures === 10) setText("HAS FRACASADO");
    }
  }

  return (
    <>
      <section className="letters-to-click">
        {letterArray.map((letterObject) => (
          <LetterToClick
            key={letterObject.id}
            letter={letterObject.letter}
            isInWord={letterObject.isInWord}
            actionOnClick={() => {
              change(letterObject);
            }}
          />
        ))}
      </section>
      <Hangman failures={failures} />
      <section className="letters-to-guess">
        {wordUpdate.map((letter, index) => (
          <LetterToGuess
            letterToGuess={letter}
            key={index}
            className="letter-to-guess"
          />
        ))}
      </section>
      <Message text={text} />
    </>
  );
}

export default App;
