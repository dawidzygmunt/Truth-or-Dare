import vodkaPng from '../../img/vodka.png'
import { useEffect, useState } from 'react';
import './card.css'


function Card(props) {
  console.log('vodka ' + props.kara);
  const versionText = 'Classic'
  let images = null;


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



  return (
    <div className='ContainerMineCard'>
      <div className='card' >
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