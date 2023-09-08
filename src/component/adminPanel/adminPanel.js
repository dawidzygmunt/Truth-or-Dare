import { useEffect, useState } from "react"
import AnalysticTile from "./analystic/analysticComponent"
import SideNavbar from "./aside/sideNavbar"
import axios from "axios"





function AdminPanel() {
  const [allBasic, setAllBasic] = useState()
  const [truthBasic, setTruthBasic] = useState()
  const [challengeBasic, setChallengeBasic] = useState()
  const [all, setAll] = useState()
  const [truth, setTruth] = useState()
  const [challenge, setChallenge] = useState()

  const allCardsBasic = async () => {
    const response = await axios.get('/api/v1/statistics/all-basic')
    console.log(response.data.nbHits);
    setAllBasic(response.data.nbHits)
  }

  const truthCardsBasic = async () => {
    const response = await axios.get('/api/v1/statistics/truth-basic')
    console.log(response.data.nbHits);
    setTruthBasic(response.data.nbHits)
  }

  const challengeCardsBasic = async () => {
    const response = await axios.get('/api/v1/statistics/challenge-basic')
    console.log(response.data.nbHits);
    setChallengeBasic(response.data.nbHits)
  }

  const allCards = async () => {
    const response = await axios.get('/api/v1/statistics/all')
    console.log(response.data.nbHits);
    setAll(response.data.nbHits)
  }

  const truthCards = async () => {
    const response = await axios.get('/api/v1/statistics/truth')
    console.log(response.data.nbHits);
    setTruth(response.data.nbHits)
  }

  const challengeCards = async () => {
    const response = await axios.get('/api/v1/statistics/challenge')
    console.log(response.data.nbHits);
    setChallenge(response.data.nbHits)
  }

  
  useEffect(() => {    
    allCardsBasic()
    truthCardsBasic()
    challengeCardsBasic()
    allCards()
    truthCards()
    challengeCards()
  },[])


  return (
    <div className="admin-panel-container">

      <SideNavbar />


      {/* Main Content */}
      <main>
        <h1>Statystyki</h1>
        <div className="analyse">
          <AnalysticTile title='Wszystkich kart' amount={allBasic} percentage='100' />
          <AnalysticTile title='Pytania' amount={truthBasic} percentage='57' />
          <AnalysticTile title='Wyzwania' amount={challengeBasic} percentage='87' />

          <AnalysticTile title='Suma wszystkich kart' amount={all} percentage='98' />
          <AnalysticTile title='Suma pytań' amount={truth} percentage='57' />
          <AnalysticTile title='Suma wyzwań' amount={challenge} percentage='87' />
        </div>
      </main>



    </div>
  )
}

export default AdminPanel