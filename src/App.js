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
  const letterArray = [];
  const word = "CASA";

  for (let i of letters) {
    letterArray.push({
      id: 1,
      letter: i,
      isInWord: word.includes(i) ? true : false,
    });
  }

  /*  event.target.contains.className("");  */
  function change() {
    console.log("hola");
  }

  return (
    <section>
      {letterArray.map((letterObject) => (
        <LetterToClick
          letter={letterObject.letter}
          isInWord={letterObject.isInWord}
          actionOnClick={change}
        />
      ))}
    </section>
  );
}

export default App;
