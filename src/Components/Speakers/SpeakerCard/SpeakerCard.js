import React from 'react'
import './SpeakerCard.scss';

import bg from '../../../Assets/bggrad.png';

export default function SpeakerCard({title,img,children}) {
  return (
    <div className='SpeakerCard'>
        <div className='SpeakerCard-IMG'>
            <img src={img} alt='speaker' />
        </div>
        <div className='SpeakerCard-Data'>
        <div className='SpeakerCard-BG'>
            <h2>{title}</h2>
        </div>
            <h3>{children}</h3>
        </div>
    </div>
  )
}
