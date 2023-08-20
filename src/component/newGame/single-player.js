import { useState } from "react"
import axios from "axios"


const SinglePlayer = (props) => {
  const handleEditButton = (e) => {

  }

  const { playerName, playerID } = props
  const [ shouldHide, setShouldHide ] = useState(false)




  const handleDeleteButton = async () => {
    console.log(playerID);
    const response = await axios.delete('api/v1/players/' + playerID)
    if (!response) {
      alert('Nie poprawne ID')
    }
    else{
      setShouldHide(true)
    }
  }


  return (
    <div className="single-player" style={{ display: shouldHide ? 'none' : 'flex' }}>
      <h3>{playerName}</h3>
      <span>
        <button className="form-edit-btn" onClick={handleEditButton}>Edytuj</button>
        <button className="form-delete-btn" onClick={handleDeleteButton}>Usuń</button>
      </span>

    </div>
  )
}

export default SinglePlayer