import PropTypes from "prop-types";
import "../App.css";
// We have to define Props type also
Box.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
};

const Box = ({ image, text, onClickFunction }) => {
  return (
    <span className="user_box" onClick={onClickFunction}>
      <img src={image} alt={text} />
      <span>{text} &times;</span>
    </span>
  );
};

export default Box;
