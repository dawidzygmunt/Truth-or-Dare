import { useEffect, useState } from 'react'
import './newGame.css'
import axios from "axios"
import SinglePlayer from './single-player'

function NewGame() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState('')

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setLoading('Ładowanie....')
  }, [])








  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue) {
      alert("Podaj Imie!")
    }
    else {
      const allInputData = {
        playerName: inputValue
      }
      try {
        await axios.post('api/v1/players', allInputData)
        showPlayers()
      } catch (error) {
        console.error(error)
      }
    }
  }

  const showPlayers = async () => {
    try {
      const respond = await axios.get('api/v1/players')
      const fetchedPlayers = respond.data.players;
      setPlayers(fetchedPlayers)
      setLoading('')
    } catch (error) {
      console.error('Wystapil blad:', error)
      setLoading('')
    }
  }

  useEffect(() => {
    showPlayers()
  }, [])




  return (
    <div>
      <form className="player-form">
        <h4>Gracze</h4>
        <div className="form-control">
          <input type="text" className="player-input" value={inputValue} onChange={handleInputValue} placeholder="np. Tomek" />
          <button type="submit" onClick={handleSubmit} className="btn submit-btn">Dodaj</button>
        </div>
        <div className="form-alert"></div>
      </form>
      <section className="players-container">
        <div>
          {players.map((player) => (
            <SinglePlayer key={player._id} playerName={player.playerName} playerID={player._id} />
          ))}
        </div>
        <p className="loading-text">{loading}</p>
        <div className="players"></div>
        <div className='next-btn-section'>
          <a href="/#"><button className='next-btn'>Przejdź dalej</button></a>
          </div>
        
      </section>
    </div>
  )



}

export default NewGame;