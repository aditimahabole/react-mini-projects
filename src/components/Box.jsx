
import '../App.css'
import PropTypes from 'prop-types';
const Box = ({image , text ,  onClickFunction}) => {
  return (
    <span className="user_box" onClick={onClickFunction}>
        <img  src={image}  alt={text} />
        <span>{text} &times;</span>
    </span>
  )
}
Box.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
};
export default Box