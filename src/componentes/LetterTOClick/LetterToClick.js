import PropTypes from "prop-types";
import { useState } from "react";

function LetterToClick({ letter, isInWord, actionOnClick }) {
  const [className, setClassName] = useState("unclicked");
  return (
    <div
      className={"letter-to-click " + className}
      onClick={() => {
        setClassName(isInWord ? "green" : "red");
        actionOnClick();
      }}
    >
      {letter}
    </div>
  );
}

LetterToClick.propTypes = {
  letter: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LetterToClick;
