import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import TitleComponent from '../TitleComponent/TitleComponent'

import magdaB from '../../Assets/speakers/magda-bienko.png'
import chyllinski from '../../Assets/speakers/Chylinski.png';
import szczepinska from '../../Assets/speakers/szczepinska.jpg';

export default function Speakers() {
  return (
    <div className='Speakers'>
      <div className='Speakers-Top'>
        <TitleComponent>
          <h5>Our Speakers</h5>
          <h2>Who will be there?</h2>
          <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h4>
        </TitleComponent>
      </div>
      <div className='Speakers-Container'>
        <SpeakerCard title='Magdalena Bienko' img={magdaB}>Research Group Leader <br /> Bienko Group</SpeakerCard>
        <SpeakerCard title='Krzysztof Chyliński' img={chyllinski}>Molecular Biology<br /> CRISPR/Cas-9</SpeakerCard>
        <SpeakerCard title='Teresa Szczepińska' img={szczepinska}>Bioinformatics, 3D gen structure<br /> Warsaw University of Technology</SpeakerCard>
      </div>
    </div>
  )
}
