import PropTypes from "prop-types";

function LetterToClick({ letter, functionOnClick, className }) {
  return (
    <div className={"letter-to-click " + className} onClick={functionOnClick}>
      {letter}
    </div>
  );
}

LetterToClick.propTypes = {
  letter: PropTypes.string.isRequired,
  functionOnClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LetterToClick;
