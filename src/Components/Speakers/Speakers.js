import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import TitleComponent from '../TitleComponent/TitleComponent'

import awImage from '../../Assets/speakers/AW.jpeg';
import aniaImage from '../../Assets/speakers/ania.jpeg';
import walanseImage from '../../Assets/speakers/walanse.jpeg';
import peterImage from '../../Assets/speakers/peter.jpeg';



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
      <h3>Speakers will be announced soon!</h3>
      {/* <div className='Speakers-Container'>
        <SpeakerCard title='dr Anna Kordala' img={aniaImage}>geneticist, science communicator, cure HSPB8</SpeakerCard>
        <SpeakerCard title='prof. A. Valance Washington' img={walanseImage}>biotechnology expert, Oakland University </SpeakerCard>
        <SpeakerCard title='prof. Peter McCourt' img={peterImage}>Biochemist & researcher at UiT in Norway</SpeakerCard>        
    
      </div> */}
    </div>
  )
}
