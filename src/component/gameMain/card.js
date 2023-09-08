import vodkaPng from '../../img/vodka.png'
import { useState } from 'react';
import './card.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Card(props) {

  const navigate = useNavigate()
  const versionText = 'Classic'
  let images = null;


  const handleDelete = async () => {
    try {
      await axios.delete('../api/v1/cards/' + props.cardID)
      setIsDeleted(true)

    } catch (error) {

    }
  }

  const [isHovered, setIsHovered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isChallenge, setIsChallenge] = useState(null);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (props.kara === 1) {
    images = (
      <div>
        <img src={vodkaPng} alt="shot" />
      </div>
    );
  }

  if (props.kara === 2) {
    images = (
      <div>
        <img src={vodkaPng} alt="shot" />
        <img src={vodkaPng} alt="shot" />
      </div>
    );
  }

  if (props.kara === 3) {
    images = (
      <div>
        <img src={vodkaPng} alt="shot" />
        <img src={vodkaPng} alt="shot" />
        <img src={vodkaPng} alt="shot" />
      </div>
    );
  }


  const stylized = isHovered ? 'card-cover-active' : 'card-cover-normal'

  return (
    <div className='ContainerMineCard' style={isDeleted ? { display: 'none' } : {}}>
      <div className='card' onClick={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={stylized}>
          <button className='edit-btn' onClick={() => navigate('/admin/edit-single/' + props.cardID)}> Edytuj </button>
          <button className='delete-btn' onClick={handleDelete}> Usuń </button>
        </div>

        <div className='card-type'>
          <h1>{props.type}</h1>
        </div>
        <div className='card-wrapper'>
          <div className='card-content'>
            {props.contentText}
          </div>
        </div>
        <div className='card-version'>
          <h5>{versionText}</h5>
        </div>
        <div className='vodka'>
          {images}
        </div>
      </div>
    </div>
  )
}

export default Card