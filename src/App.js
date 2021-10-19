import { useState } from "react";
import "./App.css";
import LetterToGuess from "./componentes/letter-to-guess/LetterToGuess";
import LetterToClick from "./componentes/LetterToClick/LetterToClick";

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
  const words = ["PINYA", "AMB", "PIZZA", "TREGUA", "TACTICA"];
  // const word = parseInt(Math.floor(Math.random() * words.length));
  const word = words[0];
  console.log(word);
  const emptyArray = new Array(word.length).fill("_");
  console.log(emptyArray);
  for (let i = 0; i < letters.length; i++) {
    letterArray.push({
      id: i,
      letter: letters[i],
      isInWord: word.includes(letters[i]) ? true : false,
    });
  }

  const [wordUpdate, setWordUpdate] = useState(emptyArray);
  function change(sign) {
    for (let i in word) if (word[i] === sign) wordUpdate[i] = sign;
    setWordUpdate(wordUpdate);
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
              change(letterObject.letter);
            }}
          />
        ))}
      </section>
      <LetterToGuess letterToGuess={"a"} />
      <section className="letters-to-guess">
        {wordUpdate.map((letter, index) => (
          <LetterToGuess letterToGuess={letter} key={index} />
        ))}
      </section>
    </>
  );
}

export default App;
