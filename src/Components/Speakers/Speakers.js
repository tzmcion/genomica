import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'

import magdaB from '../../Assets/speakers/magda-bienko.png'
import kobeB from '../../Assets/speakers/kobe.jpg';

export default function Speakers() {
  return (
    <div className='Speakers'>
      <div className='Speakers-Top'>
        <div className='Speakers-Top-Container'>
          <h5>Our Speakers</h5>
          <h2>Who will be there?</h2>
          <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h4>
        </div>
      </div>
      <div className='Speakers-Container'>
        <SpeakerCard title='Magdalena Bienko' img={magdaB}>Research Group Leader <br /> Bienko Group</SpeakerCard>
        <SpeakerCard title='Kobe Bryant' img={kobeB}>6'2 point-guard <br /> Los Angeles Lakers</SpeakerCard>
        <SpeakerCard title='Magdalena Bienko' img={magdaB}>Research Group Leader <br /> Bienko Group</SpeakerCard>
        <SpeakerCard title='Kobe Bryant' img={kobeB}>6'2 point-guard <br /> Los Angeles Lakers</SpeakerCard>
      </div>
    </div>
  )
}
