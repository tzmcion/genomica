import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import TitleComponent from '../TitleComponent/TitleComponent'

import awImage from '../../Assets/speakers/AW.jpeg';
import aniaImage from '../../Assets/speakers/ania.jpeg';
import walanseImage from '../../Assets/speakers/walanse.jpeg';
import peterImage from '../../Assets/speakers/peter.jpeg';

import mostafa from "../../Assets/speakers/mostafa.png"
import ondrej from "../../Assets/speakers/ondrej.png"
import zaneta from "../../Assets/speakers/zaneta.png"

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
      {/* <h3>Speakers will be announced soon!</h3> */}
      <div className='Speakers-Container'>
        <SpeakerCard title='Ondřej Štěpánek, PhD' img={ondrej}>genetics, T-cell signalling and adaptive immunity</SpeakerCard>
        <SpeakerCard title='Mostafa Bakhti, PhD' img={mostafa}>cell developmental biologist, pancres development & endocrinogenesis</SpeakerCard>
        <SpeakerCard title='Żaneta Matuszek, PhD' img={zaneta}>molecular biologist, Huntington's disease & neurological disorders</SpeakerCard>        
      </div>
    </div>
  )
}
