import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import vodka from '../../../img/vodka.png'
import SideNavbar from '../aside/sideNavbar';
import Card from '../../gameMain/card';

function AdminNewCard(props) {

  const [card, setCard] = useState([])
  const [typeText, setTypeText] = useState('')
  const [versionText, setVersionText] = useState('')
  const [iterText, setIterText] = useState('')
  const [contentText, setContentText] = useState('')
  const [vodkaShot, setVodkaShot] = useState();
  const [clickedButton1, setClickedButton1] = useState(null)
  const [clickedButton2, setClickedButton2] = useState(null)
  const [clickedButton3, setClickedButton3] = useState(null)

  useEffect(() => {
    setTypeText('Prawda')
    setIterText(1)
    setVodkaShot(1)
    setVersionText('Classic')
    setClickedButton1(true)
  },[])


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
    setClickedButton1(true)
    setClickedButton2(false)
    setClickedButton3(false)

  }
  const handleVodka2 = (event) => {
    const { value } = event.target;
    setVodkaShot(2);
    setClickedButton1(true)
    setClickedButton2(true)
    setClickedButton3(false)
  }
  const handleVodka3 = (event) => {
    const { value } = event.target;
    setVodkaShot(3);
    setClickedButton1(true)
    setClickedButton2(true)
    setClickedButton3(true)
  }
  // Koniec aktualizowania kary


  const handleSubmit = async () => {
    try {
      const data = {
        typ: { typeText }.typeText,
        tresc: { contentText }.contentText,
        kara: { vodkaShot }.vodkaShot,
        ilosc: { iterText }.iterText
      }

      console.log(data);

      const response = await axios.post('/api/v1/cards/', data)
      console.log('Odpowiedź serwera:', response.data);
    } catch (error) {
      console.error('Błąd:', error);
    }
  }





  return (
    <div className="container-settings">
      <SideNavbar />
      <Row>
        <h1 className='h1-title'>Edytowanie Karty</h1>
        <Col lg="5" className='left '>
          <div className='main-frame'>
            <form className="card-form">
              <select value={typeText} onChange={handlev1} className='formInput type'>
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

          {/* <div className='card' id='card'>
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
          </div> */}

          <Card type={typeText} contentText={contentText} kara={vodkaShot} />


          <div className='options'>
            <button className={clickedButton1 ? 'image-button-active' : 'image-button'} onClick={handleVodka1}>
              <img src={vodka} alt="" />
            </button>
            <button className={clickedButton2 ? 'image-button-active' : 'image-button'} onClick={handleVodka2}>
              <img src={vodka} alt="" />
            </button>
            <button className={clickedButton3 ? 'image-button-active' : 'image-button'} onClick={handleVodka3}>
              <img src={vodka} alt="" />
            </button>

          </div>
        </Col>
      </Row>


    </div>
  )
}

export default AdminNewCard