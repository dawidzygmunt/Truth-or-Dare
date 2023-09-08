import SideNavbar from "../aside/sideNavbar"
import Card from "../../gameMain/card"
import axios from "axios"
import { useEffect, useState } from "react"

function SearchAllCards(props) {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await axios.get('../api/v1/cards')
        const fetchedCards = await response.data.cards
        console.log(fetchedCards);
        setPlayers(fetchedCards)
      } catch (error) {
        console.log(error);
      }
    }
    
    getCards()
    console.log('redundancja!');
  }, [])


  return (
    <div className="admin-cards-container">
      <SideNavbar />
      <div className="cards-content-wrapper">
        <h1 className="h1-title">Wszystkie karty</h1>
        <div className="all-cards-container">
          <div className="cards-grid">
            {players.map((card) => (
              <Card cardID={card._id} contentText={card.tresc} type={card.typ} ilosc={card.ilosc} kara={card.kara} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAllCards