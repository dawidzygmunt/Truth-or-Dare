import { useNavigate } from "react-router-dom"

function AsideSingleItem(props) {
  const navigate = useNavigate()

  return (
      <a>
        <span className="side-bar-elements" onClick={()=>navigate(props.path)} >
          {props.icon}
          <span>{props.title}</span>
        </span>
      </a>
  )
}

export default AsideSingleItem