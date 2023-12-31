import { useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom"
import { Routes, Route, useNavigate } from 'react-router-dom';
import EditPlayer from "./edit-player";
import styles from './newGame.module.css'



const SinglePlayer = (props) => {
  const [goToEditPlayer, setGoToEditPlayer] = useState(false)
  const { playerName, playerID } = props
  const [shouldHide, setShouldHide] = useState(false)

  if (goToEditPlayer) {
    return <Navigate to='/edit-player' />
  }







  const handleDeleteButton = async () => {
    console.log(playerID);
    const response = await axios.delete('/api/v1/players/' + playerID)
    if (!response) {
      alert('Nie poprawne ID')
    }
    else {
      setShouldHide(true)
    }
  }


  return (
    <div className={styles["single-player"]} style={{ display: shouldHide ? 'none' : 'flex' }}>
      <h3>{playerName}</h3>
      <span>
        <button className={styles["form-edit-btn"]}
          onClick={() => {
            setGoToEditPlayer(true)
          }}>Edytuj</button>
        <button className={styles["form-delete-btn"]} onClick={handleDeleteButton}>Usuń</button>
      </span>
    </div>
  )
}

export default SinglePlayer