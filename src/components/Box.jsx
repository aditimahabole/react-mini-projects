
import '../App.css'
const Box = ({image , text ,  onClickFunction}) => {
  return (
    <span className="user_box" onClick={onClickFunction}>
        <img  src={image}  alt={text} />
        <span>{text} &times;</span>

    </span>
  )
}

export default Box