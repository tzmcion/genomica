import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import TitleComponent from '../TitleComponent/TitleComponent'

import template from '../../Assets/speakers/speaker_template.png'

export default function Speakers() {
  return (
    <div className='Speakers'>
      <div className='Speakers-Top'>
        <TitleComponent>
          <h5>Our Speakers</h5>
          <h2>Who will be there?</h2>
          <h4>It is important to know who is inspiring you and who you work with. This is the list of people which confirmed will participate as speakers in our conference</h4>
        </TitleComponent>
      </div>
      <div className='Speakers-Container'>
        <SpeakerCard title='Speaker #1' img={template}>dr Anna Kordala</SpeakerCard>
        <SpeakerCard title='Speaker #2' img={template}>prof. A. Valance Washington</SpeakerCard>
        <SpeakerCard title='Speaker #3' img={template}>prof. Peter McCourt</SpeakerCard>
    
      </div>
    </div>
  )
}
