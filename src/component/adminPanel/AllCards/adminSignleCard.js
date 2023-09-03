import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import vodka from '../../../img/vodka.png'
import SideNavbar from '../aside/sideNavbar';

function AdminSingleCard(props) {

  const [card, setCard] = useState([])
  const [typeText, setTypeText] = useState('')
  const [versionText, setVersionText] = useState('')
  const [iterText, setIterText] = useState('')
  const [contentText, setContentText] = useState('')
  const [vodkaShot, setVodkaShot] = useState();


  const updateCard = async () => {

  }


  // Aktualizowanie karty na bieżąco
  const handlev1 = (event) => {
    const { value } = event.target;
    setTypeText(value);
    console.log(value);
  }

  const handlev2 = (event) => {
    const { value } = event.target;
    setVersionText(value);
    console.log(value);
  }

  const handlev3 = (event) => {
    const { value } = event.target;
    setIterText(value);
    console.log(value);
  }

  const handlev4 = (event) => {
    const { value } = event.target;
    setContentText(value);
    console.log(value);
  }
  // Koniec aktualizowania napisów na karcie


  // Aktulizowanie iloscki kary
  const handleVodka1 = (event) => {
    const { value } = event.target;
    setVodkaShot(1);
    
  }
  const handleVodka2 = (event) => {
    const { value } = event.target;
    setVodkaShot(2);
  }
  const handleVodka3 = (event) => {
    const { value } = event.target;
    setVodkaShot(3);
  }
  // Koniec aktualizowania kary


  const handleSubmit = async () => {
    try {
      const response = await axios.patch('/api/v1/cards', card)
      console.log('Odpowiedź serwera:', response.data);
    } catch (error) {
      console.error('Błąd:', error);
    }
  }


  const cardID = useParams().info

  useEffect(() => {
    const getCard = async () => {
      try {
        const response = await axios.get('../../api/v1/cards/' + cardID)
        setCard(response.data.card)
        console.log(response.data.card);
        setTypeText(response.data.card.typ)
        setContentText(response.data.card.tresc)
        setIterText(response.data.card.ilosc)
        setVodkaShot(response.data.card.kara)
        setVersionText('Classic')
      } catch (error) {
        console.log(error);
      }
    }
    getCard()
  }, [])



  return (
    <div className="container-settings">
      <SideNavbar />
      <Row>
        <h1 className='h1-title'>Edytowanie Karty</h1>
        <Col lg="5" className='left '>
          <div className='main-frame'>
            <form className="card-form">
              <select value={typeText} onChange={handlev1} className='formInput'>
                <option value="Prawda" >Prawda</option>
                <option value="Wyzwanie" >Wyzwanie</option>
              </select>

              <div>
                <label htmlFor="">Wersja</label>
                <br />
                <input type="text" value={versionText} className='formInput' name='wersja' disabled />
              </div>

              <div>
                <label htmlFor="">Ilość powtórzeń</label>
                <br />
                <input type="number" value={iterText} onChange={handlev3} className='formInput' name='ilosc' />
              </div>

              <div>
                <label htmlFor="">Treść</label> <br />
                <textarea name="tresc" value={contentText} onChange={handlev4}
                  className='formInput content' cols="20" rows="10">
                </textarea>

                <input onClick={handleSubmit} value='Zatwierdź' className='submitButton' type='submit' />
              </div>

            </form>
          </div>


        </Col>

        <Col lg="6" className='right'>
          <div className='card' id='card'>
            <div className='card-type'>
              <h1>{typeText}</h1>
            </div>
            <div className='card-wrapper'>
              <div className='card-content'>
                {contentText}
              </div>
            </div>
            <div className='card-version'>
              <h5>{versionText}</h5>
            </div>
            <div className='vodka'>
              <img src={vodka} alt="vodka" id='vodka-card1' />
              <img src={vodka} alt="vodka" id='vodka-card2' />
              <img src={vodka} alt="vodka" id='vodka-card3' />
            </div>
          </div>



          <div className='options'>
            <button id='button1' className='image-button' onClick={handleVodka1}>
              <img src={vodka} alt="" />
            </button>
            <button id='button2' className='image-button' onClick={handleVodka2}>
              <img src={vodka} alt="" />
            </button>
            <button id='button3' className='image-button' onClick={handleVodka3}>
              <img src={vodka} alt="" />
            </button>

          </div>
        </Col>
      </Row>


    </div>
  )
}

export default AdminSingleCard