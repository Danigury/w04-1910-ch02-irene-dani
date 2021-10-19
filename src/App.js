import "./App.css";
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
  const letterObjects = [];
  const word = "CASA";

  for (i of letters) {
    letterObjects.push({
      id: 1,
      letter: i,
      hasBeenClicked: false,
      isInWord: word.includes(i) ? true : false,
    });
  }

  console.log(letterObjects);
  return;
}

export default App;
